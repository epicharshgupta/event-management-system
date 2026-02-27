import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function UserDashboard() {

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {

    try {

      const res = await API.get("/products");

      setProducts(res.data);

    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (

    <div>

      <h1>User Dashboard</h1>

      <button onClick={()=>navigate("/cart")}>
        Go To Cart
      </button>

      <h2>Available Services</h2>

      {products.length === 0 ? (
        <p>No Products Available</p>
      ) : (
        products.map((product) => (

          <div key={product._id}>

            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>₹ {product.price}</p>

            <button>
              Add To Cart
            </button>

            <hr/>

          </div>

        ))
      )}

    </div>

  );

}

export default UserDashboard;