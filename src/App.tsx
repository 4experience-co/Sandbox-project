import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Button from './components/UI/button/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          <Button
            variant='bordered'
            onPress={() => setCount((count) => count + 1)}

            leftIcon='https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/410.svg'
          >
            Press
          </Button>
        </p>
        <p>
          <Button
            variant='filled'
            rightIcon='https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/410.svg'
          >
            Fiiled Hold
          </Button>
        </p>
        <p>
          <Button
            variant='bordered'
            onPress={() => setCount((count) => count + 1)}
            onHold={() => setCount((count) => count + 1)}
            rightIcon='https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/410.svg'
          >
          </Button>
        </p>
        <p>Count: {count}</p>


      </header>
    </div>
  );
}

export default App
