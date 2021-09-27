import React, { useState, useEffect } from 'react';

export default function EditorComponent({ changeCode }) {
  const [active, setActive] = useState('html');
  const [html_code, setHtmlCode] = useState('');
  const [css_code, setCssCode] = useState('');
  const [js_code, setJsCode] = useState('');
  const [fullCode, setFullCode] = useState();

  const addCode=()=>{
    setFullCode(`
     <style>
     ${css_code}
     </style>
     ${html_code}
     <script>
     ${js_code}
     </script
    `)
  }
  console.log(css_code, html_code, js_code);
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
              onChange={(e) => {
                setHtmlCode(e.target.value);
                changeCode(fullCode);
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
              onChange={(e) => {
                setCssCode(e.target.value);
                changeCode(fullCode);
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
              onChange={(e) => {
                setJsCode(e.target.value);
                changeCode(fullCode);
              }}
            ></textarea>
          </div>
        )}
      </div>
    </div>
  );
}
