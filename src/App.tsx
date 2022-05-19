import { useState } from 'react'
import './App.css'
import Button from './components/button/Button'

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
            Bordered Press
          </Button>
        </p>
        <p>
          <Button
            variant='filled'
            rightIcon='https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/mozilla.svg'
            onHold={() => setCount((count) => count + 1)}
          >
            Filled Hold
          </Button>
        </p>
        <p>
          <Button
            variant='bordered'
            onPress={() => setCount((count) => count + 1)}
            onHold={() => setCount((count) => count + 1)}
            rightIcon='https://www.svgrepo.com/show/177768/plus-signs.svg'
          ></Button>
        </p>
        <p>Count: {count}</p>
      </header>
    </div>
  );
}

export default App
