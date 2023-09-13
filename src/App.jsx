import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/navbar/NavBar'
import "./app.css"
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </>
  )
}

export default App
