import React from 'react';

export default function EditorComponent() {
  return (
    <div className="editor">
      <div className=" d-flex justify-content-between tab-nav">
        <nav>
          <ul>
            <li className="tab-link mr-3 btn w3-text-grey w3-card-4">HTML</li>
            <li className="tab-link mr-3 btn w3-text-grey w3-card-4">CSS</li>
            <li className="tab-link mr-3 btn w3-text-grey w3-card-4">JS</li>
          </ul>
        </nav>
        <div className="view">
          <button className="btn w3-red">View</button>
        </div>
      </div>
      <div className="editor-container">
        <div className="html">
          <text-area className="html-text"></text-area>
        </div>
        <div className="css">
          <text-area className="css-text"></text-area>
        </div>
        <div className="js">
          <text-area className="js-text"></text-area>
        </div>
      </div>
    </div>
  );
}
