import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import Card from '../Card/Item';

const ItemDetail = () => {
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
        
    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                (resolve(mockProducts)
            )}, 2000);              
        });
    };

    useEffect(() => {
        getItem().then( (data) => {
            setProducts(data)
        })
    }, [])

    return(
        <div className="detail-cards">
            <h2> Info Productos </h2>
                <div className='card-detail-list'>
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

export default ItemDetail; 