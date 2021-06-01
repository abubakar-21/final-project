import React from 'react'
import '../style.css'
import Nav from './navbar'
// import StripeCheckout from 'react-stripe-checkout';

const App = () => {
    // const { img, title, price} = props;
    // const { img, title, price} = props.pro;
    
    const click = () => {
        console.log("You Paid!")
      }

    return (
        <>
        <Nav></Nav>
        <div className="card">
            <div className="card-image">
                     <img src="https://www.everfresh.se/globalassets/bilder-frukt/exotiskt/h2_mango.png" alt="img"/>
                    </div>
                    <div className="card-content">
                    <h4>Mango</h4>
                    <span>$2.99/kg</span>
                    </div>
                    <div className="card-action">
                    <a className="waves-effect waves-light btn-small blue" onClick={() => click()}>Pay</a>
            </div>
        </div>  
        </>   
    )
}

export default App
