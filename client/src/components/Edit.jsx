import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, useHistory, Link} from 'react-router-dom';

const Edit = (props) => {
    
    const {id} = useParams();
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const history = useHistory();

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res=> {
            console.log(res.data.product);
            setTitle(res.data.product.title)
            setPrice(res.data.product.price)
            setDescription(res.data.product.description)
            console.log("Data pulled from database and entered into form")
        })
        .catch(err=>{
            console.log("Error, not entered in DB");
            console.log(err);
        })
    },[])

    const updateProduct = (e) => {
        e.preventDefault();
        const updateProduct = {
            title: title,
            price: price,
            description: description
        }
        //send to database
        axios.put(`http://localhost:8000/api/products/${id}/update`, updateProduct)
        .then(res => {
            console.log(res.data);
            console.log("UPDATED IN DATABASE")
            history.push(`/products/${id}`)
        })
        .catch(err =>{
            console.log("ERROR NOT UPDATED IN DB", err)
        })
    }
        
    return( 
        <div>
            <form onSubmit = { updateProduct }>
                <div>
                    <label>Title: </label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}></input>
                </div>
                <div>
                    <label>Price: $</label>
                    <input type="number" onChange={(e) => setPrice(e.target.value)} value={price}></input>
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}></input>
                </div>
                <input type = "submit" value="Update Product"/>
                <button><Link to="/">Home</Link></button>
            </form>
        </div>
    )
};

export default Edit;
