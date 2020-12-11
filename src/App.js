import React from 'react';

import { positive } from './helpers/positive';
import { negative } from './helpers/negative';

import './App.css';

function App() {
  const [hoverDiv, setHoverDiv] = React.useState('');
  const [posQuote, setPosQuote] = React.useState('');
  const [negaQuote, setNegaQuote] = React.useState('');

  function renderSmiley() {
    let quote = positive[Math.floor(Math.random() * positive.length)];
    setPosQuote(quote);
  }

  function renderAngry() {
    let quote = negative[Math.floor(Math.random() * negative.length)];
    setNegaQuote(quote);
  }

  return (
    <div
      className={
        hoverDiv === 'left' ? 'container hover-left' : 'container hover-right'
      }
      id="container"
    >
      <div
        className="split left"
        onMouseEnter={() => setHoverDiv('left')}
        onMouseLeave={() => {
          setHoverDiv('');
          setPosQuote('');
        }}
      >
        <span className="feeling">
          <i className="fas fa-smile-wink smiley"></i>
        </span>
        <a
          href="#container"
          className="btn btn-smiley"
          onClick={() => renderSmiley()}
        >
          Click Me
        </a>
        <h1 className="quote-left">{posQuote}</h1>
        <h2 className="credit">
          HowRU a <a href="https://karencumlat.ca">Karen Cumlat</a> project
        </h2>
      </div>
      <div
        className="split right"
        onMouseEnter={() => setHoverDiv('right')}
        onMouseLeave={() => {
          setHoverDiv('');
          setNegaQuote('');
        }}
      >
        <span className="feeling">
          <i className="far fa-frown-open angry"></i>
        </span>
        <a
          href="#container"
          className="btn btn-angry"
          onClick={() => renderAngry()}
        >
          Click Me
        </a>
        <h1 className="quote-right">{negaQuote}</h1>
        <h2 className={hoverDiv === 'right' ? 'talk' : 'talk hidden'}>
          <a href="mailto:karencumlat@gmail.com">Let's talk</a>
        </h2>
      </div>
    </div>
  );
}

export default App;
