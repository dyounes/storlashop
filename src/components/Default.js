import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        console.log(this.props);
        // we use the location property in the this.props object.
        return (
            <div className="container">
                <div className="row">
                  <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                      <h5 >404</h5>
                      <h2>error</h2>
                      <h3>page not found!</h3>
                      <h4>the requested URL 
                          <span className="text-danger text-lowercase">
                              {" ..."+this.props.location.pathname +" "}
                          </span>
                          was not found </h4>
                      </div>  

                </div>
                
            </div>
        )
    }
}
