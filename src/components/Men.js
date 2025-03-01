import React from 'react';
import men from '../assets/men.png'
function Men() {
return (
    <div style={{ width: '100%', height: '100%' }}>
        <h1>Hello from Men</h1>
        
        <img 
      src={men}
      resizeMode="cover"
        width="600" height="700"
        className="" alt="logo" />
    </div>
);
}

export default Men;
