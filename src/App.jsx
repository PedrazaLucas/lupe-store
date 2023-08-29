import ItemListContainer from './components/navbar/ItemListContainer'
import NavBar from './components/navbar/NavBar'
import "./app.css"

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido a Lupe"}/>
    </>
  )
}

export default App
