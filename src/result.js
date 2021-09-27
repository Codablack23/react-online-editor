import React from 'react';

export default function Result({ result }) {
  return (
    <div className="w3-text-orange">
      <h1>me</h1>
      <iframe
        className="result-frame"
        value={result}
      ></iframe>
    </div>
  );
}
