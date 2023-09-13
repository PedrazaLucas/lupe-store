import React, { useState } from 'react'

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
        alert(contador)
    }


  return (
    <div>
        <button onClick={restar}>-</button>
        <button onClick={onAdd}>{contador}</button>
        <button onClick={sumar}>+</button>
        <button onClick={()=>{ setContador(0)}}>Comprar</button>
    </div>
  )
}

export default ItemCount