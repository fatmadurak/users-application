import React, { useEffect, useState } from 'react'
import axios from "axios"

function Users({setActiveId}) {

const [users,setUsers]=useState([]);
const [loading,setLoading]=useState(true);

useEffect(()=>{


    axios("https://jsonplaceholder.typicode.com/users")
    .then((res)=>setUsers(res.data))
    .finally(()=>setLoading(false))
   

},[])

  return (


    <div>
        <h1>Kullanıcılar</h1>
        {loading && <p>Yükleniyor...</p>}
       <ul>
       {

      users.map((user) => (
    
        <li key={user.id}onClick={setActiveId}>{user.name}</li>

      ))
         }
       </ul>
    </div>
  )
}

export default Users