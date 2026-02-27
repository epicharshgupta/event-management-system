import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function AddProduct() {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {

    try {

      await API.post("/products/add", {
        name,
        description,
        price
      });

      alert("Product Added Successfully");

      navigate("/vendor/products");

    } catch (error) {
      alert("Error adding product");
    }

  };

  return (

    <div>

      <h2>Add New Product</h2>

      <input
        placeholder="Product Name"
        onChange={(e)=>setName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Description"
        onChange={(e)=>setDescription(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Price"
        onChange={(e)=>setPrice(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSubmit}>
        Add Product
      </button>

    </div>

  );
}

export default AddProduct;