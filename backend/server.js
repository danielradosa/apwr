const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const walletRoutes = require('./routes/wallet');

const app = express();
const PORT = process.env.PORT || 3690;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/wallet', walletRoutes);

app.get('/', (req, res) => {
    res.send('APWR NIGGAS IS UP ✨🔝');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT} 🍾🥳`);
});
