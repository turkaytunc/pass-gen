import React, { useState } from 'react';
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
    let states = { ...marks };
    let name = event.target.name;

    for (const key in states) {
      if (states.hasOwnProperty(key) && name === key) {
        setMarks({ ...marks, [key]: name });
      }
    }
  };

  return (
    <div className="generate-pass">
      <div className="checkbox-div">
        <div className="label-wrapper">
          <label htmlFor="length">Length </label>
          <label htmlFor="isUpper">Uppercase</label>
          <label htmlFor="isLower">Lowercase</label>
          <label htmlFor="isPunctuation">Punctuation</label>
        </div>
        <div className="input-wrapper">
          <input
            type="number"
            style={{ width: '50px', height: '15px' }}
            value={marks.length}
            onChange={(e) => setMarks({ ...marks, length: e.target.value })}
            name="length"
          />
          <input
            value="isUpper"
            type="checkbox"
            name="isUpper"
            onChange={(e) => handleCheckboxChange(e)}
          />
          <input
            type="checkbox"
            name="isLower"
            onChange={(e) => handleCheckboxChange(e)}
          />
          <input
            type="checkbox"
            name="isPunctuation"
            onChange={(e) => handleCheckboxChange(e)}
          />
        </div>
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
