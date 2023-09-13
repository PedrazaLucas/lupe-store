import {useEffect, useState, React} from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
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
    {
        product.map((p)=>{
            return(
            <ItemDetail product={p}/>
            )
        })
    }
        </>
  )
}

export default ItemDetailContainer