import { useState } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import ModalExample from './pages/ModalExamplePage';

function App() {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(true);

  return (
    <Routes>
      <Route
        path='/Sandbox-project'
        element={<Navigate replace to='/Sandbox-project/modal-demo' />}
      />
      <Route
        path='/Sandbox-project/modal-demo'
        element={<ModalExample />}
      />
    </Routes>
  );
}

export default App;
