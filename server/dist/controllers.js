"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.validateUser = void 0;
const schema_1 = __importDefault(require("./schema"));
function validateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        const email = (_a = req.body) === null || _a === void 0 ? void 0 : _a.email;
        const password = (_b = req.body) === null || _b === void 0 ? void 0 : _b.password;
        console.log(req.body);
        try {
            const user = yield schema_1.default.findOne({ email: email, password: password });
            if (user) {
                console.log("user found " + user);
                res.json(user);
            }
            else {
                res.status(404).send("User not found");
            }
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
exports.validateUser = validateUser;
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        const firstName = (_a = req.body) === null || _a === void 0 ? void 0 : _a.firstName;
        const lastName = (_b = req.body) === null || _b === void 0 ? void 0 : _b.lastName;
        const email = (_c = req.body) === null || _c === void 0 ? void 0 : _c.email;
        const password = (_d = req.body) === null || _d === void 0 ? void 0 : _d.password;
        console.log(req.body);
        try {
            const user = yield schema_1.default.findOne({ email: email });
            if (user != null) {
                console.log("user already exists");
                res.status(200).send("user already exists");
            }
            else {
                const user = new schema_1.default({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password
                });
                yield user.save();
                res.status(201).send(user);
            }
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
exports.createUser = createUser;
