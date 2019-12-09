const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required:true
    },
    email : {
        type : String,
        required:true,
        unique:true
    },
    contactNumber : {
        type: String,
        required: true
    },
    courseLevel : {
        type: String,
        required: true
    },
    country : {
        type: [String],
        required: true
    },
    dob : {
        type : Date
    }
})

const User = mongoose.model('user',userSchema);
export default User;