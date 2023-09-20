import React, { useState } from 'react'
import { ButtonGroup,Button } from '@chakra-ui/react'

const ItemCount = () => {
    const [contador, setContador] = useState(0)

    const sumar = () => {
        if(contador < 10){
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if(contador > 0){
            setContador(contador - 1)
        }
    }

    const onAdd = () =>{
        alert("Sumaste " + contador + " al carrito")
    }


  return (
    <div><ButtonGroup spacing='2'>
    <Button variant='solid' colorScheme='blue' size="lg" onClick={restar}>
    -
    </Button>
    <Button variant='solid' colorScheme='blue' size="lg">
    {contador}
    </Button>
    <Button variant='solid' colorScheme='blue' size="lg" onClick={sumar}>
    +
    </Button>
    <Button variant='solid' colorScheme='blue' size="lg" onClick={onAdd}>
    Comprar
    </Button>
  </ButtonGroup>
    </div>
  )
}

export default ItemCount