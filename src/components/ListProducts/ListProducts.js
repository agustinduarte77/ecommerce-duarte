import './ListProducts.css';
import Card from '../Card/Card'

const ListProducts = ({children}) => {
    let dataProduct = {
        title:  'Remera',
        talle:  'XL',
        price:  '4000',
        stock: '4',
    }
    return(
        <div className="container-cards">
            <h2> {children} </h2>
            <Card data={dataProduct}/>
            {/*
            <ul className='card-list'>
                <li><Card title={'Remera'} talle={'XL'} price={'4000'}/></li>
                <li><Card title={'Remera2'} talle={'L'} price={'2000'}/></li>
                <li><Card title={'Campera'} talle={'XL'} price={'7000'}/></li>
                <li><Card title={'Pantalon'} talle={'48'} price={'5000'}/></li>
            </ul>*/}
        </div>
    )
}

export default ListProducts; 