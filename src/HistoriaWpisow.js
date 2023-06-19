import { useRef, useState } from 'react';
import React from 'react';

const HistoriaWpisow = () => {
  const [text, setText] = useState('');
  const [showHistory, setShowHistory] = useState(false);
  const historyRef = useRef([]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleButtonClick = () => {
    setShowHistory(!showHistory);
  };

  const handleSaveText = () => {
    historyRef.current.push(text);
    setText('');
  };

  return (
    <div className="container">
      <h2>Post History</h2>
      <input
        className="input"
        placeholder="Enter your post here..."
        type="text"
        onChange={handleTextChange}
        value={text}
      />
      <button className="button" onClick={handleSaveText}>
        Save
      </button>
      <button className="button" onClick={handleButtonClick}>
        {showHistory ? 'Hide history' : 'Show history'}
      </button>

      {showHistory && (
        <div className="wrapper">
          <ul>
            {historyRef.current.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HistoriaWpisow;
