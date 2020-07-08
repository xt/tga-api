import express, { Request, Response } from 'express';
import planes from './data/planes.json';

const server = express();

server.get('/', (req, res) => {
    res.send('Hello TGA Try 2 \n');
});

server.get('/api/get-planes', (req, res) => {
    res.status(200).json(planes);
});

server.get('/api/get-planes-details', (req, res) => {
    res.status(200).json(planes);
});

export { server };
