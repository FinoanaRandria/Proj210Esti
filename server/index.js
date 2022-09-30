const express = require("express");
const mysql = require("mysql");
const cors = require("cors")
const app= express();
const Router = express.Router();
app.use(express.json());
app.use(cors())

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"Login",
});




Router.post('/login',(req,res)=>{
    const username =req.body.username;
    const password =req.body.password;

    console.log("request");
    db.query(
        "SELECT * FROM Login WHERE Email=? AND password=?",
        [username,password],(err,result)=>{
            if(result && result.length > 0){
                res.send(result);
                //res.redirect("http://localhost:3000/home")
            }else{
                res.send({
                    message : "Check your password or your username"
                })
            }
        }
    )
})
app.use("/",Router);

app.listen(4003,()=>{
    console.log(`Server start on http://localhost:4003`);
})
