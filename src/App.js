import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Quiz from './Pages/Quiz';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/quiz/:difficulty/:amount" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App