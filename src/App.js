import React, { useState } from 'react';
import {DiGithubBadge} from "react-icons/di"
import TypingTest from './TypingTest';
import './App.css';

function App() {
  const [typingSpeed, setTypingSpeed] = useState(null);

  return (
    <div className="App">
      <div className="NavBar">
        <h1>KeySpeed</h1>
      </div>
      <div className="App-container">
        <header className="App-header">
          <h2>Typing Speed: {typingSpeed} WPM</h2>
        </header>
        <TypingTest onTypingSpeedChange={setTypingSpeed} />
      </div>

      <div className='buttonContainer'>
          <a href="https://github.com/rustieepo0" target='_blank' rel='noopener noreferrer'>
            <button className='github-button'><DiGithubBadge></DiGithubBadge>Github</button>
          </a>
          <button className='text-button'>Themes</button>
      </div>
      <i>(!Still Working on Themes!)</i>
      <br />
      <i>.</i>
      <br />
      <i>.</i>
      <br />
      <i>Testing the waters...</i>

    </div>
  );
}

export default App;
