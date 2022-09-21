import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Category from './components/Category.js'
import Search from './components/Search.jsx'
import Pages from './pages/Pages.js'


const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App
