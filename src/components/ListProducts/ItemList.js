import './ItemList.css';
import Card from '../Card/Item';
import { useState, useEffect } from 'react';
import mockProductos from '../mockProducts';
import { useParams } from 'react-router-dom';


const ListProducts = () => {
    const {categoria} = useParams()
    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return resolve(mockProductos)
        })
    }

    useEffect(() => {
        setProducts([])
        getProducts().then( (productos) => {
            categoria ? CategorySearch(productos, categoria) : setProducts(productos)
        })
    }, [categoria])

    const CategorySearch = (array, categoria) => {
        return array.map ( (product) => {
            if (product.categoria === categoria){
                return setProducts(products => [...products, product])
            }
        })
    }

    return(
        <div className="container-cards">
            <h2 id='titulo'> Productos destacados </h2>
                <div className='card-list'>
                    {products.map ((product) => {
                        const{id} = product
                        return(
                            <Card data={product} key = {id}/>
                        )
                    }
                    )}
                </div>
        </div>
    )
}
export default ListProducts; 