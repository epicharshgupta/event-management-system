import { useEffect, useState } from "react";
import API from "../services/api";

function Membership(){

  const [vendors,setVendors] = useState([]);
  const [membership,setMembership] = useState("6 months");

  const fetchVendors = async ()=>{
    try{
      const res = await API.get("/admin/vendors");
      setVendors(res.data);
    }catch(err){
      console.log(err);
    }
  };

  const assignMembership = async (vendorId)=>{
    try{

      await API.post("/admin/membership",{
        vendorId,
        membership
      });

      alert("Membership assigned");

      fetchVendors();

    }catch(err){
      console.log(err);
      alert("Error assigning membership");
    }
  };

  useEffect(()=>{
    fetchVendors();
  },[]);

  return(

    <div>

      <h2>Membership Management</h2>

      <select
        value={membership}
        onChange={(e)=>setMembership(e.target.value)}
      >

        <option>6 months</option>
        <option>1 year</option>
        <option>2 years</option>

      </select>

      <hr/>

      {vendors.length===0 ? (
        <p>No Vendors Found</p>
      ):(
        vendors.map(vendor=>(
          <div key={vendor._id}>

            <p>
              {vendor.email} — Current: {vendor.membership || "None"}
            </p>

            <button
              onClick={()=>assignMembership(vendor._id)}
            >
              Assign Membership
            </button>

            <hr/>

          </div>
        ))
      )}

    </div>

  );

}

export default Membership;