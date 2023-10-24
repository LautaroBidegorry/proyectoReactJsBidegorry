import React from 'react'
import { useState, useEffect } from 'react'

const ItemCount = () => {
    const [contador,setContador]=useState(0)
    const suma = () => {

        contador < 10? setContador(contador +1): alert("no se cuenta con stock")
    }

    const resta = ()=>{
        contador > 0? setContador(contador -1): alert("minimo alcanzado")
    }

    const onAdd =()=> {
        alert(`Producto agregado al carrito: ${contador}`)

    }

  return (
    <div>
        <p>{contador}</p>
        <button onClick={suma}>+</button>
        <button onClick={resta}>-</button>
        <button onClick={onAdd}>Agregar en el carrito</button>
    </div>
  )
}

export default ItemCount