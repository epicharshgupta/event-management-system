import { useNavigate } from "react-router-dom";

function UserDashboard() {

  const navigate = useNavigate();

  return (

    <div className="max-w-6xl mx-auto p-20">

      <h1 className="text-3xl font-bold mb-10">
        User Dashboard
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

        <div 
          onClick={()=>navigate("/vendor-services")}
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg cursor-pointer"
        >
          <h2 className="text-xl font-semibold">Vendor Services</h2>
          <p className="text-gray-500">Browse available services</p>
        </div>

        <div 
          onClick={()=>navigate("/cart")}
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg cursor-pointer"
        >
          <h2 className="text-xl font-semibold">Cart</h2>
          <p className="text-gray-500">Manage your cart</p>
        </div>

        <div 
          onClick={()=>navigate("/guest-list")}
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg cursor-pointer"
        >
          <h2 className="text-xl font-semibold">Guest List</h2>
          <p className="text-gray-500">Add or manage guests</p>
        </div>

        <div 
          onClick={()=>navigate("/checkout")}
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg cursor-pointer"
        >
          <h2 className="text-xl font-semibold">Payment</h2>
          <p className="text-gray-500">Proceed to payment</p>
        </div>

        <div 
          onClick={()=>navigate("/user/orders")}
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg cursor-pointer"
        >
          <h2 className="text-xl font-semibold">Order Status</h2>
          <p className="text-gray-500">Track your order</p>
        </div>

      </div>

    </div>

  );
}

export default UserDashboard;