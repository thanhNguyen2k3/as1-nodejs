import express from 'express';
import RouterPage from './routers/index.js';
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const port = process.env.PORT;
app.use(express.json());

app.use('/api', RouterPage)
app.listen(port, () => `ứng dụng đang chạy trên http://localhost:${port}/`);