import React, {useState} from 'react';
import axios from 'axios';


const Form = (props) => {

    const {allProducts, setAllProducts} = props;
    
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const createProduct = (e) =>{
        e.preventDefault();
        const newProduct = {title, price, description};
        console.log("New Product Created:", newProduct);
        
        axios.post("http://localhost:8000/api/products/new", newProduct)
        .then(res=> {
            console.log(res.data);
            console.log("Data successfully input to DB!")
            let allProductsCopy = [...props.allProducts];
            allProductsCopy.push(newProduct);
            console.log(allProductsCopy);
            props.setAllProducts(allProductsCopy)
            setTitle("")
            setPrice("")
            setDescription("")
        })
        .catch(err=>{
            console.log("Error, not entered in DB");
            console.log(err);
        })
    }
        
    return( 
        <div>
            <form onSubmit = { createProduct }>
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
                <input type = "submit" value="Create Product"/>
            </form>
        </div>
    )
};

export default Form;
