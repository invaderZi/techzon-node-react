
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
                    <div className="card">
                        <a href="product.html">
                            <img className="medium" src="../images/1.jpg" alt="product"/>
                        </a>
                        <div className="cart=body">
                            <a href="product.html">
                                <h2>Ultrabook Lenovo ZXX89 i7 8gb nvidia 4gb</h2>
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

                    <div className="card">
                        <a href="product.html">
                            <img className="medium" src="../images/2.jpg" alt="product"/>
                        </a>
                        <div className="cart=body">
                            <a href="product.html">
                                <h2>SSD kingston 267 gb </h2>
                            </a>
                            <div className="rating">
                                <span> <i className="fa fa-star"></i> </span>
                                <span> <i className="fa fa-star"></i> </span>
                                <span> <i className="fa fa-star"></i> </span>
                                <span> <i className="fa fa-star"></i>  </span>
                                <span> <i className="fa fa-star-o"></i> </span>
                            </div>
                            <div className="price">
                                R$ 300,10
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <a href="product.html">
                            <img className="medium" src="../images/3.jpg" alt="product"/>
                        </a>
                        <div className="cart=body">
                            <a href="product.html">
                                <h2>Lampada inteligente wifi POSITIVO</h2>
                            </a>
                            <div className="rating">
                                <span> <i className="fa fa-star"></i> </span>
                                <span> <i className="fa fa-star"></i> </span>
                                <span> <i className="fa fa-star"></i> </span>
                                <span> <i className="fa fa-star"></i>  </span>
                                <span> <i className="fa fa-star-o"></i> </span>
                            </div>
                            <div className="price">
                                R$ 100,00
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <a href="product.html">
                            <img className="medium" src="../images/4.jpg" alt="product"/>
                        </a>
                        <div className="cart=body">
                            <a href="product.html">
                                <h2>Alexa Echo dot 6 geração</h2>
                            </a>
                            <div className="rating">
                                <span> <i className="fa fa-star"></i> </span>
                                <span> <i className="fa fa-star"></i> </span>
                                <span> <i className="fa fa-star"></i> </span>
                                <span> <i className="fa fa-star"></i>  </span>
                                <span> <i className="fa fa-star-half-o"></i> </span>
                            </div>
                            <div className="price">
                                R$ 458,90
                            </div>
                        </div>
                    </div>
                </div>
                
            </main>
            <footer className="row center"> 
                All rights reserved 
            </footer>

        </div>
  );
}

export default App;
