import express from "express"
import mysql from "mysql2"
import cors from "cors"

const app=express()

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"ayush",
    database:"sakila"
});

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.json("hello this is the backend")
})

app.get("/customer",(req,res)=>{
    const q="SELECT * FROM customer order by customer_id limit 10"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})



app.post("/customer",(req,res)=>{
    const q= "INSERT INTO customer(`store_id`,`first_name`,`last_name`,`email`,`address_id`) VALUES (?)"
    const values=[
        req.body.store_id,
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        req.body.address_id,
    ];

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("row added")
    })
})

app.listen(8800, ()=>{
    console.log("Connected to backend!")
})