import React from 'react'
import { useState, useContext } from 'react'
import {Button, Flex, Box, Spacer} from '@chakra-ui/react'
import { CartContext } from '../context/shoppingCartContext'

const ItemCount = ({filteredProduct}) => {
    const [count,setCount]=useState(0)
    const{addToCart} = useContext(CartContext)

  return (
    <Flex>
        <Box>
            <Button variant= 'outline' colorScheme='teal'onClick={()=> setCount(count -1)}m={1}> -
             </Button>
            <Button m={1}>{count}</Button>
            <Button variant='outline' colorScheme='teal' onClick={()=> setCount(count+1)} m={1}> + </Button>
        </Box>
        <Spacer/>
        <Box m={1}>
            <Button onClick={()=>addToCart(filteredProduct, count)} >Add to cart</Button>
        </Box>
    </Flex>
  )
}


export default ItemCount