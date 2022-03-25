import React,{useState} from 'react'
import './ItemCount.css';

const ItemCount  = ({stock}) => {
    const [count, setCount]= useState (1)
    const addItem = () => {
        if(count < stock & stock  != 0) {
            setCount(count + 1)
        }
    }
    const removeItem = () => {
        setCount(count - 1)
    }
    
    const onAdd =() => {
        console.log("se agregaron " + {count} + "al carrito")
    }
    return(
        <div>
            <div className='cantidad-item'>
                <button onClick={removeItem}>-</button>
                <p>{count}</p>
                <button onClick={addItem}>+</button>
            </div>
            <div className='agregar-carrito'>
                <button onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>

    )
}

export default ItemCount