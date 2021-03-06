import React from 'react'

export default function CartItem({item, value}) {
    const {id, title, img, price}=item;
    const{decrement}=value;
    // display the product from the cart object in the value object
    return (
        <div className="row my-1 text-capitalize text-center" >
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{width:"5rem",height:"5rem"}}
                className="img-fluid" alt="product" />


            </div>
           <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product :</span>
                {title}
           </div>
           <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price :</span>
                {price}
           </div>
           
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-content-center">
                        <span className="btn btn-secondary mx-1" onClick={()=>{
                          decrement(id);  
                        }} ></span>   
                    </div>
                </div>
                {/*  */}
           
           <div className="col-10 mx-auto col-lg-2">
               
           </div>
        </div>
    )
}
