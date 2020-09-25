import { string } from "prop-types";

const mongoose = require("mongoose");
const {Schema} = mongoose;
// 1st Step is building Schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});
// 2nd Step is compiling schema into model
export default mongoose.model('User', userSchema);

// how to add "speak" functionality to our documents:

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
// kittySchema.methods.speak = function () {
//     const greeting = this.name
//       ? "Meow name is " + this.name
//       : "I don't have a name";
//     console.log(greeting);
//   }
  
//   const Kitten = mongoose.model('Kitten', kittySchema);