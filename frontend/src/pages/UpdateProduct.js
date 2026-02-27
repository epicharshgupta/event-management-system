import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

function UpdateProduct() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [description,setDescription] = useState("");
  const [price,setPrice] = useState("");

  const handleUpdate = async () => {

    try {

      await API.put(`/products/${id}`,{
        name,
        description,
        price
      });

      alert("Product Updated");

      navigate("/vendor/products");

    } catch(error){
      alert("Error updating product");
    }

  };

  return(

    <div>

      <h2>Update Product</h2>

      <input
        placeholder="Product Name"
        onChange={(e)=>setName(e.target.value)}
      />

      <br/><br/>

      <input
        placeholder="Description"
        onChange={(e)=>setDescription(e.target.value)}
      />

      <br/><br/>

      <input
        type="number"
        placeholder="Price"
        onChange={(e)=>setPrice(e.target.value)}
      />

      <br/><br/>

      <button onClick={handleUpdate}>
        Update Product
      </button>

    </div>

  );

}

export default UpdateProduct;