import React from 'react';
import Product from '../components/Product';
import data from '../data'

export default function HomeScreen(props){
return(
     <div>
         <div className="row center">
            {data.products.map((product) =>( // mapping the list of profucts for a recurrent style
                 <Product key = {product._id} product = {product}></Product> // first element after a map func, has to have one key of unique value, in this case, the id
        ))}
        </div>
     </div>
)}