import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/shoppingCartContext';
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Center,
  Button,
  ButtonGroup,
  Box,
  Spacer,
  
} from "@chakra-ui/react";

const Cart = () => {
  const { Cart, deleteItem, totalPrice, clearCart } = useContext(CartContext);
  if (!Cart || !Array.isArray(Cart) || Cart.length === 0) {
    return <p>El carrito está vacío</p>}
  

console.log(Cart)


return(
  <div className="tablaCarrito">
      {Cart.length === 0 ? (
        <Center>
          <p>Tu carrito de compras está vacío</p>
        </Center>
      ) : (
        <>
          <TableContainer>
            <Table size="sm" className="table">
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th className="th">CANTIDAD</Th>
                  <Th className="th">NOMBRE</Th>
                  <Th className="th">PRECIO</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {Cart.map((filteredProduct) => (
                  <Tr key={filteredProduct.id}>
                    <Td className="td"></Td>
                    <Td className="td">{filteredProduct.count}</Td>
                    <Td className="td">{filteredProduct.nombre}</Td>
                    <Td className="td">${filteredProduct.precio}</Td>
                    <Td className="td">
                      <Button
                        onClick={() => deleteItem(filteredProduct.id)}
                        colorScheme="red"
                      >
                        X
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Td colSpan="5" textAlign="center" className="total">
                    <h2>Total = ${totalPrice()}</h2>
                  </Td>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
          <Box className="vaciarCarritoContainer">
            <Center className="buttonGroup">
              <ButtonGroup gap="2">
                <Button
                  onClick={clearCart}
                  colorScheme="red"
                  className="button"
                >
                  <Spacer />
                  Vaciar carrito
                </Button>
              </ButtonGroup>
            </Center>
          </Box>
        </>
      )}
    </div>
  )

 };

export default Cart