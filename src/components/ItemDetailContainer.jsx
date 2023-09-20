import {useEffect, useState, React} from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

  const productos = [
    {id: 1, image: "https://http2.mlstatic.com/D_NQ_NP_902895-MLA45022109465_022021-O.webp", nombre: "Mate Camionero grande", descripcion:"TAMAÑO: 13cm alto X 10cm diametro | EXTERIOR: 100% cuero vacuno | Con virola de acero inoxidable", stock: 5, categoria:"CAMIONERO", precio: "11.300"},
    {id: 2, image: "https://http2.mlstatic.com/D_NQ_NP_950509-MLA71263257136_082023-O.webp", nombre: "Mate Camionero mediano", descripcion:"TAMAÑO: 11cm alto X 9cm diametro | EXTERIOR: 100% cuero vacuno | Con virola de acero inoxidable", stock: 10, categoria:"CAMIONERO", precio: "11.300"},
    {id: 3, image: "https://http2.mlstatic.com/D_NQ_NP_654218-MLA70783646337_072023-O.webp", nombre: "Mate Camionero chico", descripcion:"TAMAÑO: 10cm alto X 8cm diametro | EXTERIOR: 100% cuero vacuno | Con virola de acero inoxidable", stock: 1, categoria:"CAMIONERO", precio: "11.300"},
    {id: 4, image: "https://http2.mlstatic.com/D_NQ_NP_887333-MLA70110379955_062023-O.webp", nombre: "Mate Pampa rojo", descripcion:"TAMAÑO: 8,5cm alto X 9cm diametro | EXTERIOR: PVC", stock: 20, categoria:"PAMPA", precio: "14.000"},
    {id: 5, image: "https://http2.mlstatic.com/D_NQ_NP_671314-MLA70110301111_062023-O.webp", nombre: "Mate Pampa negro", descripcion:"TAMAÑO: 8,5cm alto X 9cm diametro | EXTERIOR: PVC", stock: 25, categoria:"PAMPA", precio: "14.000"},
    {id: 6, image: "https://http2.mlstatic.com/D_NQ_NP_784281-MLA70110505791_062023-O.webp", nombre: "Mate Pampa Blanco", descripcion:"TAMAÑO: 8,5cm alto X 9cm diametro | EXTERIOR: PVC", stock: 35, categoria:"PAMPA", precio: "14.000"},
    {id: 7, image: "https://http2.mlstatic.com/D_NQ_NP_897228-MLU70962372159_082023-O.webp", nombre: "Mate Pampa argentina", descripcion:"TAMAÑO: 8,5cm alto X 9cm diametro | EXTERIOR: PVC", stock: 5, categoria:"PAMPA", precio: "14.000"},
    {id: 8, image: "https://http2.mlstatic.com/D_NQ_NP_898232-MLA48925851095_012022-O.webp", nombre: "Mate de plastico blanco", descripcion:"TAMAÑO: 8cm alto X 5cm diametro", stock: 23, categoria:"PLASTICO", precio: "6.500"},
    {id: 9, image: "https://http2.mlstatic.com/D_NQ_NP_690875-MLA48925842057_012022-O.webp", nombre: "Mate de plastico verde", descripcion:"TAMAÑO: 8cm alto X 5cm diametro", stock: 15, categoria:"PLASTICO", precio: "4.000"},
    {id: 10, image: "https://http2.mlstatic.com/D_NQ_NP_618217-MLA48925720604_012022-O.webp", nombre: "Mate de plastico violeta", descripcion:"TAMAÑO: 8cm alto X 5cm diametro", stock: 12, categoria:"PLASTICO", precio: "4.000"}
  ]





    const getProductos = new Promise((resolve,reject)=>{
      if (productos.length>0){
        setTimeout(()=>{
          resolve(productos)
        },2000)
      }else{
        reject(new Error("No hay datos"))
      }
    })

    getProductos	
      .then((res)=>{

      })
      .catch((error)=>{
        console.log(error)
      })

  return (
    <>
      <ItemDetail productos={productos}/>
    </>
  )
}

export default ItemDetailContainer