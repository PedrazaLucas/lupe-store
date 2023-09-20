import React from "react";
import ItemCount from './ItemCount'
import {
  Card,
  Image,
  Stack,
  Text,
  CardBody,
  Button,
  CardFooter,
  Heading,
  Divider,
  ButtonGroup
} from "@chakra-ui/react";
import {Link} from 'react-router-dom'

const Item = ({ producto }) => {
  console.log(producto);
  return (
    <div>
      <Card maxW='sm'>
  <CardBody>
    <Image
      src={producto.image}
      boxSize="50%"
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{producto.nombre}</Heading>
      <Text>
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue' size="lg">
        <Link to={`/item/${producto.id}`}>
        Detalle
        </Link>
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
      
    </div>
  );
};

export default Item;
