import React from 'react'
import ColorMode from './Components/dynamic/ColorMode.jsx';
import Section from './Components/dynamic/Table.jsx';

const App = () => {
  console.clear();
  return (
    <div>
      <ColorMode />
      <Section />
    </div>
  );
}

export default App;