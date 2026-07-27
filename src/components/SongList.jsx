import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { songs } from '../data/songs';

export default function SongList() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return songs;
    return songs.filter(
      (s) => s.title.toLowerCase().includes(q) || s.artist.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="page song-list-page">
      <header className="list-header">
        <h1>Śpiewnik by Memek</h1>
        <p className="subtitle">Poland Rock Festival</p>
      </header>

      <input
        type="search"
        className="search-input"
        placeholder="Szukaj piosenki lub wykonawcy…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoFocus
      />

      <ul className="song-list">
        {filtered.map((song) => (
          <li key={song.id}>
            <Link to={`/piosenka/${song.id}`} className="song-list-item">
              <span className="song-title">{song.title}</span>
              <span className="song-artist">{song.artist}</span>
            </Link>
          </li>
        ))}
        {filtered.length === 0 && <li className="no-results">Brak wyników</li>}
      </ul>
    </div>
  );
}
