// This is your client side script, and should be called in your EJS page
const socket = io('/') // This means your client will always be connected to your server, locally or on Heroku.

// Listener to update the list according to the socket.io emmit.
socket.on('update-list', () => {
    populateList()
})

// NOTE: Much of this code is the same as W10.

// A simple async GET request function
const getData = async (url = '') => {
    const response = await fetch(url, {
        method: 'GET'
    })
    return response.json()
}

// A simple async POST request function
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response.json()
}

// Populate the list
const populateList = () => {
    const nameList = document.getElementById('nameList')
    nameList.innerHTML = ''

    const data = getData('/proveAssignments/11/fetchAll')

    data.then(json => {
        json.avengers.forEach(item => {
            nameList.innerHTML += `<li>${item.name}</li>`
        })
    })
}

// Submit a new name to the list, notify all other clients
const submitName = () => {
    const newName = document.getElementById('newName').value

    const data = postData('/proveAssignments/11/insertName', {
        newName: newName
    })

    data.then(response => {
        console.log(response)
        if (response.status == 200) {
            populateList()
            document.getElementById('newName').value = ''
            socket.emit('new-name', true) // This emits to the server that we have added a new name and all other users are to be updated.
        } else {
            console.error(status)
        }
    })
}

// Initialize the list
populateList()
