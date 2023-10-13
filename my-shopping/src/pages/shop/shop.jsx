import {useContext, useEffect, useState } from 'react';
import axios from 'axios';
import "./shop.css";
import { CartContext } from '../../context/shop-context';


export const Shop = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get(" https://apitest.perfit.studio/api/products/get-product-list")
            .then((res) => setdata(res.data))
    },[])

    const Globalstate = useContext(CartContext);
    const dispatch = Globalstate.dispatch;
    console.log(Globalstate);
 

    return (
        <div className="home">
        {data.map((item, index) => {
          item.quantity = 1;
          return (
            <div className="card" key={index}>
              <img src={item.image} alt="" />
              <p>{item.title}</p>
              <h3>$. {item.price}</h3>
              <button className='addToCartBttn' onClick={() => dispatch({ type: "ADD", payload: item })}>
                add to cart
              </button>
            </div>
          );
        })}
      </div>
    )
       
    
}
