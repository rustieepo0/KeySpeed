/*import React, { useState, useEffect } from 'react';
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
    setText("Zero possible towering defiant coherent scatter rabid adhesive.");
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
*/

import React, { useState } from 'react';
import './TypingTest.css';

const wordList = [
  //'apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew',
  'zero', 'trance', 'rotation', 'receipt', 'position', 'tolerate', 'rifle', 'notebook',
  'latest', 'dream', 'temple', 'census', 'posture', 'dynamite', 'fun', 'kraken', 'remedy', 'fee',
   'expectation', 'elbow', 'produce', 'workshop', 'fat', 'no', 'think', 'mail', 'thirteen', 'confession', 'extension', 'mention',
];

function TypingTest({ onTypingSpeedChange }) {
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [wordsPerMinute, setWordsPerMinute] = useState('0.00');
  const [mistake, setMistake] = useState(false);
  const [text, setText] = useState('');

  const generateRandomWords = () => {
    const randomWords = [];
    while (randomWords.length < 8) {
      const randomIndex = Math.floor(Math.random() * wordList.length);
      const randomWord = wordList[randomIndex];
      randomWords.push(randomWord);
    }
    return randomWords.join(' ');
  };

  const startTest = () => {
    setUserInput('');
    setStartTime(null);
    const randomText = generateRandomWords();
    setText(randomText);
    setWordsPerMinute('0.00');
    onTypingSpeedChange('0.00');
    setMistake(false);
  }

  const handleInput = (event) => {
    const inputText = event.target.value;
    setUserInput(inputText);

    if (text.startsWith(inputText)) {
      setMistake(false);
    } else {
      setMistake(true);
    }

    if (!startTime && inputText) {
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
        className={mistake ? 'mistake' : ''}
      />
      {wordsPerMinute && <div>Words per minute: {wordsPerMinute}</div>}
    </div>
  );
}

export default TypingTest;
