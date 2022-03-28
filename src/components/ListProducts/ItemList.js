import './ItemList.css';
import Card from '../Card/Item'
import { useState, useEffect } from 'react';

const ListProducts = () => {
    const mockProducts = [{
            id: 1,
            title:  'Remera',
            talle:  'XL',
            price:  4000,
            stock: 4,
    },
    {       
            id: 2,
            title:  'Campera',
            talle:  'L',
            price:  10000,
            stock: 6,
    },
    {       
        id: 3,
        title:  'Pantalon',
        talle:  '46',
        price:  8500,
        stock: 7,
    },
    {       
        id: 4,
        title:  'Zapatillas',
        talle:  '43',
        price:  10000,
        stock: 4,
    }]

    const [products, setProducts] = useState([])
        
    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                (resolve(mockProducts)
            )}, 2000);              
        });
    };

    useEffect(() => {
        getProducts().then( (data) => {
            setProducts(data)
        })
    }, [])

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