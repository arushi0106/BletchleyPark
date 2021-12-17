import mongoose from 'mongoose';
import Crossword from './crossword.js';
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    
    password:{
        type:String,
        required:true
    },
    id: {
        type:String
    },
    crossword: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Crossword' }],
})

var User = mongoose.model('User', userSchema);

export default User
