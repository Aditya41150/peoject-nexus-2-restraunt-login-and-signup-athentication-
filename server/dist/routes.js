"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("./controllers");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/login', controllers_1.validateUser);
router.post('/createUser', controllers_1.createUser);
exports.default = router;
