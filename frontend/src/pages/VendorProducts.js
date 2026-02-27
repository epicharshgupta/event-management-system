import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function VendorProducts() {

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch vendor products
  const fetchProducts = async () => {
    try {
      const res = await API.get("/products/vendor");
      setProducts(res.data);
    } catch (error) {
      console.log("Error fetching products", error);
    }
  };

  // Delete product
  const handleDelete = async (id) => {
    try {
      await API.delete(`/products/${id}`);
      alert("Product Deleted");
      fetchProducts(); // refresh list
    } catch (error) {
      alert("Error deleting product");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>

      <h2>Your Items</h2>

      {products.length === 0 ? (
        <p>No Products Found</p>
      ) : (
        products.map((product) => (
          <div key={product._id} style={{ marginBottom: "20px" }}>

            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>₹ {product.price}</p>

            <button
              onClick={() => navigate(`/vendor/update/${product._id}`)}
              style={{ marginRight: "10px" }}
            >
              Update
            </button>

            <button
              onClick={() => handleDelete(product._id)}
            >
              Delete
            </button>

            <hr />

          </div>
        ))
      )}

    </div>
  );
}

export default VendorProducts;