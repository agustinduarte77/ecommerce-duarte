import Button from '@mui/material/Button';
import React from 'react';
function NavBar() {
    return (
        <div className="App">
            <header className='main-header'>
            <div className='container-logo'>
                <img
                    src="logo192.png"
                    className="img-header"
                />
            </div>
            <ul className='navbar'>
                <li><Button variant='outlined'>Inicio</Button></li>
                <li><Button variant='outlined'>Deportes</Button></li>
                <li><Button variant='outlined'>Casual</Button></li>
                <li><Button variant='outlined'>Formal</Button></li>
                <li><Button variant='outlined'>Contactanos</Button></li>
            </ul>
            </header>
        </div>
    );
}

export default NavBar