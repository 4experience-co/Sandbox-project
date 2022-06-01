import {  Route, Routes } from 'react-router-dom';
import ModalExamplePage from './pages/ModalExamplePage';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/Sandbox-project' element={ <Home /> }/>
      <Route path='/Sandbox-project/modal-demo' element={<ModalExamplePage/>} />
    </Routes>
  );
}

export default App;
