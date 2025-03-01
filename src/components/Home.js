import React from 'react';
import women from '../assets/women.png'
import men from '../assets/men.png'

function Home() {
  return (
    <div className="App-hello">
      <p>Hello, welcome to Saki Boutique!</p>
      <img 
      src={men}
      resizeMode="cover"
        width="600" height="700"
        className="" alt="logo" />
         <img 
      src={women}
      resizeMode="cover"
        width="600" height="700"
        className="" alt="logo" />
    </div>
  );
}

export default Home;
