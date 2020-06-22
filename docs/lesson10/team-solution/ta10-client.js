// A simple async GET request function
const getData = async (url = '') => {
    const response = await fetch(url, { // Await the response.
        method: 'GET'
    });
    return response.json(); // Wrap in a promise using JSON formatting. 
}

// A simple async POST request function
const postData = async (url = '', data={}) => {
    const response = await fetch(url, { // Await the response.
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // Data must be sent as a string
    });
    return response; // Wrap in a promise using JSON formatting. 
}

const populateList = () => {
    const nameList = document.getElementById('nameList');
    nameList.innerHTML = ''; // Clear list first

    const data = getData('/teamActivities/10/fetchAll'); // fetching from our own server

    data.then(json => {
            json.avengers.map(item => {
                nameList.innerHTML += `<li>${item.name}</li>`
            });
        });
}

const submitName = () => {
    const newName = document.getElementById('newName').value; // Grab the value of our new name

    const data = postData('/teamActivities/10/insertName', { 'newName': newName });

    data.then(response => {
        console.log(response)
        if (response.status == 200) {
            populateList(); // Repopulate the list
        } else {
            console.error(status); // Console log our status code
        }
    })
}


// Initialize the list
populateList();