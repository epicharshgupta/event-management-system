import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Cart() {

  const [items,setItems] = useState([]);
  const navigate = useNavigate();

  const fetchCart = async ()=>{

    try{

      const res = await API.get("/cart");

      setItems(res.data);

    }catch(error){
      console.log(error);
    }

  };

  useEffect(()=>{
    fetchCart();
  },[]);

  const removeItem = async(id)=>{

    try{

      await API.delete(`/cart/${id}`);

      fetchCart();

    }catch(error){
      console.log(error);
    }

  };

  return(

    <div>

      <h2>Your Cart</h2>

      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        items.map((item)=>(
          <div key={item._id}>

            <h3>{item.product.name}</h3>
            <p>₹ {item.product.price}</p>

            <button onClick={()=>removeItem(item._id)}>
              Remove
            </button>

            <hr/>

          </div>
        ))
      )}

      <button onClick={()=>navigate("/checkout")}>
        Checkout
      </button>

    </div>

  );

}

export default Cart;