import React from 'react';
import women from '../assets/women.png'
function Women() {
  return (
    <div>
      <h1>Hello from Women</h1>
      <img 
      src={women}
      resizeMode="cover"
        width="600" height="700"
        className="" alt="logo" />
    </div>
  );
}

export default Women;
