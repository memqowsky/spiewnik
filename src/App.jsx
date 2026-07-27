import { Routes, Route } from 'react-router-dom';
import SongList from './components/SongList.jsx';
import SongView from './components/SongView.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SongList />} />
      <Route path="/piosenka/:id" element={<SongView />} />
    </Routes>
  );
}
