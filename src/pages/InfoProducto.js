import { Container } from "@mui/material";
import './InfoProducto.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mockProductos from "../components/mockProducts";


const InfoProducto = () => {
    const {id} = useParams ()
    const [product, setProduct] = useState({})
    useEffect( () => {
        ProductSearch(mockProductos, id)
    }, [])

    const ProductSearch = (array, id) => {
        return array.map ( (product) => {
            if (product.id == id){
                return setProduct(product)
            }
        })
    }


    return (
        <Container className="container-general">
            <div className="detalle-producto">
                <h1>{product.title}</h1>
                <h2>{product.detalle}</h2>
                <p>{"Precio: $" + product.price}</p>
                <p>{"Talle: " + product.talle}</p>
            </div>
        </Container>
    )
}

export default InfoProducto;