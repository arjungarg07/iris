const mongoose = require("mongoose");
const {Schema} = mongoose;
const articleSchema = new Schema({
    type_of: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    claps_count: {
        type: Number,
        default: 0,
    },
    created_at: {
        type : Date,
    },
    tags: {
        type: String
    },
    user_name: {
        type : String,
        required: true,
    },

});

module.exports = mongoose.model('article', articleSchema);


// email: {
//     type: String,
//     unique: true,
//     required: true,
//     trim: true,
//     match: [/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/, 'invalid email'],
//   },