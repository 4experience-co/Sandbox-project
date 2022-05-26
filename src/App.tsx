import Slider from './components/slider/Slider';
import { useState } from 'react';
import './App.css';



function App() {
  const [count, setCount] = useState<number>(15);
  const [showModal, setShowModal] = useState(true);

  return (
    <div className='App'>
      <header className='App-header'>
        <div style={{ width: "500px", margin:'auto'}}>
          <Slider min={0} max={100} onChange={setCount} initialValue={count} />
          <p>Slider value: {count}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
