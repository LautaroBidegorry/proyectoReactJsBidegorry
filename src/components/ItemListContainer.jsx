import React, {  } from 'react'
import Itemlist from './Itemlist'
import { Center } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore';


const ItemListContainer = () => {
  const {category} = useParams()  
  const [productos, setProductos] = useState([])

  useEffect(()=> {
    const db = getFirestore()
    const itemCollection = collection(db, "inventario")
    getDocs(itemCollection).then((snapshot)=> {
      const docs = snapshot.docs.map((doc)=> doc.data())
      setProductos(docs)
    })
  },[])                           

  
      
      
  
  const filteredProduct = productos.filter((producto) => producto.category == category)
          
      
  return (
    <> 
      <Center p="1rem">
      {category ? <Itemlist productos={filteredProduct} /> : <Itemlist productos={productos} />}
      </Center>
      
        
    </>
  )
}

export default ItemListContainer