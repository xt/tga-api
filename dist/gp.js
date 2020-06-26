"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const planes_json_1 = __importDefault(require("./data/planes.json"));
const server = express_1.default();
exports.server = server;
server.get("/api/gp", (req, res) => {
    res.status(200).json(planes_json_1.default);
});
