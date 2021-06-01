import React, { useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import reactDom from 'react-dom';
import Card from './components/card'
import Cart from './components/cart'
// import fruits from './fruits.json'
import Nav from './components/navbar.jsx'
// import { Button } from '@material-ui/core'
import './style.css'

const Shop = () => {

  const [food, setFood] = useState(null);

  useEffect(() => {
    // http://30c8500ddaa5.ngrok.io/products
    fetch('http://localhost:3000/products')
        .then(result => {
        return result.json();
        })
        .then(data => {
          setFood(data);
        })
  }, [])

  return (
    <>
      <Nav></Nav>
      <div className="container">
          <div className="content">
            {food && food.map((fruit, index) => {
            return <Card key={index} {...fruit} ></Card>
          })}
          {/* {fruits.map((fruit) => {
            return <App key={fruit.id} {...fruit} ></App>
            // return <App key={fruit.id} pro={fruit} ></App>
          })} */}
          </div>
      </div>
    </>    
  )
}

reactDom.render((
      <Router>
        <Switch>
          <Route exact path="/" component={Shop} />
          <Route path="/cart" component={Cart} />
        </Switch> 
       </Router>), document.getElementById('root'))
