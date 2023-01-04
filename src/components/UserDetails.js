import React, { useEffect, useState } from 'react'
import axios from "axios"

function UserDetails({activeId}) {

    const [user,setUser]=useState();
    const[loading,setLoading]=useState(false);

    useEffect(()=>{
    
     setLoading(true)
     axios(`https://jsonplaceholder.typicode.com/users/${activeId}`)
     .then((res)=>setUser(res.data))
     .finally(()=>setLoading(false))
    },[activeId])



  return (
    <div>
        <h1>Kullanıcı Detayları</h1>
        {loading && <p>Yükleniyor...</p>}

    {

        !loading &&  <pre>{JSON.stringify(user,null,2) }</pre>
    }
        
    </div>
  )
}

export default UserDetails