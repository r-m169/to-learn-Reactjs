import React from 'react';
import { Data } from '../../data';
import Product from '../Product/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import './products.css'

const Products = () => {
    return (
        <Product propsData={Data} />
        

    );
}

export default Products;
