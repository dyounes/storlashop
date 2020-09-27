import React from 'react';
import {Link} from 'react-router-dom';
import PaypalButton from './PaypalButton';

export default function CartTotal({value, history}) {
    const {cartSubtotal, cartTax, cartTotal, clearCart}= value;
    const{cart} = value;

    console.log("That's the cart",cart)
    // const {id} = item; 
    // console.log(items)
    // storeProducts.forEach(item => {
    //     const singleItem = {...item};});

    const{increment, decrement, removeItem}=value;
    return (
      <React.Fragment>
        <React.StrictMode>
          {/* <!--Grid column-->

          <!--Grid column--> */}
          <div className="col-lg-4">
{/* 
            <!-- Card --> */}
            <div className="card mb-4">
              <div className="card-body">

                <h5 className="mb-3">The total amount of</h5>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Temporary amount
                    <span>$ {cartSubtotal}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                   VAT amount
                    <span>$ {cartTax}</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping places
                    <span>all over the world</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>The total amount of</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span><strong>total: ${cartTotal}</strong></span>
                  </li>
                </ul>
                <Link to="/" className="text-decoration-none">
                <button type="button" className="btn btn-outline-danger mb-3 
                text-capitalize  btn-block waves-effect waves-light"
                onClick={() =>clearCart()}> 
                clear cart</button>
                </Link>

                <button type="button" className="btn btn-primary btn-block 
                text-capitalize waves-effect waves-light">go to
                  checkout</button>

              </div>
            </div>
            {/* <!-- Card -->

            <!-- Card --> */}
            <div className="card mb-4">
              <div className="card-body">

                <a className="dark-grey-text d-flex justify-content-between collapsed" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                  Add a discount code (optional)
                  <span><i className="fas fa-chevron-down pt-1"></i></span>
                </a>

                
                  <div className="mt-3">
                    <div className="md-form md-outline mb-0">
                      <input type="text" id="discount-code" className="form-control font-weight-light" placeholder="Enter discount code"></input>
                    </div>
                  
                </div>
              </div>
            </div>
            {/* <!-- Card --> */}
            {/* </div> */}

{/* 
            <!-- Card --> */}
            
   <div className="card mb-4">
            {/* <!-- Card -->
                        <!-- Card --> */}
            <div className="card-body">

            {/* <h5 className="mb-4">We accept</h5> */}

            {/* <img className="mr-2" width="45px" src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg" alt="Visa"></img>
            <img className="mr-2" width="45px" src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg" alt="American Express"></img>
            <img className="mr-2" width="45px" src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg" alt="Mastercard"></img> */}
            {/* <img className="mr-2" width="45px" src="https://z9t4u9f6.stackpathcdn.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png" alt="PayPal acceptance mark"></img> */}

                        {/* Paypalpayment */}
              <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    We accept payment with
                    <span>
                    <PaypalButton total={cartTotal}
                                  clearCart={clearCart} 
                                   history={history}/>
                    </span>
                  </li>
                </ul>
            </div>
            {/* <div className="card mb-4"> */}
            <hr className="mb-4" />
              
            <div className="card-body">

                <h5 className="mb-4">Expected shipping delivery</h5>

                <p className="mb-0"> Thu., 12.03. - Mon., 16.03.</p>
            </div>
            {/* </div> */}
            </div>
            {/* <!-- Card --> */}

          </div>
          {/* </div> */}
          </React.StrictMode>

      </React.Fragment>

    )
}



