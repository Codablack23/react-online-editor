import React from 'react';

export default function Result({ result }) {
  return (
    <div className="w3-text-orange">
      <h1>me</h1>
      <iframe src={result} className="result-frame"></iframe>
    </div>
  );
}
