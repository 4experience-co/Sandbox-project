import Slider from './components/slider/Slider';
import { useState } from 'react';
import './App.css';
import Button from './components/button/Button';
import CollapseComponent from './components/collapse-component/CollapseComponent';


import { Navigate, Route, Routes } from 'react-router-dom';
import ModalExample from './pages/ModalExamplePage';

function App() {
  const [count, setCount] = useState<number>(15);
  const [showModal, setShowModal] = useState(true);

  return (
    <div style={{ width: '600px', margin: '0 auto', backgroundColor: 'black' }}>
      <CollapseComponent title='siema'>
        <div style={{ display: 'flex' }}>
          <Button variant='filled'>siema</Button>
          <Button variant='filled'>siema</Button>
          <Button variant='filled'>siema</Button>
          <Button variant='filled'>siema</Button>
        </div>
      </CollapseComponent>
    </div>
  );
}

export default App;
