const express = require("express");
const mysql = require("mysql");
const cors = require("cors")
const app= express();
const Router = express.Router();
app.use(express.json());
app.use(cors());

const createError = require('http-errors');
const morgan = require('morgan');

require('dotenv').config();

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"Esti_EDT",
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

Router.get("/GestionProf/list",(req,res)=>{
    db.query(`SELECT * FROM Login WHERE status = 0`,
    (err,data)=>{
        if(err){
            console.log("Impossible de recuperer les donnees");
        }else{
            res.send(data)
        }
    })
});

Router.post("/GestionProf/supprimer/:id",(req,res)=>{
    const id = req.params["id"];
    console.log(id)
    db.query(
        `DELETE FROM Login WHERE id=${id}`,
        (err,success) => {
            if(err){
                console.log("Impossible de suppprimer l'id"+id);
            }else{
                res.send({
                    message : "Les informations ont bien ete supprimer"
                })
            }
        }
    )
})

Router.post("/GestionProf/ajouter",(req,res)=>{
    const params = req.body;
    db.query(
        `INSERT INTO Login (Email,Password)
        VALUES(?,?)
        `,[params[0],params[1]],
        (err,_) => {
            if(err){
                console.log("Impossible d'enregidtrer,",err);
            }else{
                console.log("success");
            }
        }
    )
});

Router.get("/Module",(req,res)=>{
    db.query(
        `SELECT * FROM Module
        `,
        (err,values) => {
            if(err){
                console.log("Impossible d'enregidtrer,",err);
            }else{
                console.log("success to get module");
                res.send({
                    data  : values
                })
            }
        }
    )
});
Router.post("/Module/delete/:id",(req,res)=>{
    const params = req.params;
    db.query(
        `DELETE FROM Module WHERE ID=${params.id}
        `,
        (err,values) => {
            if(err){
                console.log("Impossible de supprimer ce module,",err);
            }else{
                console.log("success to delete");
                res.send({
                    message : "Success to delete module"
                })
            }
        }
    )
});
Router.get("/",(req,res)=>{
    res.json({
        "message" : "mande be le izy"
    })
});

app.use("/",Router);
app.use('/api', require('./routes/api.route'));


app.listen(4003,()=>{
    console.log(`Server start on http://localhost:4003`);
})
