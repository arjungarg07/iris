const mongoose = require("mongoose");
const {Schema} = mongoose;
// 1st Step is building Schema
const userSchema = new Schema({
    username: {
        type: String,
    },
    password: {
        type: String
    }
});
// 2nd Step is compiling schema into model
module.exports = mongoose.model('User', userSchema);

// export default mongoose.model('User', userSchema);

// how to add "speak" functionality to our documents:

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
// kittySchema.methods.speak = function () {
//     const greeting = this.name
//       ? "Meow name is " + this.name
//       : "I don't have a name";
//     console.log(greeting);
//   }
  
//   const Kitten = mongoose.model('Kitten', kittySchema);
