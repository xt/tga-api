import express, { Request, Response } from "express";
import planes from "./data/planes.json";

const server = express();

server.get("/", (req, res) => {
  res.send("Hello TGA \n");
});

server.get("/api/get-planes", (req, res) => {
  res.status(200).json(planes);
});

export { server };
