import React from 'react';
import './style.css';
import './w3css.css';
import Editor from './editor';
import Result from './result';

export default function App() {
  return (
    <div className="app">
      <Editor />
      <Result />
    </div>
  );
}
