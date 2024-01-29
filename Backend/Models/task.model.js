const mongoose = require("mongoose")

// creating SCHEMA 

const taskSchema = mongoose.Schema({
    task : {type: String, required : true},
    description : {type : String, required : true},
    end_date : {type : Date, default : Date.now()},
    completed : {type : Boolean, default : false}
},{
    versionKey : false
})

//model
module.exports = mongoose.model("task", taskSchema)