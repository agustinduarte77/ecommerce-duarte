import React,{useState} from 'react'
import './StockCount.css';

const StockCount  = () => {
    const [countStock, setCountStock]= useState (1)
    const addItemStock = () => {
        setCountStock(countStock + 1)
    }
    const removeItemStock = () => {
        setCountStock(countStock - 1)
    }
    return(
        <div className='stock-container'>
            <button onClick={removeItemStock}>-</button>
            <p>{countStock}</p>
            <button onClick={addItemStock}>+</button>
        </div>
    )
}

export default StockCount