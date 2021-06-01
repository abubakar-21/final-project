import React from 'react'
import '../style.css'
//import { Button } from '@material-ui/core'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";

const navbar = () => {
    return (
        <nav>
        <div className="nav-wrapper blue">
          <a href="/" className="brand-logo"><i className="medium material-icons">storefront</i></a>
          <ul id="nav-mobile" className="right">   
            <li><a href="/cart"><i className="material-icons">local_grocery_store</i></a></li>
          </ul>
        </div>
      </nav>
    )
}

export default navbar
