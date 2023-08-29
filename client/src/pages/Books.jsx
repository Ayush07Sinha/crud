import React, { useEffect, useState } from "react";
import axios from "axios";

const  CustomerProfile=()=>{
    const[customer,setCustomer]=useState([]);
    useEffect(()=>{
        const fetchAllBooks=async()=>{
            try{
                const res=await axios.get("http://localhost:8800/customer")
                setCustomer(res.data);
            }catch (err){
                console.log(err);
            }
        }
        fetchAllBooks()
    },[])
    return (
        <div>
             <h1>Customer Details</h1>
             <div className="customerprofile">
                {customer.map((customer)=>(
                    <div className="cp" key={customer.id}>
                        {customer.cover && <img src="" alt=""/>}
                        <h2>{customer.first_name}</h2>
                        <p>{customer.last_name}</p>
                        <span>{customer.email}</span>
                    </div>
                ))}

             </div>
        </div>
    )
}
export default CustomerProfile;