import React, { Component } from 'react';
import Product from'./Product';
import Title from './Title';
import {ProductConsumer} from '../context';
export default class ProductList extends Component {
    // state={
    //     products:storeProducts
    // };


    render() {
        // console.log(this.state.products);
        return (
            
                // <Product />
                <React.Fragment>
                   <div className="py-4">
                      <div className="Container">
                          <Title name="sortla's " title="products" />
                          {/* //the product row */}
                          <div className="row">

                              <ProductConsumer>
                                  {/* we dont' pass the data ass a props we use functions instead */}
                                  {(value)=>{
                                      return value.products.map(product =>{
                                          return <Product key={product.id} 
                                          product={product} />;
                                      });
                                  }}
                              </ProductConsumer>

                          </div>
                          </div> 
                       </div> 
                </React.Fragment>
            
        )
    }
}
