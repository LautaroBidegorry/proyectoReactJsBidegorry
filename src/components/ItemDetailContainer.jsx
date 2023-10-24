import React from 'react'
import ItemDetail from './ItemDetail';

const productos= [ 
    {id:"1" , name:"Producto A", category: "hombre" ,description:"Descripcion del producto A" ,stock:10, price: 1000 },
    {id:"2" , name:"Producto B", category: "hombre" ,description:"Descripcion del producto B" ,stock:20, price: 1500 },
    {id:"3" , name:"Producto C", category: "hombre" ,description:"Descripcion del producto C" ,stock:30, price: 2000 },
    {id:"4" , name:"Producto D", category: "mujer" ,description:"Descripcion del producto D" ,stock:40, price: 1000 },
    {id:"5" , name:"Producto F", category: "mujer" ,description:"Descripcion del producto F" ,stock:50, price: 1500 },
    {id:"6" , name:"Producto G", category: "mujer" ,description:"Descripcion del producto G" ,stock:60, price: 2000 },
    {id:"7" , name:"Producto H", category: "niños" ,description:"Descripcion del producto H" ,stock:70, price: 1000 },
    {id:"8" , name:"Producto I", category: "niños" ,description:"Descripcion del producto I" ,stock:80, price: 1500 },
    {id:"9" , name:"Producto J", category: "niños" ,description:"Descripcion del producto J" ,stock:90, price: 2000 },]
    

const mostrarProductos = new Promise((resolve, reject) => {
  if (productos.length > 0) {
    setTimeout(() => {
      resolve(productos)
    }, 3000);
  } else {
    reject("No se encontraron productos")
 }
})

mostrarProductos
    .then((resultado)=> {
      console.log(resultado)
    })
    .catch((error)=>{
      console.log("error")
    })

const ItemDetailContainer = () => {


  return (
    <>
        <ItemDetail productos={productos} />

    </>
  )
}

export default ItemDetailContainer