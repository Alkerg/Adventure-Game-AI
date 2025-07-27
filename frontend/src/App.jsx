import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import StoryLoader from './components/StoryLoader'
import StoryGenerator from './components/StoryGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='app-container'>
        <header>
          <h1>Interactive Story Generator</h1>
        </header>
        
        <main>
          <Routes>
            <Route path={"/story/:id"} element={<StoryLoader></StoryLoader>}></Route>
            <Route path={'/'} element={<StoryGenerator></StoryGenerator>}></Route>
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
