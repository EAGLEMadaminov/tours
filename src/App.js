import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './About'
function ViewTours() {
  return (
    <Router>
      <Link to='/About'>About</Link>
      <Routes>
        <Route path='/About'>
          <About />
        </Route>
      </Routes>
    </Router>
  )
}

export default ViewTours
