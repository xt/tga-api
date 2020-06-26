"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const port = parseInt(process.env.PORT || "", 10) || 8000;
server_1.server.listen(port);
