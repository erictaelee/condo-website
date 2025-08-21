// const express = require('express');
// const cors = require('cors');

import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT: number = 3001;

// Middleware (like Rails before_action)
app.use(cors());
app.use(express.json());

// Your first route with proper types
app.get('/api/units', (req: Request, res: Response) => {
  res.json({ message: 'Hello from your condo API!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});