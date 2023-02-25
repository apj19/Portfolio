import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-[url('./assets/main_bg.png')] min-w-[375px] max-w-[1440px] min-h-[100vh] bg-cover bg-center">
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  )
}

export default App
