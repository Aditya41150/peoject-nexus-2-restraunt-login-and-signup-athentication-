"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.Schema({
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
const UserA = mongoose_2.default.model('UserA', userSchema);
exports.default = UserA;
