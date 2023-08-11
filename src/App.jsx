import { useState } from 'react'
import './App.scss'
import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
