import { useEffect, useState } from "react";
import API from "../services/api";

function AdminVendors(){

  const [vendors,setVendors] = useState([]);

  const fetchVendors = async()=>{
    try{

      const res = await API.get("/admin/vendors");

      setVendors(res.data);

    }catch(error){

      console.log(error);

    }
  };

  useEffect(()=>{
    fetchVendors();
  },[]);

  return(

    <div>

      <h2>Vendor Management</h2>

      {vendors.length === 0 ? (

        <p>No Vendors Found</p>

      ) : (

        vendors.map(vendor=>(
          <div key={vendor._id}>

            <p>
              {vendor.email} — Membership: {vendor.membership || "None"}
            </p>

            <hr/>

          </div>
        ))

      )}

    </div>

  )

}

export default AdminVendors;