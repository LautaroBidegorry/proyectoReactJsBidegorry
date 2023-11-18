import React from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import Cart from './components/Cart'
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartProvider from './context/shoppingCartContext'






const App = () => {
  return (  
     
    
      <BrowserRouter>
      
        <CartProvider>

            <Navbar />    
                    <Routes>
                      <Route exact path= '/' element={<ItemListContainer />}/>
                      <Route exact path= '/cart' element={<Cart />}/>
                      <Route exact path ='/product/:id' element={<ItemDetailContainer/>}/>
                      <Route exact path= '/category/:category' element={<ItemListContainer />}/>
                    </Routes>    
      
        </CartProvider>
      
      </BrowserRouter>
    
              
  )
}
export default App
