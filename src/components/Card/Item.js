import React,{ useState} from 'react'
import './Item.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

export default function Card({data})  {
    const{price, talle, title, stock, id, imagen} = data
    
    //console.log("estador contador: ", count)
    
    return(
        <Link to={`/product/${id}`}>
            <div className='cardTarjeta'>
                <div className='imageCard'>
                    <img src={`./${imagen}`} alt={imagen} />
                </div>
                <div className="card-item">
                    <h2>{title}</h2>
                    <p>Precio : {price}</p>
                    <p>Talle : {talle} </p>
                    <p>Stock : {stock} </p>
                    <ItemCount stock={stock}/>
                </div> 
            </div>
        </Link>    
    )
    
}