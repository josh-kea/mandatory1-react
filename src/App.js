import './App.css';
import LightSwitch from './components/LightSwitch/LightSwitch';
import { useState } from 'react';
import Bored from './components/Bored.js/Bored';

function App() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  function handleLightChanged(lightSwitchState) {
    const newBackgroundColor = lightSwitchState === "OFF" ? "black" : "white";
    setBackgroundColor(newBackgroundColor);
  }

  return (
    <div className="App" style={{backgroundColor}}>
      <LightSwitch onLightChanged={handleLightChanged}></LightSwitch>
      <Bored />
    </div>
  );
}

export default App;
