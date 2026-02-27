import { useNavigate } from "react-router-dom";

function AdminDashboard(){

  const navigate = useNavigate();

  return(

    <div>

      <h1>Welcome Admin</h1>

      <button onClick={()=>navigate("/admin/users")}>
        Maintain User
      </button>

      <button onClick={()=>navigate("/admin/vendors")}>
        Maintain Vendor
      </button>

      <button onClick={()=>navigate("/admin/membership")}>
        Membership
      </button>

    </div>

  )

}

export default AdminDashboard;