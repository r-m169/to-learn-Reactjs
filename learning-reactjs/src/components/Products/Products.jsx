import React, { useState, useEffect } from 'react';
import { getproducts } from '../../services/product.service';
import 'bootstrap/dist/css/bootstrap.min.css';
import './products.css'
import { Link } from 'react-router-dom';
import Details from '../details/Details';
import Footer from '../footer/Footer';

const Products = () => {
    const [productsData, setProductsData] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null); // Track the selected product

    const getData = async () => {
        let data = await getproducts();
        const { products } = data;
        setProductsData(products);
    }

    useEffect(() => {
        getData();
    }, []);

    // Handle product selection
    const handleProductClick = (product) => {
        setSelectedProduct(product);
    }

    return (
        <>
        <div className="container text-center">
            {/* Display Product Details if a product is selected */}
            {selectedProduct ? (
                <Details product={selectedProduct} />
            ) : (
                <div className="row equal-height justify-content-center">
                    {productsData.map((productData) => (
                        <div className="col-md-4 col-sm-6 mb-5" key={productData.id}>
                            <div className="card animated-border" onClick={() => handleProductClick(productData)}>
                                <img src={productData.thumbnail} alt="" className="card-img-top" />
                                <div className="card-body justify-content-center">
                                    <h5 className="card-title">{productData.title}</h5>
                                    <p className="card-text">{productData.description}</p>
                                    <p className="card-title">${productData.price}</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="#" className="btn">
                                        MORE DETAILS
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
        </>
        
    );
}
export default Products;
