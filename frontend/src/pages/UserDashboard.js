import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function UserDashboard() {

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch all products
  const fetchProducts = async () => {
    try {

      const res = await API.get("/products");

      setProducts(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  // Add to cart
  const handleAddToCart = async (productId) => {

    try {

      await API.post("/cart/add", {
        product: productId,
        quantity: 1
      });

      alert("Added to Cart");

    } catch (error) {

      alert("Error adding to cart");

    }

  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (

    <div>

      <h1>User Dashboard</h1>

      <button onClick={() => navigate("/cart")}>
        Go To Cart
      </button>

      <h2>Available Services</h2>

      {products.length === 0 ? (
        <p>No Products Available</p>
      ) : (
        products.map((product) => (

          <div key={product._id} style={{ marginBottom: "20px" }}>

            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <p>₹ {product.price}</p>

            <button onClick={() => handleAddToCart(product._id)}>
              Add To Cart
            </button>

            <hr />

          </div>

        ))
      )}

    </div>

  );

}

export default UserDashboard;