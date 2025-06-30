import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'

const App = () => {
  // const [count, setCount] = useState(0)
  const name = "Nathaniel Webster"

  return (
    <main>
      <div>
        <h1>Test</h1>
        <Header name={name} />
      </div>
    </main>
  );

}

export default App
