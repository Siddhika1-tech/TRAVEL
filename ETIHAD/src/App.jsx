import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home'
import Book from './book'
import Navbar from './navbar'
import Etihad from './etihad'
import Footer from './footer'
import Destination from './destination'
import List from './list'
import Card from './card'
export default function App() { 
  
  return (
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Navbar />
      <Routes>
            <Route path='/' element={<Etihad/>}>
            <Route path='/list' element={<List/>}/>
            <Route path='/card' element={<Card/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/destination' element={<Destination/>}/>
            <Route path='/book' element={<Book/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  )
}
