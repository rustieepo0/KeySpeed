/*import React, { useState } from 'react';

version:1

import './TypingTest.css'; // Import your CSS file
import './App.css';

function TypingTest({ onTypingSpeedChange }) {
  const [text, setText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [wordsPerMinute, setWordsPerMinute] = useState(null);

  const startTest = () => {
    const randomText = "This is your test text. Replace it with your own content.";
    setText(randomText);
    setStartTime(Date.now());
  };

  const handleInput = (event) => {
    const inputText = event.target.value;
    setUserInput(inputText);

    if (text.startsWith(inputText)) {
      if (text === inputText) {
        setEndTime(Date.now());
        const words = text.split(' ').length;
        const timeInSeconds = (endTime - startTime) / 1000;
        const wpm = (words / timeInSeconds) * 60;
        setWordsPerMinute(wpm.toFixed(2));

        onTypingSpeedChange(wpm.toFixed(2));
      }
    }
  };

  return (
    <div className="TypingTestCenter">
      <button onClick={startTest}>Start Typing Test</button>
      <div className="TestText">{text}</div>
      <input
        type="text"
        placeholder="Start typing here..."
        value={userInput}
        onChange={handleInput}
      />
      {wordsPerMinute && <div>Words per minute: {wordsPerMinute}</div>}
    </div>
  );
}

export default TypingTest;
*/

import React, { useState, useEffect } from 'react';

import './TypingTest.css';

function TypingTest({ onTypingSpeedChange }) {
  const [text, setText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [wordsPerMinute, setWordsPerMinute] = useState(0);

  const startTest = () => {
    const randomText = "This is your test text. Replace it with your own content.";
    setText(randomText);
    setStartTime(Date.now());
  };

  const handleInput = (event) => {
    const inputText = event.target.value;
    setUserInput(inputText);

    if (text.startsWith(inputText)) {
      if (text === inputText) {
        setEndTime(Date.now());
        const words = text.split(' ').length;
        const timeInSeconds = (endTime - startTime) / 1000;
        const wpm = (words / timeInSeconds) * 60;
        setWordsPerMinute(wpm.toFixed(2));
        onTypingSpeedChange(wpm.toFixed(2));
      }
    }
  };

  // Calculate typing speed dynamically while the user types
  useEffect(() => {
    if (startTime) {
      const words = userInput.trim().split(' ').length;
      const timeInSeconds = (Date.now() - startTime) / 1000;
      const wpm = (words / timeInSeconds) * 60;
      setWordsPerMinute(wpm.toFixed(2));
      onTypingSpeedChange(wpm.toFixed(2));
    }
  }, [userInput, startTime, onTypingSpeedChange]);

  return (
    <div className="TypingTestCenter">
      <button onClick={startTest}>Start Typing Test</button>
      <div className="TestText">{text}</div>
      <input
        type="text"
        placeholder="Start typing here..."
        value={userInput}
        onChange={handleInput}
      />

    </div> 
  );
}

export default TypingTest;
