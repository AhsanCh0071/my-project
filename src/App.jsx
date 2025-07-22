import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Hello GitHub Actions!</h1>
    </div>
    </>
  )
}

export default App
