import React from 'react';

export default function Shoppingcart({item, value}) {
  const {id, title, img, price, company, total, count}=item;
    const{increment, decrement, removeItem}=value;
    return (
    
    

    //   {/* <!--Section: Block Content--> */}
      <section class="mt-5 mb-4">

        {/* <!--Grid row--> */}
        <div class="row">

          {/* <!--Grid column--> */}
          <div class="col-lg-8">

            {/* <!-- Card --> */}
            <div class="card wish-list mb-4">
              <div class="card-body">

                <h5 class="mb-4">Cart (<span>2</span> items)</h5>

                <div class="row mb-4">
                  <div class="col-md-5 col-lg-3 col-xl-3">
                    <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                      <img class="img-fluid w-100" src={img} alt="Product"></img>
                    </div>
                  </div>
                  <div class="col-md-7 col-lg-9 col-xl-9">
                    <div>
                      <div class="d-flex justify-content-between">
                        <div>
                          <h5>{title }</h5>
                          <p class="mb-3 text-muted text-uppercase small">company: {company}</p>
                          <p class="mb-2 text-muted text-uppercase small">Color: blue</p>
                          <p class="mb-3 text-muted text-uppercase small">Size: M</p>
                        </div>
                        <div>
                          <div class="def-number-input number-input safari_only mb-0 w-100">
                            <button class="minus"
                            onClick={()=>{
                              decrement(id);  
                            }}></button>
                            <input class="quantity" min="0" name="quantity" value="1" type="number"></input>
                            <button class="plus"
                            onClick={()=>{
                              increment(id);  
                            }}></button>
                          </div>
                          <small id="passwordHelpBlock" class="form-text text-muted text-center">
                            (Note you order, {count} piece) 
                          </small>
                        </div>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <div>
                          <a href="#!"  type="button" class="card-link-secondary small text-uppercase mr-3"
                          onClick={()=>{
                            removeItem(id);  
                          }}
                           ><i class="fas fa-trash-alt mr-1"></i> Remove item </a>
                          <a href="#!" type="button" class="card-link-secondary small text-uppercase"><i class="fas fa-heart mr-1"
                          onClick="" ></i> Move to wish list </a>
                        </div>
                        <p class="mb-0"><span><strong>price: ${price}</strong></span></p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="mb-4" />
                
                
                <p class="text-primary mb-0"><i class="fas fa-info-circle mr-1"></i>
                 Do not delay the purchase, adding
                 items to your cart does not mean booking them.</p>

              </div>
            </div>
            {/* <!-- Card -->

            <!-- Card --> */}
                      </div>
          {/* <!--Grid column--> */}

        </div>
        {/* <!--Grid row--> */}

      </section>
    //   {/* <!--Section: Block Content--> */}

       
        
        
      
          
            
    )
}
