import React, { useState } from 'react';

export default function EditorComponent() {
  const [active, setActive] = useState('html');
  const [html_code, setHtmlCode] = useState('');
  const [css_code, setCssCode] = useState('');
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
              value={html_code}
              className="html-text w3-card-4 w3-text-blue"
              onClick={(e) => {
                setHtmlCode(e.target.value);
              }}
            ></textarea>
          </div>
        )}
        {active == 'css' && (
          <div className="css">
            <textarea
              placeholder="Your CSS Code Goes Here"
              className="css-text w3-card-4 w3-text-green"
              value={css_code}
              onClick={(e) => {
                setCssCode(e.target.value);
              }}
            ></textarea>
          </div>
        )}
        {active == 'js' && (
          <div className="js">
            <textarea
              placeholder="Your Javascript Code Goes Here"
              className="js-text w3-card-4 w3-text-red"
              value={js_code}
              onClick={(e) => {
                setJsCode(e.target.value);
              }}
            ></textarea>
          </div>
        )}
      </div>
    </div>
  );
}
