let parties = []
const div = document.querySelector('.party_list');
// const button = document.querySelector("button")
// button.addEventListener("click", addParty(parties))

async function fetchParties(){
    const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-ftb-et-web-ft/events')
    const json = await response.json()
    parties = json.data
    render(parties)
}
fetchParties()

function render(){
    const html = parties.map(function(party){
        return `<div>
        <h2>${party.name}</h2>
        <p>${party.description}</p>
        <h3>${party.date}</h3>
        <h3>${party.location}</h3>
        </div>`
    }).join('');
    div.innerHTML = html;
}
// render(parties)
// function addParty(parties){
//     const newName = 
//     const newDescription = 
//     const newDate = 
//     const newLocation = 
//     const newParty = {name: `${newName}`, description: `${newDescription}`, date: `${newDate}`, location: `${newLocation}`,}
//     parties.unshift(newParty)
//     render(parties)
//     console.log(newParty)
// }