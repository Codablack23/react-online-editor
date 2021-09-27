import React from 'react';
import Frame from 'react-frame-component';

export default function Result({ result }) {
  return (
    <div className="w3-text-orange">
      <h1>me</h1>
      <Frame className="result-frame">{result}</Frame>
    </div>
  );
}
