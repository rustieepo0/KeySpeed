import React, { useState, useEffect } from 'react';
import './TypingTest.css';

function TypingTest({ onTypingSpeedChange }) {
  const [text, setText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [wordsPerMinute, setWordsPerMinute] = useState('0.00');
  const [mistake, setMistake] = useState(false); // Track mistakes

  const startTest = () => {
    setUserInput('');
    setStartTime(null); // Reset the start time
    setText("This is your test text. Replace it with your own content.");
    setWordsPerMinute('0.00');
    onTypingSpeedChange('0.00');
    setMistake(false); // Reset mistake state
  };

  const handleInput = (event) => {
    const inputText = event.target.value;
    setUserInput(inputText);

    if (text.startsWith(inputText)) {
      // No mistake
      setMistake(false);
    } else {
      // Mistake detected
      setMistake(true);
    }

    if (!startTime && inputText) {
      // Start the timer when the user begins typing
      setStartTime(Date.now());
    }

    if (text.startsWith(inputText)) {
      const timeInSeconds = (Date.now() - startTime) / 1000;
      const words = inputText.trim().split(' ').length;
      const wpm = (words / timeInSeconds) * 60;
      setWordsPerMinute(wpm.toFixed(2));
      onTypingSpeedChange(wpm.toFixed(2));
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
        className={mistake ? 'mistake' : ''} // Apply the 'mistake' class when there's a mistake
      />
      {wordsPerMinute && <div>Words per minute: {wordsPerMinute}</div>}
    </div>
  );
}

export default TypingTest;
