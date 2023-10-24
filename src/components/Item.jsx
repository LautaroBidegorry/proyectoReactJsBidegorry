import React from 'react'
import {Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ({name, id}) => {        
        return(
            <>
            <Card maxW='sm'>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <p>imagen</p>
                    <Heading size='md'>{name}</Heading>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                    <Button variant='ghost' colorScheme='blue'>
                        <Link to={`/product/${id}`}>
                        Ver detalle
                        </Link>
                    </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
            </>

            )
      }
    


export default Item 