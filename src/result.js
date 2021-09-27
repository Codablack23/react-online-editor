import React from 'react';
import Frame, { FrameContextConsumer } from 'react-frame-component';

export default function Result({ result }) {
  return (
    <div className="w3-text-orange">
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
