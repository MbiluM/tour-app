// src/App.jsx
import React, { useState } from 'react'
import Gallery from './components/Gallery'

const App = () => {
  const [tours, setTours] = useState([])

  return (
    <div className="app">
      <h1>🌍 Tour Comparison App</h1>
      {/* Pass tours and setTours as props to Gallery */}
      <Gallery tours={tours} setTours={setTours} />
    </div>
  )
}

export default App