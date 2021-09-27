import React from 'react';

export default function Result({ result }) {
  return (
    <div className="w3-text-orange">
      <h1>me</h1>
      <iframe src="https://www.youtube.com/embed/cWDJoK8zw58" Onclick={(e)=>{console.log(e.target)}}></iframe>
    </div>
  );
}
