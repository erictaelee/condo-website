import express, { Request, Response } from 'express';
import cors from 'cors';
import unitRoutes from './routes/units';

const app = express();
const PORT: number = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/units', unitRoutes);

// Health check endpoint (good practice for production)
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});