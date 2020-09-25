import React, { useState, useEffect } from 'react';
import usePassword from '../use-password/use-password';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './gen-pass.scss';

export const GenPass = () => {
  const [password, pass] = usePassword();
  const [marks, setMarks] = useState({
    length: 0,
    isUpper: false,
    isLower: false,
    isPunctuation: false,
  });

  const handleGenerateButton = () => {
    setMarks({
      ...marks,
      length: 20,
      isLower: true,
      isUpper: false,
      isPunctuation: false,
    });
  };

  useEffect(() => {
    pass(marks);
  }, [marks]);
  return (
    <div className="generate-pass">
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
