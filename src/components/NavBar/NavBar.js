import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import React from 'react';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';


function NavBar() {
    return (
        <div className="App">
            <header className='main-header'>
            <div className='container-logo'>
                <img
                    src="descarga.png"
                    className="img-header"
                />
            </div>
            <ul className='navbar'>
                <li><Button variant='outlined'>
                    <Link to={'/'}>Inicio</Link>
                </Button></li>
                <li><Button variant='outlined'>
                    <Link to={'/deporte'}>Deportes</Link>
                </Button></li>
                
                <li><Button variant='outlined'>
                    <Link to={'/casual'}>Casual</Link>
                </Button></li>
                
                <li><Button variant='outlined'>
                    <Link to={'/contacto'}>Contactanos</Link>
                </Button></li>
                <li><Button ><CartWidget /></Button></li>
            </ul>
            </header>
        </div>
    );
}

export default NavBar