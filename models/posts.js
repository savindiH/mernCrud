const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({


    topic:{
        type : String,
        required:true
    },
    email:{
        type: String,
        recquired:true
    },
    postCategory:{
        type: String,
        required:true
    }

});

module.exports = mongoose.model('Posts', postSchema);

