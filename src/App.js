import React,{useState} from 'react';
import './style.css';
import './w3css.css';
import Editor from './editor';
import Result from './result';

export default function App() {
  const [code,setCode]=useState("")
  const changeCode=(end_code)=>{
    setCode(end_code)
  }
  return (
    <div className="app">
      <Editor />
      <Result />
    </div>
  );
}
