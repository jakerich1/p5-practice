import React from 'react';
import {
  Outlet,
  useNavigate,
} from 'react-router-dom';

export default function Pieces() {
  const navigate = useNavigate();

  return (
    <div className="piece-container">
      <div className="piece-inner">

        <div
          id="back-button"
          role="button"
          tabIndex={0}
          onKeyDown={() => { navigate('/'); }}
          onClick={() => { navigate('/'); }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-left" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="5" y1="12" x2="9" y2="16" />
            <line x1="5" y1="12" x2="9" y2="8" />
          </svg>
          <span>Home</span>
        </div>

        <Outlet />
      </div>
    </div>
  );
}
