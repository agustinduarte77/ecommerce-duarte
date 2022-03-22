import Button from '@mui/material/Button';
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
                <li><Button variant='outlined'>Inicio</Button></li>
                <li><Button variant='outlined'>Deportes</Button></li>
                <li><Button variant='outlined'>Casual</Button></li>
                <li><Button variant='outlined'>Formal</Button></li>
                <li><Button variant='outlined'>Contactanos</Button></li>
                <li><Button ><CartWidget /></Button></li>
            </ul>
            </header>
        </div>
    );
}

export default NavBar