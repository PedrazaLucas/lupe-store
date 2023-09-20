import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/navbar/NavBar'
import "./app.css"
import ItemDetailContainer from './components/ItemDetailContainer'
import Home from './components/Home'
import Cart from './components/Cart'
import About from './components/About'

function App() {



  return (
    <BrowserRouter>


      <NavBar/>


      

      <Routes>
        <Route exact path='/' element={<ItemListContainer/>}/>
        <Route  path='/categoria/:categoria' element={<ItemListContainer/>}/>
        <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
