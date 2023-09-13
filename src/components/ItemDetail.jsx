import React from 'react'
import {
    Card,
    Image,
    Stack,
    Text,
    CardBody,
    Button,
    CardFooter,
  } from "@chakra-ui/react";
import ItemCount from './ItemCount';


const ItemDetail = ({product}) => {
  return (
    <div>
        <Card
        
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          w="20%"
          objectFit="cover"
          maxW={{ base: "30%", sm: "50px" }}
          src={product.image}
          alt="Caffe Latte"
        />

        <Stack w="20%" p="10px">
          <CardBody>
          <Text py="2">Descripcion: {product.description}</Text>
          <Text py="2">$ {product.price}</Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Detalle
            </Button>
          </CardFooter>
        </Stack>
      </Card>
      <ItemCount/>
    </div>
  )
}

export default ItemDetail