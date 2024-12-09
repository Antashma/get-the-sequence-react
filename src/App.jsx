import Game from './pages/Game/Board'
import Instructions from './pages/Instructions';
import { Routes, Route } from 'react-router';

import './App.css'

function App() {

  return (
    <div id="app">
      <header>
        <h1>Get the Sequence</h1>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Instructions/>} />
          <Route path="/play" element={<Game/>} />
        </Routes>
      </main>

      <footer>
        <p>Made with ✨ and ☕ by <a href="http://www.github.com/antashma" target="_blank">@Antashma</a></p>
      </footer>
    </div>
  )
}

export default App
