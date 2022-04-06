import './App.css';
import NavBar from './components/NavBar/NavBar';
import ListProducts from './components/ListProducts/ItemList';
import { useEffect } from 'react';
import ItemDetail from './components/ItemDetail/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//import {getUsers} from './components/Usuarios/users.service';
import HomePage from './pages/Home';
import ContactPage from './pages/Contacto';
import InfoProducto from './pages/InfoProducto';


function App() {
    
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/contacto" element={<ContactPage/>}/>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/:categoria/" element={<ListProducts/>}/>
          <Route path="/product/:id" element={<InfoProducto/>}/>
        </Routes>
      </BrowserRouter>
      
      {/*  <div className="Productos">
        <ListProducts>
          <p>Productos destacados</p>
        </ListProducts>
                
    </div>*/}
    </div>
  );
}


export default App;
