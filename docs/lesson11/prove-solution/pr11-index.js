/************************************************************
 * This code is not the full index.js file you should use.
 * Instead, it's the code that should be added or modified to
 * fit into your index.js or app.js file.
 ************************************************************/
const server = app.listen(PORT)

const io = require('socket.io')(server)

io.on('connection', socket => {
    console.log('Client connected')
    socket.on('new-name', update => {
        if (update) {
            socket.broadcast.emit('update-list')
        } else {
            console.log('Looks like something went wrong')
        }
    })
})
