import React from 'react';
import PerfectCart from './PerfectCart';
import CartTotal from './CartTotal';


export default function CartList({value}) {
    const {cart} =value;
    return (
        <React.Fragment>

        <div className="container-fluid">
        <section className="mt-3 mb-4">
        <h5 className="mb-4 text-center">Cart (<span>{cart.length}</span> items)</h5>
            <div className="row">
            <div className="col-lg-8">
            
            {cart.map(item => {
                return <PerfectCart key={item.id} item = {item}
                value={value}>
                   
                </PerfectCart>
              
              
            })}

            </div>
            <CartTotal value={value}></CartTotal>
            </div>
        </section>
        </div>
            </React.Fragment>
    )
   
    // return (

    //     <div className="container-fluid">
    //         {cart.map(item => {
    //             return <CartItem key={item.id} item = {item}
    //             value={value}></CartItem>
    //         })}
            
    //     </div>
    // )
}
