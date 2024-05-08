import logo from './logo.svg';
import './App.css';
import Silder from './component/Silder';
import Cards from './component/cards';
import NewApi from './component/NewApi';
import { menu } from './component/data';
import QrCode from './component/QrCode';
import Header from './component/header';
import Navee from './component/Navee';
import { employees } from './component/NsData';
import LightDarkMode from './component/light-dark-mode';
import Scroll from './component/scroll-indicator';
function App() {
  
  return (
  //  <Silder url={"https://picsum.photos/v2/list"} page={"10"} limit={"20"} /> // Corrected prop name
 // <Cards country="in" intrest="sports" />
// <NewApi list={menu} />
 //<QrCode />
 // <Header url={"https://pokeapi.co/api/v2/pokemon/ditto"}/>
  //<Navee list={employees} />
  //<LightDarkMode />
  <Scroll url={"https://dummyjson.com/products?limit=100"}/>
  )
}
export default App;
