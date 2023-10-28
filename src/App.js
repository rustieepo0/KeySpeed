// App.js
import React, { useState } from 'react'
//import React from 'react';
import TypingTest from './TypingTest'; // Import the TypingTest component
import './App.css';

function App() {
  const [typingSpeed, setTypingSpeed] = useState(null);

  return (
    <div className="App">
      <div className="navbar">
        <h1>KeySpeed</h1>
      </div>
      <header className="App-header">
      <h3>Typing-Speed: {typingSpeed} WPM</h3>
      </header>
      <TypingTest onTypingSpeedChange={setTypingSpeed} /> {/* Include the TypingTest component */}
    </div>
  );
}

export default App;
