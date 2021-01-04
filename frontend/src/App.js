import React from 'react';
import data from './data';



function App() {
  return (
    <div className="grid-container">
            <header className="row">
                <div > 
                    <a  className="brand" href="index.html">Techzon</a> 
                </div>
                <div>
                    <a href="cart.html">Cart</a>
                    <a href="signin.html">Sing In</a>
                </div>
            </header>
            <main>
                <div className="row center">
                    { data.products.map((product) =>(
                   <div className="card">
                        <a href="product.html">
                            <img className="medium" src="../images/1.jpg" alt="product"/>
                        </a>
                        <div className="cart=body">
                            <a href="product.html">
                                <h2>{product.name}</h2>
                            </a>
                            <div className="rating">
                                <span> <i className="fa fa-star"></i> </span>
                                <span> <i className="fa fa-star"></i> </span>
                                <span> <i className="fa fa-star"></i> </span>
                                <span> <i className="fa fa-star"></i>  </span>
                                <span> <i className="fa fa-star"></i> </span>
                            </div>
                            <div className="price">
                                R$ 8956,90
                            </div>
                        </div>
                    </div>

                     )
                )
            }

                </div>
                
            </main>
            <footer className="row center"> 
                All rights reserved 
            </footer>

        </div>
  );
}

export default App;
