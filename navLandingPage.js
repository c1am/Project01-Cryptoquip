var addBtnEl = document.getElementById("addBtn")
var nameInputEl = document.getElementById("coinInput")

function handleAdd(event) {
    var cryptoArray = [];
    var cryptocurrency = nameInputEl.value.trim();
    console.log(cryptocurrency);

    event.preventDefault();

    checkCoinName(cryptocurrency);

    if (coinNameStatus = true) {
        cryptoArray
    }
};

function checkCoinName(coinName) {
    var id = coinName
    var coinNameStatus = false
    var apiUrl = 'https://api.coingecko.com/api/v3/coins/' + coinName ;

    fetch (apiUrl)
        .then((response) => {
            if (response.ok) {
                console.log(response);
                return response.json();
            } else {
                alert('Error: ' + response.statusText);
            };

            if (coinName = data.name) {
                return coinNameStatus = true;
            } else {
                alert("Can't find this cryptocurrency!");
            };
        })

        .catch(function (error) {
            alert('Unable to connect to the API.');
        });
};
  


/* fetch('https://api.coingecko.com/api/v3/coins/ethereum')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
        // iterate through the array
        // take the first 10 entries in the array, each entry represents a coin
        for (var i=0; i<10 ; i++) {
            // in each coin, we want the following info:
            console.log(data[i]);
            // id
            console.log("id", data[i].id);
            // name
            console.log("name", data[i].name);
            // symbol
            console.log("symbol", data[i].symbol);
        }
            // if available, the platform
    })
    .catch ((err) => {
    }) */

addBtnEl.addEventListener('click', handleAdd);