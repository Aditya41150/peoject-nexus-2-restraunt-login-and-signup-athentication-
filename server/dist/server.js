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
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const connection_1 = require("./connection");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.default);
const port = 3001;
const uri = 'mongodb+srv://UtkarshPandey:QLTBL90QLVJwG56h@clusternotemon.arht49h.mongodb.net/?retryWrites=true&w=majority&appName=ClusterNotemon';
(function connectToMongoDb() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, connection_1.connection)(uri);
    });
})().then(() => console.log('Connected to the database')).catch((error) => console.log('Error connecting to the database'));
app.get('/', (req, res) => {
    res.send('Hello World! ');
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
