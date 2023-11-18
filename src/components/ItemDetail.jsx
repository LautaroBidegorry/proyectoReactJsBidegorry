import React from 'react'
import {Card, CardBody, Stack, Divider, ButtonGroup, CardFooter, Heading, Text, Center} from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'



const ItemDetail = ({producto}) => {
    const {id} = useParams()
    const filteredProduct = producto.filter((producto) => producto.id == id);

  return (
    <>
			{filteredProduct.map((p) => {
				return (
					<div key={p.id}>
						<div className='item-detail'>
							<img className='item-detail__img' src={p.image} alt='' />
							<div className='item-detail__info'>
								<h2 className='item-detail__title'>{p.title}</h2>
								<span className='item-detail__price'>$ {p.price}.-</span>
								<p className='item-detail__description'>{p.description}</p>
								<hr />
							</div>
							<div className='item-detail__buttons-container'>
								<ItemCount filteredProduct={filteredProduct} />
							</div>
						</div>
					</div>
				);
			})}
		</>
  )
}

export default ItemDetail