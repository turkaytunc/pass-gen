import React from 'react';
import usePassword from '../use-password/use-password';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './gen-pass.css';

export const GenPass = () => {
  const [password, pass] = usePassword();
  return (
    <div className="gen-pass">
      <div>
        <button
          style={{
            height: '32px',
            borderRadius: '10px',
            border: 'none',
            outline: 'none',
          }}
          onClick={() => pass(20, true, true, true)}
        >
          Generate Password
        </button>
      </div>
      <div>
        <p
          style={{
            height: '32px',
          }}
        >
          {password}
        </p>
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
