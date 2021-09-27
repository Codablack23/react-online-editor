import React from 'react';
import Frame, { FrameContextConsumer } from 'react-frame-component';

export default function Result({ result }) {
  return (
    <div className="w3-text-orange">
      <h1>me</h1>
      <Frame>
        <FrameContextConsumer>
          {
            // Callback is invoked with iframe's window and document instances
            ({ document, window }) => {
              result;
            }
          }
        </FrameContextConsumer>
      </Frame>
    </div>
  );
}
