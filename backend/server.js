const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/auth', require('./routes/auth'));
app.use('/game', require('./routes/game'));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
