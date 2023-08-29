import React from 'react'

 const ItemListContainer = ({greeting}) => {
/* let productos = [
  {id:1, nombre:"Producto 1", descripcion:"descipcion de producto 1", precio : 1000},
  {id:1, nombre:"Producto 2", descripcion:"descipcion de producto 2", precio : 2000},
  {id:1, nombre:"Producto 3", descripcion:"descipcion de producto 3", precio : 3000},
  {id:1, nombre:"Producto 4", descripcion:"descipcion de producto 4", precio : 4000}
 ]

  const mostrarProductos = new Promises((resolve,reject)=>{
    if(productos.length >0){
      setTimeout(()=>{
        resolve(productos)
      }, 5000)
    }else{
      reject("No hay productos para mostrar")
    }
  })


  mostrarProductos
  .then((resultado)=>{
    console.log(resultado)
  })
  .catch((err)=>{
    console.log(err)
  })
 */
  return (
    <>
     {greeting}
    </>
  )

  }


export default ItemListContainer