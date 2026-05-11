import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    service: 'neurodesk-gateway',
    version: '0.1.0',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/v1', (req, res) => {
  res.json({
    message: "NeuroDesk API Gateway",
    endpoints: {
      documents: "/api/v1/documents",
      chat: "/api/v1/chat",
      projects: "/api/v1/projects"
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 NeuroDesk Gateway running on http://localhost:${PORT}`);
});