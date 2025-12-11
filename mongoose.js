// CONNECT TO MONGODB
const mongoose = require("mongoose");//mongoose irukanu check pandrom.

mongoose.connect("mongodb://localhost:27017/FS_Collection")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Create Schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String
});
// schena vera file ,model vera file rendu filum epdi connect pandradhunu dha edhula pakaporom.
// Create Model

const Student = mongoose.model("Student",studentSchema);

// Insert Document
async function createStudent() {
    const s = new Student({
        name: "yuva",
        age: 19,
        city: "chennai"
    });
    const result = await s.save();
    console.log("Inserted:",result);
}

createStudent();



