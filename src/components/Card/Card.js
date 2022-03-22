import './Card.css'

export default function Card(props)  {
    const{price, talle, title} = props
    console.log("Precio:", price)
    return(
        <div className="card-item">
            <h2>{title}</h2>
            <p>Precio : {price}</p>
            <p>Talle : {talle} </p>
            <button> Comprar </button>
        </div> 

    )
}