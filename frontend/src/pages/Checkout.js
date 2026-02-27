import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Checkout() {

  const [cartItems,setCartItems] = useState([]);
  const navigate = useNavigate();

  const fetchCart = async ()=>{

    try{

      const res = await API.get("/cart");

      setCartItems(res.data);

    }catch(error){
      console.log(error);
    }

  };

  useEffect(()=>{
    fetchCart();
  },[]);

  const getTotal = ()=>{
    return cartItems.reduce((total,item)=>{
      return total + item.product.price * item.quantity;
    },0);
  };

  const handleOrder = async ()=>{

    try{

      await API.post("/orders/create",{
        items:cartItems,
        total:getTotal()
      });

      alert("Order Placed Successfully");

      navigate("/user/orders");

    }catch(error){
      alert("Error placing order");
    }

  };

  return(

    <div>

      <h2>Checkout</h2>

      {cartItems.map(item=>(
        <div key={item._id}>
          <p>{item.product.name}</p>
          <p>₹ {item.product.price}</p>
        </div>
      ))}

      <h3>Total: ₹ {getTotal()}</h3>

      <button onClick={handleOrder}>
        Place Order
      </button>

    </div>

  );

}

export default Checkout;