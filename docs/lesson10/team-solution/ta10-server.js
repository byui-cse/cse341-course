const express = require('express');
const router = express.Router();

// Path to your JSON file, although it can be hardcoded in this file.
const dummyData = require('../../data/ta10-data.json') 

router.get('/fetchAll', (req, res, next) => {
    res.json(dummyData);
});

router.post('/insertName', (req, res, next) => {
    // Typically you should do some sort of filtering and error checking. This is minimal, and makes sure we're not accepting empty values
    console.log('REQUEST');
    if (req.body.newName !== undefined) {
        const newName = req.body.newName;
        if (dummyData.avengers.find(element => element.name === req.body.newName) === undefined) { // Make our submissions somewhat unique.
            dummyData.avengers.push({ 'name' : newName }); // Push new object into the dummyData
            res.sendStatus(200);
        }
    } else {
        res.sendStatus(400); // Bad request error code
    }
});

router.get('/', (req, res, next) => {
    res.render('pages/teamActivities/ta10', {
        title: 'Team Activity 10',
        path: '/teamActivities/10', 
    });
});

module.exports = router;