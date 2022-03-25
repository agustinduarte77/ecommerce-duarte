import React,{ useState} from 'react'
import './Card.css'
import ItemCount from '../ItemCount/ItemCount'


export default function Card({data})  {
    const{price, talle, title, stock} = data
    

    //console.log("estador contador: ", count)
    
    return(
        <div className="card-item">
            <h2>{title}</h2>
            <p>Precio : {price}</p>
            <p>Talle : {talle} </p>
            <p>Stock : {stock} </p>
            <ItemCount stock={stock}/>
        </div> 
    )
    
}