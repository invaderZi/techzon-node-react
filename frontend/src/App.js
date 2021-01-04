import React from 'react';
import Product from './components/Product';
import data from './data';



function App() {
  return (
    <div className="grid-container">
            <header className="row">
                <div > 
                    <a  className="brand" href="/">Techzon</a> 
                </div>
                <div>
                    <a href="/cart">Cart</a>
                    <a href="/login">Login</a>
                </div>
            </header>
            <main>
                <div className="row center">
                    { data.products.map((product) =>( // mapping the list of profucts for a recurrent style
                   <Product key = {product._id} product = {product}></Product> // first element after a map func, has to have one key of unique value, in this case, the id
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
