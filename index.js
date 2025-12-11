const express = require("express");
const app = express();
const {MongoClient, ObjectId } = require("mongodb");

app.use(express.json());

const url = "mongodb://localhost:27017/FS_Collection";


const db = client.db("FS_collection");
const usersCollection = db.collection("users");

//Root route

app.get("/",(req,res) => {
    res.send("server Running successfully!");
});

//GET ALL USER
app.get("/users", async (req,res) => {
    const id = req.params.id;
    const user = await usersCollection.findOne({ _id: new ObjectId(id) });
    res.json(user);
});

//POST -ADD NEW USER
app.post("/user",async (req,res) => {
    const result = await usersCollection.insertOne(req.body);
    res.json(result);
});

//PUT - update full record for all users
app.put()