import React from 'react'
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore'


const ItemDetailContainer = () => {
  
  const[producto, setProducto] = useState([])

  useEffect(() => {
		const db = getFirestore();
		const itemCollection = collection(db, 'inventario');
		getDocs(itemCollection).then((querySnapshot) => {
			const docs = querySnapshot.docs.map((doc) => doc.data());
			setProducto(docs)
    })
}, [])
  
    
 


  return (
    <>
        <ItemDetail producto={producto} />

    </>
  )
}

export default ItemDetailContainer