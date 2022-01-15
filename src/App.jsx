import React from 'react';
import './style/base-style.css';
import {
  BrowserRouter,
  Routes,
  Navigate,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Pieces from './pages/Pieces';
import Piece from './pages/Piece';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pieces" element={<Pieces />}>
            <Route path=":pieceId" element={<Piece />} />
            <Route index element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
