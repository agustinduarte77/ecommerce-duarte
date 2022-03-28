import './App.css';
import NavBar from './components/NavBar/NavBar';
import ListProducts from './components/ListProducts/ItemList';



function App() {
  return (
    <div className="App">
      <NavBar />
        <ListProducts>
          <p>Productos destacados</p>
        </ListProducts>
        
    </div>
  );
}


export default App;
