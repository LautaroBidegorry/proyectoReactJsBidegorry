import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Stack } from '@chakra-ui/react'
import { Link, } from 'react-router-dom'





const Navbar = () => {

   



  return (
    <>
        <Flex>
            <Box p='4' bg='red.400'>
                <Link to={'/'}>
                    <h1>Shop</h1>                
                </Link>
            </Box>
            <Spacer />
            <Box>
                <Menu>
                    <MenuButton>
                        Categorias
                    </MenuButton>
                    <MenuList>
                        <Link to={`/category/${"hombre"}`}>
                        <MenuItem>Hombres</MenuItem>
                        </Link>
                        <Link to={`/category/${"mujer"}`}>
                        <MenuItem>Mujeres</MenuItem>
                        </Link>
                        <Link to={`/category/${"niños"}`}>
                        <MenuItem>Niños</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </Box>
            <Spacer />
            <Box p='4' bg='green.400'>
                <Link to={'/cart'}>
                    <CartWidget />              
                </Link>
            </Box>
        </Flex>
    </>
  )
}

export default Navbar