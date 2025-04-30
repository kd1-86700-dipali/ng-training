import express from 'express';
import mangoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import taskRoutes from './routes/tasks'
//const mongoose = require('mongoose');
//const cors = require('cors');
//const bodyParser = require('body-parser');
//const taskRoutes = require('./routes/tasks');
const { default: connectDB } = require('./config/mongodb');

const app = express();
const PORT =process.env.PORT || 4000
app.use(cors());
await connectDB
app.use(bodyParser.json());
app.use(taskRoutes);

app.listen(PORT,()=>console.log("server running on port " + PORT))
// mongoose.connect(PORT, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => app.listen(4000, () => console.log("Server running on http://localhost:4000")))
//   .catch(err => console.error(err));