import React, { useState } from 'react';

export default function EditorComponent() {
  const [active, setActive] = useState('html');
  const [html_code, setHtmlCode] = useState('');
  const [css_code, seCssCode] = useState('');
  const [js_code, setJsCode] = useState('');

  return (
    <div className="editor">
      <div className=" d-flex justify-content-between tab-nav">
        <nav>
          <ul>
            <li
              className="tab-link mr-3 btn w3-text-grey w3-card-4"
              onClick={() => {
                setActive('html');
              }}
            >
              HTML
            </li>
            <li
              className="tab-link mr-3 btn w3-text-grey w3-card-4"
              onClick={() => {
                setActive('css');
              }}
            >
              CSS
            </li>
            <li
              className="tab-link mr-3 btn w3-text-grey w3-card-4"
              onClick={() => {
                setActive('js');
              }}
            >
              JS
            </li>
          </ul>
        </nav>
        <div className="view">
          <button className="btn w3-red">View</button>
        </div>
      </div>
      <div className="editor-container">
        {active == 'html' && (
          <div className="html">
            <textarea
              placeholder="Your HTML Code Goes Here"
              className="html-text w3-card-4 w3-text-blue"
            ></textarea>
          </div>
        )}
        {active == 'css' && (
          <div className="css">
            <textarea
              placeholder="Your CSS Code Goes Here"
              className="css-text w3-card-4 w3-text-green"
            ></textarea>
          </div>
        )}
        {active == 'js' && (
          <div className="js">
            <textarea
              placeholder="Your Javascript Code Goes Here"
              className="js-text w3-card-4 w3-text-red"
            ></textarea>
          </div>
        )}
      </div>
    </div>
  );
}
