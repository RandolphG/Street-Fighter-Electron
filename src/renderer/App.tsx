import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import { Game } from './Game';
import { fighterState } from './entities/fighters/utils';

const Hello = () => {
  useEffect(() => {
    console.log('START -->');
    populateMoveDropdown();
    new Game().start();
  });
  /**
   * Populate move dropdown form element.
   * */
  function populateMoveDropdown() {
    const dropdown = document.getElementById('state-dropdown');

    Object.entries(fighterState).forEach(([, value]) => {
      const option = document.createElement('option');
      option.setAttribute('value', value);
      option.innerText = value;
      dropdown!.appendChild(option);
    });
  }
  return (
    <>
      <form>
        <div>
          <input id="Akuma" type="checkbox" name="Akuma" value="Akuma" />
          <label htmlFor="Akuma">Akuma</label>
        </div>
        <select id="state-dropdown" name="state"></select>
        <button type="submit">Transition</button>
      </form>
      <canvas className="gameCanvas" width="384" height="224"></canvas>
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
