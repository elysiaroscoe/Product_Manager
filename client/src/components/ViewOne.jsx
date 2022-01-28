import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, useHistory, Link} from 'react-router-dom';

const ViewOne = (props) => {

    const {id} = useParams();
    const [product, setProduct] = useState("");
    const history = useHistory();

    useEffect( () => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res=>{
            console.log(res)
            console.log(res.data)
            setProduct(res.data.product);
        })
        .catch(err=>{
            console.log(err);
        })
    },[id]);

    const deleteProduct = (deleteID) =>{
        axios.delete(`http://localhost:8000/api/products/${deleteID}/delete`)
        .then(res => {
            console.log(res.data);
            console.log("Deletion success!")
            history.push("/")
        })
        .catch(err => console.log(err))
    }


    return (
        <div>
            <h1>{product.title}</h1>
            {/* <p>`${JSON.stringify(product)}`</p> */}
            <p>Price: ${product.price}</p>
            <p>Descripion: {product.description}</p>
            <button onClick={() => deleteProduct(product._id)}>Delete</button>
            <button><Link to={`/products/${id}/update`}>Edit</Link></button>
            <button><Link to="/">Home</Link></button>
        </div>
        );
};

export default ViewOne;
