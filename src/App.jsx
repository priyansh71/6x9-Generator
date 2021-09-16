import React from 'react'
import ColorMode from './Components/dynamic/ColorMode.jsx';
import Section from './Components/dynamic/Table.jsx';
import Warning from './Components/dynamic/Warning.jsx';
import "./index.css"


const App = () => {
  console.clear();
  return (
    <div>
      <ColorMode />
      <Warning />
      <Section />
    </div>
  );
}

export default App;