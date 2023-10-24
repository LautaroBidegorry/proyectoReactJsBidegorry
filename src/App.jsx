import React from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import Cart from './components/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'


const App = () => {
  return (
     
    <BrowserRouter>

        <Navbar />

    <Routes>


        <Route exact path= '/' element={<ItemListContainer />}/>
        <Route exact path= '/cart' element={<Cart />}/>
        <Route exact path ='/product/:id' element={<ItemDetailContainer/>}/>
        <Route exact path= '/category/:category' element={<ItemListContainer />}/>


    </Routes>

    </BrowserRouter>
    
  )
}

export default App
