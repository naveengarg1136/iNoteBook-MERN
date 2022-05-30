const mongoose= require('mongoose');
const User = require('./User')

const { Schema } = mongoose;

const notesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    title:{
        type: String,
        required: true,
    },
    description:{
        type:String,
    },
    tag:{
        type:String,
        default: "General"
    },
    Date:{
        type:Date,
        default: Date.now
    }
  
});


module.exports= mongoose.model("notes",notesSchema);