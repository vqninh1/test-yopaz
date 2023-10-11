import logo from './logo.svg';
import './App.css';
import { memo } from 'react';

const IconSpin = () => {
  return (
    <div className="mt-20">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </div>
  );
};

export default memo(IconSpin);
