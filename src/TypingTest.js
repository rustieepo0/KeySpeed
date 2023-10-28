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

/*

version: 2

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
*/

/*

version: new
import React, { useState, useEffect } from 'react';
import './TypingTest.css';

function TypingTest({ onTypingSpeedChange }) {
  const [text, setText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);

  const startTest = () => {
    const randomText = "This is your test text. Replace it with your own content.";
    setText(randomText);
    setStartTime(Date.now());
  };

  const handleInput = (event) => {
    const inputText = event.target.value;
    setUserInput(inputText);
  };

  useEffect(() => {
    if (startTime) {
      const words = userInput.trim().split(' ').length;
      const timeInSeconds = (Date.now() - startTime) / 1000;
      const wpm = (words / timeInSeconds) * 60;
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
*/

/*

version

import React, { useState, useEffect } from 'react';
import './TypingTest.css';

function TypingTest({ onTypingSpeedChange }) {
  const [text, setText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);

  const startTest = () => {
    // Reset typing speed and clear text box
    onTypingSpeedChange('0.00');
    setUserInput('');

    //Reset start time to null
    setStartTime(null);

    const randomText = "This is your test text. Replace it with your own content.";
    setText(randomText);
    setStartTime(Date.now());
  };

  const handleInput = (event) => {
    const inputText = event.target.value;
    setUserInput(inputText);
  };

  useEffect(() => {
    if (startTime) {
      const words = userInput.trim().split(' ').length;
      const timeInSeconds = (Date.now() - startTime) / 1000;
      const wpm = (words / timeInSeconds) * 60;
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
*/

/*
import React, { useState, useEffect } from 'react';
import './TypingTest.css';

function TypingTest({ onTypingSpeedChange }) {
  const [text, setText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const startTest = () => {
    setUserInput('');
    setStartTime(Date.now());
    setEndTime(null); // Reset the end time
    setText("This is your test text. Replace it with your own content.");
    onTypingSpeedChange('0.00'); // Reset typing speed
  };

  const handleInput = (event) => {
    const inputText = event.target.value;
    setUserInput(inputText);

    if (text.startsWith(inputText)) {
      if (text === inputText) {
        setEndTime(Date.now());
      }
    }
  };

  useEffect(() => {
    if (startTime && endTime) {
      const words = text.trim().split(' ').length;
      const timeInSeconds = (endTime - startTime) / 1000;
      const wpm = (words / timeInSeconds) * 60;
      onTypingSpeedChange(wpm.toFixed(2));
    }
  }, [text, startTime, endTime, onTypingSpeedChange]);

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

*/

import React, { useState, useEffect } from 'react';
import './TypingTest.css';

function TypingTest({ onTypingSpeedChange }) {
  const [text, setText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [wordsPerMinute, setWordsPerMinute] = useState('0.00');

  const startTest = () => {
    setUserInput('');
    setStartTime(null); // Reset the start time
    setText("This is your test text. Replace it with your own content.");
    setWordsPerMinute('0.00');
    onTypingSpeedChange('0.00');
  };

  const handleInput = (event) => {
    const inputText = event.target.value;
    setUserInput(inputText);

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
      />
      {wordsPerMinute && <div>Words per minute: {wordsPerMinute}</div>}
    </div>
  );
}

export default TypingTest;
