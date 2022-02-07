let cardsDiv = document.querySelector("#cards")
let currentUsername = "";

function getUsername(element) {
    console.log(element.value);
    // We can relay that currentUsername will hold what is inside the input, when the button it is clicked
    currentUsername = element.value;
}

function makeCoderCard(data) {
    let res =  `<div class="card">
                    <img src="${data.avatar_url}" alt="${data.login}">
                    <div class="flex-1">
                        <h3>${data.login} - ${data.name}</h3>
                        <p>Location: ${data.location}</p>
                        <p>Repositories: ${data.public_repos}</p>
                    </div>
                </div>`
    return res;
}

function getGHUser(e) {
    e.preventDefault()
    coderData = fetch("https://api.github.com/users/" + currentUsername)
        .then(response => response.json())
        .then(coderData => {
            // console.log(coderData);
            cardsDiv.innerHTML = makeCoderCard(coderData) + cardsDiv.innerHTML;
            })
        .catch(err => console.log(err))
}