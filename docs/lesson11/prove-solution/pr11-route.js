// As with W10, you will not need a separate controllers file for the router methods, but it doesn't hurt to implement one
// Notice that this route handling is almost the exact same as W10. Practically nothing needs to be changed to implement socket.io
const express = require('express')
const router = express.Router()

router.get('/fetchAll', (req, res, next) => {
    res.json(dummyData)
})

router.post('/insertName', (req, res, next) => {
    // Typically you should do some sort of filtering and error checking. This is minimal, and makes sure we're not accepting empty values
    if (req.body.newName !== undefined) {
        const newName = req.body.newName
        if (
            dummyData.avengers.find(
                element => element.name === req.body.newName
            ) === undefined
        ) { // Make our submissions somewhat unique.
            dummyData.avengers.push({ name: newName }) // Push new object into the dummyData
            res.sendStatus(200)
        }
    } else {
        res.sendStatus(400) // Bad request error code
    }
})

router.get('/', (req, res, next) => {
    res.render('pages/proveAssignments/pr11', {
        title: 'Prove Assignment 11',
        path: '/proveAssignments/11'
    })
})

module.exports = router
