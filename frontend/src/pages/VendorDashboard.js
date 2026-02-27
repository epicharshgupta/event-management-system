import { useNavigate } from "react-router-dom";

function VendorDashboard() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (

    <div>

      <h1>Welcome Vendor</h1>

      <button onClick={()=>navigate("/vendor/products")}>
        Your Items
      </button>

      <button onClick={()=>navigate("/vendor/add-product")}>
        Add New Item
      </button>

      <button onClick={()=>navigate("/vendor/transactions")}>
        Transaction
      </button>

      <button onClick={logout}>
        Logout
      </button>

    </div>

  );
}

export default VendorDashboard;