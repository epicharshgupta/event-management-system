import { useEffect, useState } from "react";
import API from "../services/api";

function UserOrders() {

  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {

    try {

      const res = await API.get("/orders/user");

      setOrders(res.data);

    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (

    <div>

      <h2>Your Orders</h2>

      {orders.length === 0 ? (
        <p>No Orders Found</p>
      ) : (
        orders.map((order) => (

          <div key={order._id}>

            <p>Total Amount: ₹ {order.total}</p>
            <p>Status: {order.status}</p>

            <hr />

          </div>

        ))
      )}

    </div>

  );

}

export default UserOrders;