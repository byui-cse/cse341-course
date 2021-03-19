console.log('HELLO!')
/*********************************************************************
 * PR09 Solution JavaScript.
 * This should located somewhere in your public folder, with the path
 * being used as the src attribute for your <script> tag.
 *********************************************************************/
let prev = null // Setup placeholders for our next and prev links.
let next = null

const pokeList = document.getElementById('pokeList') // Grab the appropriate html element

const getData = async (url = '') => {
    const response = await fetch(url, {
        // Await the response.
        method: 'GET'
    })
    return response.json() // Wrap in a promise using JSON formatting.
}

const populateList = url => {
    const data = getData(url) // Make the request.
    clearList()

    // .then is used to access the response's promise
    data.then(json => {
        for (const i in json.results) {
            pokeList.innerHTML += `<li>${json.results[i].name}</li>`
            next = json.next
            prev = json.previous
        }
    })
}

const clearList = () => {
    pokeList.innerHTML = '' // Clear list to prevent more than ten items listed.
}

const populateNext = () => {
    if (next !== null) {
        populateList(next)
    } else {
        return
    }
}

const populatePrev = () => {
    if (prev !== null) {
        populateList(prev)
    } else {
        return
    }
}

// Initialize data
populateList('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10')

// This is optional, but it's a cool trick to set your event listeners properly.
// IF you do this, make sure no event listners (e.g. "onclick") are applied
// to the desired elements. (using attributes like "onclick")
document.getElementById('nextBtn').addEventListener('click', populateNext)
document.getElementById('prevBtn').addEventListener('click', populatePrev)
