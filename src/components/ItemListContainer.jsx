import {useEffect, useState, React} from 'react'
import ItemList from './ItemList'

const ItemListContainer = () => {

  const getProduct = async () =>{
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    console.log(data)
    return data
  }

  const [product, setProduct] = useState([])
  console.log(product)

  useEffect(() => {
    getProduct().then((product)=> setProduct(product))
  },[])

  return (
    <>
      <ItemList product={product}/>
    </>
  )

  }


export default ItemListContainer