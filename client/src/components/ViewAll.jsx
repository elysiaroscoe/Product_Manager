import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';


const ViewAll = (props) => {

    const {allProducts, setAllProducts} = props;
    const history = useHistory();

    useEffect( () => {
            axios.get("http://localhost:8000/api/products")
            .then(res=> {
                console.log(res);
                console.log(res.data);
                props.setAllProducts(res.data.products); //{products: [{array of products},{}]}
            })
            .catch(err=>{
                console.log(err);
            })
    },[]);


    const deleteProduct = (deleteID) =>{
        axios.delete(`http://localhost:8000/api/products/${deleteID}/delete`)
        .then(res => {
            console.log(res.data);
            console.log("Deletion success!");
            const resultArray = props.allProducts.filter(product => product._id != deleteID);
            console.log(resultArray);
            props.setAllProducts(resultArray);
        })
        .catch(err => console.log(err))
    }



    return (
        <div>
            <hr></hr>
            <h1>Products</h1>
            <hr></hr>
            {/* <p>`${JSON.stringify(allProducts)}`</p> */}
            <div>
            {
                props.allProducts.map((product,idx) => {
                    return(
                        <div key={idx}>
                            <Link to={"/products/"+ product._id}>Title: {product.title}</Link>
                            <p>Price: ${product.price}</p>
                            <p>Description: {product.description}</p>
                            <button onClick={() => deleteProduct(product._id)}>Delete</button>
                            <hr></hr>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
};

export default ViewAll;
