import mongoose from "mongoose";

await mongoose.connect("mongodb://127.0.0.1:27017/mydb");

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const User = mongoose.model("User", userSchema);

// CREATE
await User.create({
    name: "Sumeet",
    age: 21
});

// READ
const users = await User.find();
console.log(users);

// UPDATE
await User.updateOne(
    { name: "Sumeet" },
    { age: 22 }
);

// DELETE
await User.deleteOne({
    name: "Sumeet"
});