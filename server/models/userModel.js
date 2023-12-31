import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      mobile: {
        type: Number,
        required: true,
      },
      isAdmin:{
        type: Boolean,
        default: false,
      },
      
},{
    timestamps:true,
});

const userModel = mongoose.model("user",userSchema);

export default userModel;