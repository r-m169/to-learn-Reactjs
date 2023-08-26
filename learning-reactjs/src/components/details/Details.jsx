import React from 'react'
import { Link } from 'react-router-dom';


const Details = ({product}) => {
  return (
    <div className="container text-center">
    <div className="row justify-content-center">
        <div className="col-md-6">
            <div className="card">
                <img src={product.thumbnail} alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-title">${product.price}</p>
                    <Link to="" className="btn">
                                        Add to cart 
                                    </Link>
                </div>
            </div>
        </div>
    </div>
</div>
);

}

export default Details