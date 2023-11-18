import { createContext, useState } from "react";


export const CartContext = createContext([])

export const CartProvider = ({
    children}) => {
        


const [cart, setCart] = useState([])
const [badge, setBadge] = useState(0)


const addToCart = (filteredProduct, count) => {
  if (count <= 0) {
    return;
  }

  const { id, name, price } = filteredProduct;
  const isInCart = cart.find((filteredProduct) => filteredProduct.id === id);

  if (isInCart) {
    const updatedCart = cart.map((filteredProduct) =>
    filteredProduct.id === id ? { ...filteredProduct, count: filteredProduct.count + count } : filteredProduct
    );
    setCart(updatedCart);
  } else {
    const newProduct = { ...filteredProduct, count };
    setCart((prevCart) => [...prevCart, newProduct]);
    setBadge((prevBadge) => prevBadge + 1);
  }
};


  const deleteItem = (id) => {
    const itemToDelete = cart.find((p) => p.id === id);

    if (itemToDelete) {
      const newCart = cart.filter((p) => p.id !== id);
      setCart(newCart);

      setBadge((prevBadge) => Math.max(0, prevBadge - 1));
    }
  }

  const clearCart = () => {
    setCart([])
    setBadge(0)
  }

  const productQuantity = () => {
    const cartItems = cart.length;
    setBadge(cartItems);
  }

  const totalPrice = () => {
    const total = cart.reduce((acc, filteredProduct) => {
      return acc + filteredProduct.precio * filteredProduct.count;
    }, 0);
    return total;
  }




     return (
        <CartContext.Provider value = {{cart, setCart, badge, setBadge,  addToCart, deleteItem, clearCart, productQuantity,totalPrice }}>
            {children}

        </CartContext.Provider>

     )





     
     }
    export default CartProvider