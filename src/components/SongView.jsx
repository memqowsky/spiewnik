import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSongById } from '../data/songs';

const SECONDS_PER_LINE = 2.6; // baseline pace used to auto-generate scroll duration

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
  const [speed, setSpeed] = useState(1);

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

  const pauseOnManualScroll = () => {
    if (isPlaying) setIsPlaying(false);
  };

  const restart = () => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  };

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
        onWheel={pauseOnManualScroll}
        onTouchStart={pauseOnManualScroll}
        onPointerDown={pauseOnManualScroll}
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
                        {tok.chord && <span className="chord">{tok.chord}</span>}
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
        <Link to="/" className="ctrl-btn back-btn" aria-label="Wróć do spisu treści">
          ← Spis
        </Link>
        <button
          type="button"
          className="ctrl-btn play-btn"
          onClick={() => setIsPlaying((p) => !p)}
        >
          {isPlaying ? '⏸ Pauza' : '▶ Autoscroll'}
        </button>
        <button type="button" className="ctrl-btn" onClick={restart}>
          ⤒ Od nowa
        </button>
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
