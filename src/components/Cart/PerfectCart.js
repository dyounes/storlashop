import React from 'react';

export default function PerfectCart({item, value}) {
  const {id, title, img, price, company, total, count}=item;
    const{increment, decrement, removeItem}=value;
    
    
    return (
    
    

    //   {/* <!--Section: Block Content--> */}
      // <section className="mt-5 mb-4">

        // {/* <!--Grid row--> */}
        // <div className="row">

          // {/* <!--Grid column--> */}
          // <div className="col-lg-8">
            // {/* <h5 className="mb-4">Cart (<span>{cart.length}</span> items)</h5> */}

            // {/* <!-- Card --> */}
            <div className="card wish-list mb-4">
              <div className="card-body">

          

                <div className="row mb-4">
                  <div className="col-md-5 col-lg-3 col-xl-3">
                    <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                      <img className="img-fluid w-100" src={img} alt="Product"></img>
                    </div>
                  </div>
                  <div className="col-md-7 col-lg-9 col-xl-9">
                    <div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <h5>{title }</h5>
                          <p className="mb-3 text-muted text-uppercase small">company: {company}</p>
                          <p className="mb-2 text-muted text-uppercase small">Color: blue</p>
                          <p className="mb-3 text-muted text-uppercase small">Item Price: {price}</p>
                        </div>
                        <div>
                          <div className="def-number-input number-input safari_only mb-0 w-100">
                            <span className="btn-secondary"
                              
                            onClick={()=>{
                              decrement(id);  
                            }}>
                               <i className="fas fa-minus"></i>
                            </span>
                           
                            {/* <span className="quantities"><strong className="text-center">{count}</strong></span> */}
                            
                            <span className="btn-secondary"
                              
                            onClick={()=>{
                              increment(id);  
                            }}><i className="fas fa-plus"></i>
                            </span>
                        
                          </div>
                          <small id="passwordHelpBlock" className="form-text text-muted text-center">
                            (Note you order, {count} piece) 
                          </small>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <a href="#!"  type="button" className="card-link-secondary small text-uppercase mr-3"
                          onClick={()=>{
                            removeItem(id);  
                          }}
                           ><i className="fas fa-trash-alt mr-1"></i> Remove item </a>
                          <a href="#!" type="button" className="card-link-secondary small text-uppercase"><i className="fas fa-heart mr-1"
                          onClick={()=>{
                            removeItem(id);  
                          }} ></i> Move to wish list </a>
                        </div>
                        <p className="mb-0"><span><strong>Item total price: ${total}</strong></span></p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="mb-4" />
                
                
                <p className="text-primary mb-0"><i className="fas fa-info-circle mr-1"></i>
                 Do not delay the purchase, adding
                 items to your cart does not mean booking them.</p>

              </div>
            </div>
            // {/* <!-- Card -->

            // <!-- Card --> */}
                      
          // {/* <!--Grid column--> */}

        // {/* </div> */}
        // {/* <!--Grid row--> */}

      // {/* </section> */}
    //   {/* <!--Section: Block Content--> */}

       
        
        
      
          
            
    )
}
