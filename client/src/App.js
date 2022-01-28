import './App.css';
import {Switch, Route} from 'react-router-dom';
import React, {useState} from 'react';
import Form from './components/Form';
import ViewAll from './components/ViewAll';
import ViewOne from './components/ViewOne';
import Edit from './components/Edit';

//Comment for github push

function App() {

  const [allProducts,setAllProducts] = useState([]);

  return (
    <div className="App">
      <h1>Product Manager</h1>
      <hr></hr>
      <Switch>
      <Route path ="/products/:id/update">
          <Edit />
        </Route>
        <Route path ="/products/:id">
          <ViewOne />
        </Route>
        <Route exact path ="/">
          <Form
            allProducts = {allProducts}
            setAllProducts = {setAllProducts}
          />
          <ViewAll 
            allProducts = {allProducts}
            setAllProducts = {setAllProducts}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
