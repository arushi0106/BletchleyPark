import  mongoose  from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,

})

const Userdata= mongoose.model('Userdata', userSchema)

export default Userdata;