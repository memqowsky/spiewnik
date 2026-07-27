import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSongById } from '../data/songs';

const SECONDS_PER_LINE = 2.6; // baseline pace used to auto-generate scroll duration
const DEFAULT_SPEED = 1.2;
const FONT_SCALES = [0.8, 0.9, 1, 1.1, 1.25, 1.4, 1.6];
const DEFAULT_FONT_LEVEL = 2; // index into FONT_SCALES, i.e. 1.0x

function countLines(song) {
  let total = 0;
  for (const section of song.sections) {
    if (section.instrumental) {
      total += 1;
      continue;
    }
    const rep = section.repeat || 1;
    total += (section.lines?.length || 0) * rep;
  }
  return total;
}

export default function SongView() {
  const { id } = useParams();
  const song = getSongById(id);

  const scrollRef = useRef(null);
  const rafRef = useRef(null);
  const lastTsRef = useRef(null);
  const pxPerSecRef = useRef(0);
  const scrollPosRef = useRef(0); // sub-pixel accumulator; el.scrollTop rounds to whole px

  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(DEFAULT_SPEED);
  const [fontLevel, setFontLevel] = useState(() => {
    const saved = Number(localStorage.getItem('spiewnik-font-level'));
    return Number.isInteger(saved) && saved >= 0 && saved < FONT_SCALES.length
      ? saved
      : DEFAULT_FONT_LEVEL;
  });

  useEffect(() => {
    localStorage.setItem('spiewnik-font-level', String(fontLevel));
  }, [fontLevel]);

  // Keep the screen awake while a song is open (phone is propped up, hands-free).
  useEffect(() => {
    let wakeLock = null;
    let cancelled = false;

    const requestWakeLock = async () => {
      try {
        if ('wakeLock' in navigator) {
          wakeLock = await navigator.wakeLock.request('screen');
        }
      } catch {
        // Not supported / permission denied — degrade silently.
      }
    };

    requestWakeLock();

    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible' && !cancelled) requestWakeLock();
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      cancelled = true;
      document.removeEventListener('visibilitychange', onVisibilityChange);
      if (wakeLock) wakeLock.release().catch(() => {});
    };
  }, []);

  const totalLines = useMemo(() => (song ? countLines(song) : 0), [song]);

  // Recompute px/sec whenever the content height or speed changes.
  useEffect(() => {
    if (!scrollRef.current || !song) return;
    const el = scrollRef.current;
    const distance = el.scrollHeight - el.clientHeight;
    const baseDurationSec = Math.max(totalLines * SECONDS_PER_LINE, 1);
    pxPerSecRef.current = Math.max(distance, 0) / baseDurationSec;
  }, [song, totalLines, speed]);

  useEffect(() => {
    if (!isPlaying) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTsRef.current = null;
      return;
    }

    const step = (ts) => {
      const el = scrollRef.current;
      if (!el) return;
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      const maxScroll = el.scrollHeight - el.clientHeight;

      // If the user dragged/flicked the content since the last frame, adopt
      // that position as the new baseline instead of snapping back — the
      // scroll should keep moving forward from wherever the finger left it.
      if (Math.abs(el.scrollTop - scrollPosRef.current) > 1) {
        scrollPosRef.current = el.scrollTop;
      }

      scrollPosRef.current = Math.min(scrollPosRef.current + pxPerSecRef.current * speed * dt, maxScroll);
      el.scrollTop = scrollPosRef.current;

      if (scrollPosRef.current >= maxScroll - 0.5) {
        setIsPlaying(false);
        return;
      }
      rafRef.current = requestAnimationFrame(step);
    };

    scrollPosRef.current = scrollRef.current ? scrollRef.current.scrollTop : 0;
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isPlaying, speed]);

  const restart = () => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  };

  const shrinkFont = () => setFontLevel((l) => Math.max(l - 1, 0));
  const growFont = () => setFontLevel((l) => Math.min(l + 1, FONT_SCALES.length - 1));

  if (!song) {
    return (
      <div className="page">
        <p>Nie znaleziono piosenki.</p>
        <Link to="/">Wróć do spisu treści</Link>
      </div>
    );
  }

  return (
    <div className="song-page">
      <div
        className="song-scroll"
        ref={scrollRef}
        style={{ '--font-scale': FONT_SCALES[fontLevel] }}
      >
        <div className="song-header">
          <h1>{song.title}</h1>
          <p className="song-meta">
            {song.artist}
            {song.key ? ` · tonacja ${song.key}` : ''}
            {song.capo ? ` · capo ${song.capo}` : ''}
          </p>
          {song.chordsUsed.length > 0 && (
            <div className="chip-row">
              {song.chordsUsed.map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>
          )}
        </div>

        {song.sections.map((section, i) => (
          <div className="section" key={i}>
            {section.label && <h3 className="section-label">{section.label}</h3>}
            {section.instrumental ? (
              <div className="instrumental">{section.instrumental}</div>
            ) : (
              section.lines.map((line, li) =>
                line.blank ? (
                  <div className="lyric-line blank" key={li} />
                ) : (
                  <div className="lyric-line" key={li}>
                    {line.tokens.map((tok, ti) => (
                      <span className="token" key={ti}>
                        <span className="chord">{tok.chord || ' '}</span>
                        <span className="word">{tok.text || ' '}</span>
                      </span>
                    ))}
                  </div>
                )
              )
            )}
          </div>
        ))}
        <div className="song-end-spacer" />
      </div>

      <div className="controls-bar">
        <div className="controls-row">
          <Link to="/" className="ctrl-btn back-btn" aria-label="Wróć do spisu treści">
            ← Spis
          </Link>
          <button
            type="button"
            className="ctrl-btn play-btn"
            onClick={() => setIsPlaying((p) => !p)}
          >
            {isPlaying ? '⏸ Pauza' : '▶ Scroll'}
          </button>
          <button type="button" className="ctrl-btn" onClick={restart}>
            ⤒ Reset
          </button>
          <div className="font-controls">
            <button
              type="button"
              className="ctrl-btn font-btn"
              onClick={shrinkFont}
              disabled={fontLevel === 0}
              aria-label="Zmniejsz czcionkę"
            >
              A-
            </button>
            <button
              type="button"
              className="ctrl-btn font-btn"
              onClick={growFont}
              disabled={fontLevel === FONT_SCALES.length - 1}
              aria-label="Powiększ czcionkę"
            >
              A+
            </button>
          </div>
        </div>
        <div className="speed-control">
          <span>Tempo {speed.toFixed(1)}x</span>
          <input
            type="range"
            min="0.4"
            max="2.5"
            step="0.1"
            value={speed}
            onChange={(e) => setSpeed(parseFloat(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}
