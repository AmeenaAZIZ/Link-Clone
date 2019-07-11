const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect Database
connectDB();

const cors = require('cors');
app.use(cors());
//app.use(cors({ origin: 'http://localhost:5000' }));

//Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));

app.listen(5000, () => console.log('Listening'));
//const PORT = process.env.PORT || 5000;

//app.listen(PORT, () => console.log(`server started on ${PORT}`));
