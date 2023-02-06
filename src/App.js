import './App.css';
import MylineChart from './components/MyLinrChart/MylineChart';
import SpecialChart from './components/SpecialChart/SpecialChart';
import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';

function App() {
  const [flip, setFlip]=useState(false)
  const springs = useSpring({
    /* from: { x: 0 },
    to: { x: 100 }, */
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    onRest: ()=>setFlip(!flip)
  })
  return (
    <div className="App">
      <animated.div style={springs}>Hello springs</animated.div>
      <MylineChart></MylineChart>
      <SpecialChart></SpecialChart>
    </div>
  );
}

export default App;
