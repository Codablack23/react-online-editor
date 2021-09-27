import React from 'react';
import Frame, { FrameContextConsumer } from 'react-frame-component';

export default function Result({ result }) {
  return (
    <div className="w3-text-orange">
      <iframe srcDoc={result} src="" frameBorder="0"></iframe>
    </div>
  );
}
