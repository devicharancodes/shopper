var mongoClient = require("mongodb").MongoClient;
var express = require("express");
var cors = require("cors");

var connectionString = "mongodb://127.0.0.1:27017";

var app = express();
app.use(cors());

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());



// app.get("/", (req,res)=>res.send("<h1>API </h1>"));

app.get("/users", (req, res) => {
    mongoClient.connect("mongodb://127.0.0.1:27017").then((clientObj)=>{
        var database = clientObj.db("shopper");
        database.collection("users").find({}).toArray().then((documents)=>{
            res.send(documents);
        })
    })
});

app.post("/register" , (req,res) => {
    var user ={
        "userId": req.body.userId,
        "userName":req.body.userName,
        "password":req.body.password,
        "email":req.body.email,
        "mobile":req.body.mobile
    }
    mongoClient.connect(connectionString).then(clientObj => {
        var database = clientObj.db("shopper");
        database.collection("users").insertOne(user).then(result => {console.log("Record Inserted");
                                                                      res.redirect("/users");})
    })
});
    

 app.listen(5000);
 console.log("server started : http://127.0.0.1:5000");
