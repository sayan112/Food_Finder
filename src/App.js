import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Category from './components/Category.js'
import Pages from './pages/Pages.js'


const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App
