import React from 'react'
import { useParams } from 'react-router-dom'
import {Card, CardBody, Stack, Divider, ButtonGroup, Button, CardFooter, Heading, Text, Center} from '@chakra-ui/react'


const ItemDetail = ({productos}) => {


  const {id} = useParams()  

    const filteredProduct = productos.filter((producto) => producto.id == id)

  return (
    <>
        {
            filteredProduct.map((p)=>{
                return(
                    <Center p='1rem'>
                    <Card maxW='sm'>
                        <CardBody>
                            <Stack mt='6' spacing='3'>
                                <p>imagen</p>
                            <Heading size='md'>{p.name}</Heading>
                            </Stack>
                        </CardBody>
                        <Text>{p.description}</Text>
                        <Text>${p.price}</Text>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                            <Button variant='ghost' colorScheme='blue'>
                                contador
                            </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                    </Center>
                )
            })
        }



    </>
  )
}

export default ItemDetail