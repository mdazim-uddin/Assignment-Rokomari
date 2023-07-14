import './App.css'
import Header from './Component/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from './Component/Menu/Menu'
import Shop from './Component/Shop/Shop'
import Plugin from './Component/plugin/Plugin'
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";


function App() {


  return (
    <>
      <div>
    <Header></Header>
    <Menu/>
    <Plugin/>
    <Shop/> 
   
      </div>
    </>
  )
}

export default App
