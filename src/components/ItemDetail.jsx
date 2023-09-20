import React from 'react'
import {
    Card,
    Text,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    Center,
    Image
  } from "@chakra-ui/react";
import ItemCount from './ItemCount';
import {useParams} from 'react-router-dom'

const ItemDetail = ({productos}) => {
  const {id} = useParams()

const filteredProducts = productos.filter((producto)=>producto.id == id)

  return (
    <div>

    {filteredProducts.map((p)=> {
        return(
          <div key={p.id}> 
          <Center p='1rem'>
  
            <Card>
              <CardHeader>
              <Image src={p.image} boxSize="30%"/>
                  <Heading size='md'>{p.nombre}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{p.descripcion}</Text>
                <Text>${p.precio}</Text>
              </CardBody>
              <CardFooter>
                <ItemCount/>
              </CardFooter>
            </Card>
          </Center>
          </div>
        )
      })
    }
    </div>
  )
}

export default ItemDetail