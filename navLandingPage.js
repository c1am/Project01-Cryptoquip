var addBtnEl = document.getElementById("addBtn")
var nameInputEl = document.getElementById("coinInput")
var cryptoArray = [];

function handleAdd(event) {
    var cryptocurrency = nameInputEl.value.trim();

    event.preventDefault();

    // Validation
    if (cryptocurrency) {
        getCoin(cryptocurrency)
        .then (function(coinData) {
            if (coinData) {
                
                // localStorage.setItem(cryptocurrency, JSON.stringify(cryptoArray))
                console.log(coinData)
            }
        })
    }
};

/* async method of the Add to Watchlist button function
async function handleAdd(event) {
    var cryptoArray = [];
    var cryptocurrency = nameInputEl.value.trim();

    event.preventDefault();

    // Validation
    if (cryptocurrency) {
        var coinStatus = await checkCoinName(cryptocurrency)
        console.log(coinStatus)

    if (coinNameStatus = true) {
        cryptoArray 
    }
};
*/

function getCoin(coinName) {
    var id = coinName
    var apiUrl = 'https://api.coingecko.com/api/v3/coins/' + coinName ;

    return new Promise(function(resolve, reject) {
        fetch (apiUrl)
        .then ((response) => {
            return response.json();
        })

        .then (function(data) {
            if (coinName = data.name) {
                resolve(data);
            } else {
                resolve(false);
            };
        })

        .catch(function (error) {
            reject(error);
        });
    })

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