import React from 'react'
import '../style.css'
// import StripeCheckout from 'react-stripe-checkout';

const App = (props) => {
    const { img, title, price} = props;
    // const { img, title, price} = props.pro;
    
    const click = (price, title) => {
        console.log(title + ' $' + price + " added to the cart")
      }

    return (
        <div className="card">
            <div className="card-image">
                     <img src={img} alt="img"/>
                    </div>
                    <div className="card-content">
                    <h4>{title}</h4>
                    <span>${price}</span>
                    </div>
                    <div className="card-action">
                    <a className="waves-effect waves-light btn-small blue" onClick={() => click(price, title)}>Add To Cart</a>
            </div>
        </div>     
    )
}

export default App
