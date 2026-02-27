import { useEffect, useState } from "react";
import API from "../services/api";

function AdminUsers(){

  const [users,setUsers] = useState([]);

  const fetchUsers = async()=>{
    try{

      const res = await API.get("/admin/users");

      setUsers(res.data);

    }catch(error){

      console.log(error);

    }
  };

  useEffect(()=>{
    fetchUsers();
  },[]);

  return(

    <div>

      <h2>User Management</h2>

      {users.length === 0 ? (
        <p>No Users Found</p>
      ) : (

        users.map(user=>(
          <div key={user._id}>

            <p>
              {user.email} — {user.role}
            </p>

            <hr/>

          </div>
        ))

      )}

    </div>

  );

}

export default AdminUsers;