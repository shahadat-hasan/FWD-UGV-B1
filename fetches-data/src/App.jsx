import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataFetcher from './components/DataFetcher'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <DataFetcher />
    </div>
  )
}

export default App
