import React, { Component } from 'react'
import Title from "../Title";
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {(value) => {
                       const {cart} = value;
                       if(cart.length > 0){
                           return (
                               <React.Fragment>
                               <Title name="shopping " title="cart" />
                                <CartColumns></CartColumns>
                                
                                <CartList value={value} history={this.props.history}>
                                    
                                </CartList>
                               {/* <CartTotal value={value}></CartTotal> */}
                               </React.Fragment>

                           );

                           
                       }
                       else{
                           return <EmptyCart />;

                       }

                       
                    }}
                
                </ProductConsumer>
                
            </section>
        )
    }
}
