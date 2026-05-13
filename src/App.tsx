import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rules from './pages/Rules';
import UPK from './pages/UPK';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/upk" element={<UPK />} />
      </Routes>
    </HashRouter>
  );
}
