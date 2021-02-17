import { createServer } from 'http';
import routes from './routes.js';
import express from 'express';

const server = createServer(routes);

server.listen(3000);
