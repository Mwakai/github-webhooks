const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('', {
    newUrlParser: true,
    unifiedTopology: true,
});

const activitySchema = new mongoose.Schema({
    type: String,
    payload: Object,
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const Activity = mongoose.model('Activity', activitySchema);

// ENDPOINT
app.get('/activities', async (req, res) => {
    const activities = await Activity.find().sort({ createdAt: -1 });
    res.json(activities);
});

app.listen(3000, () => console.log('Server running on port 3000'));

