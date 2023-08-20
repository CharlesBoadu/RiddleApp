const express = require('express');
const riddles = require('./models/Riddles.js');
const cors = require('cors');


const riddlesModel = new riddles();

const port = 4001; 
const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Welcome to the Riddle App Backend');
});

app.get('/riddles', async (req, res) => {
    const result = await riddlesModel.getRiddles();
    try {
        res.send(result);
    } catch (error) {   
        console.log(error);
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});