import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <>

        <Flex>
            <Box p='4' bg='red.400'>
                <h1>Shop</h1>                
            </Box>

            <Spacer />

            <Box>
                <Menu>
                    <MenuButton>
                        Categorias
                    </MenuButton>
                    <MenuList>
                        <MenuItem>categoria 1</MenuItem>
                        <MenuItem>categoria 2</MenuItem>
                        <MenuItem>categoria 3</MenuItem>
                        <MenuItem>categoria 4</MenuItem>
                        <MenuItem>categoria 5</MenuItem>
                    </MenuList>
                </Menu>
            </Box>

            <Spacer />

            <Box p='4' bg='green.400'>
                <CartWidget />              
            </Box>
        </Flex>







    </>
  )
}

export default Navbar