//  this the context api for react 
import React, { Component } from 'react';
import { detailProduct, storeProducts } from './data';

const ProductContext = React.createContext();
//Provider provide all the information for all our application
//place it at the highest possible in the app tree components




class ProductProvider extends Component {
    state={
        products: [],
        detailProduct:detailProduct, 
        cart: [], 
        modalOpen: false,
        modalProduct: detailProduct,
     subtotal:0,
        cartTax:0,
        cartTotal:0

    };
    // our life cycle method calld auto after a component rendering for the data 
    componentDidMount(){
        this.setProducts();
        
    }
    // this method is for we need to copy the value of the data not just references them
    setProducts =() =>{
        let tempProducts =[];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
    
            
        })
        this.setState(( )=>{
            return {products: tempProducts}
        });
    };
// the utilities method that get the item according to the item id
    getItem = (id) =>{
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handelDetail= (id) =>{
        // console.log("Hello from details")
        const product = this.getItem(id);
        this.setState(() => {
           return {detailProduct : product} 
        })

    }
    addToCart = (id) =>{
        // console.log(`Hello from add to cart. id is ${id}`)
        let tempProducts = [...this.state.products];
        // first i want the index of the product 
        const index = tempProducts.indexOf(this.getItem(id));
        const product =tempProducts[index];
        product.inCart= true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(() =>{
            return {products: tempProducts, cart:[...this.state.cart, product]};
        },() =>{
            // the moment we ad the items to the cart 
            // we need to update the subtotal and the tax and the total
            this.addTotals();
        } );

    };
    // function to display the model of a product when we click on it
    openModal = (id) =>{
        const product = this.getItem(id);
        this.setState(() => {
            return{modalProduct:product, modalOpen:true}
        })
    };
    // function for closing the modal

    closeModal = () =>{
        this.setState(() =>{
            return{modalOpen: false}
        });

    };
    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id ===id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count +1;
        product.total = product.count * product.price;

        this.setState(() =>{
            return {cart:[...tempCart]};
        }, ()=>{
            this.addTotals();
        })




    };
    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id ===id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count - 1; 
        if (product.count ===0){
            this.removeItem(id);
        }
        else{
            product.total = product.count * product.price;
            this.setState(() =>{
                return {cart:[...tempCart]};
            }, ()=>{
                this.addTotals();
            })

        }
        

    };
    removeItem = (id) => {
        let temProduct = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart= tempCart.filter(item => (item.id !== id));
        let index = temProduct.indexOf(this.getItem(id));
        let removedProduct = temProduct[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0

        this.setState(() =>{
            return {
                cart:[...tempCart],
                products: [...temProduct]
            }
        },() =>{
            // we need to update the total 
            this.addTotals();

        })

    };
    clearCart = () => {
        this.setState(() =>{
            return {cart:[]}
        },() =>{
            // when we clear the cart we need to setup the copy of the  state to default 
            this.setProducts();
            // we also update the total& tax to the initial values
            this.addTotals();
        })

    };
    
    addTotals = () =>{
        let subtotal = 0;
        this.state.cart.map((item) =>{  return subtotal += item.total});
        const temTax = subtotal * 0.19;
        const tax = parseFloat(temTax.toFixed(2));
        const total = subtotal +tax;
        this.setState(()=>{
            return {
                cartSubtotal:subtotal,
                cartTax:tax,
                cartTotal:total
            }
        })



       
    }

    render() {
        return (
            <ProductContext.Provider value=
            {{
                // destructor the constructor
               ...this.state,
               //use the methods and pass it in provider using the value property 
               handelDetail:this.handelDetail,
               addToCart:this.addToCart,
               openModal:this.openModal,
               closeModal:this.closeModal,
               increment:this.increment,
               decrement:this.decrement,
               removeItem:this.removeItem,
               clearCart:this.clearCart
            }}>
                {this.props.children}
             </ProductContext.Provider>
                
        )
    }
}

//Consumer 
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};




