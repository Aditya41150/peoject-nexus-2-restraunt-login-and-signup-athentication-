import { Schema } from "mongoose";
import mongoose from "mongoose";


const userSchema = new Schema({
    firstName: {
        type: String,
        min: 2,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        min: 6,
        email: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const UserA = mongoose.model('UserA', userSchema);
export default UserA;