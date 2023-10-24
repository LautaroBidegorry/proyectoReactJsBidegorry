import React from 'react'
import Item from './Item'

const Itemlist = ({productos}) => {
  return (
    <div>
        {
            productos.map((p)=>{
                return(
                    <Item
                        key={p.id}
                        id={p.id}
                        name={p.name}
                        price={p.price}
                        category={p.category}
                        description={p.description}
                    />
                )
            })
        }

    </div>
  )
}

export default Itemlist