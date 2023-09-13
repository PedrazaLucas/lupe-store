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
} from "@chakra-ui/react";

const Item = ({ producto }) => {
  console.log(producto);
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
          src={producto.image}
          alt="Caffe Latte"
        />

        <Stack w="20%" p="10px">
          <CardBody>
            <Heading size="md">{producto.title}</Heading>
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
  );
};

export default Item;
