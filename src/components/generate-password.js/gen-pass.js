import React, { useState, useEffect } from 'react';
import usePassword from '../use-password/use-password';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './gen-pass.scss';

export const GenPass = () => {
  const [password, pass] = usePassword();
  const [marks, setMarks] = useState({
    length: 20,
    isUpper: false,
    isLower: false,
    isPunctuation: false,
  });

  const handleGenerateButton = () => {
    pass(marks);
  };

  const handleCheckboxChange = (event) => {
    if (event.target.name === 'isUpper') {
      setMarks({ ...marks, isUpper: event.target.checked });
    }
    if (event.target.name === 'isLower') {
      setMarks({ ...marks, isLower: event.target.checked });
    }
    if (event.target.name === 'isPunctuation') {
      setMarks({ ...marks, isPunctuation: event.target.checked });
    }
  };

  return (
    <div className="generate-pass">
      <div className="checkbox-div">
        <label>
          Uppercase
          <input
            value="isUpper"
            type="checkbox"
            name="isUpper"
            onChange={(e) => handleCheckboxChange(e)}
          />
        </label>
        <label>
          Lowercase
          <input
            type="checkbox"
            name="isLower"
            onChange={(e) => handleCheckboxChange(e)}
          />
        </label>
        <label>
          Punctuation
          <input
            type="checkbox"
            name="isPunctuation"
            onChange={(e) => handleCheckboxChange(e)}
          />
        </label>
      </div>
      <div>
        <button
          className="generate-button"
          onClick={() => handleGenerateButton()}
        >
          Generate Password
        </button>
      </div>
      <div className="pass-container">
        <p>{password}</p>
      </div>
      <div>
        <CopyToClipboard text={password}>
          <img
            height="32px"
            src={`${process.env.PUBLIC_URL}/static-files/clipboard-icon.png`}
            alt="clipboard"
          />
        </CopyToClipboard>
      </div>
    </div>
  );
};
