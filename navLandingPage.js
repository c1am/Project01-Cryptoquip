var addBtnEl = document.getElementById("addBtn")
var displayEl = document.getElementById("display")
var nameInputEl = document.getElementById("coinInput")
var cryptoArray = [];

// formats the API currency data into the right punctuation/syntax
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})

// add to watchlist button
function handleAdd(event) {
    var cryptocurrency = nameInputEl.value.trim();

    event.preventDefault();

    // Validation
    if (cryptocurrency) {
        getCoin(cryptocurrency)
        .then (function(coinData) {
            if (coinData) {
                // localStorage.setItem(cryptocurrency, JSON.stringify(cryptoArray))
                renderCoinToDisplay(coinData);
            }
        })
    }
};

function renderCoinToDisplay(coinData) {
    // create element
    var coinCardEl = document.createElement("div");
    coinCardEl.classList.add("coinCard");

    // coinData.name
    var coinName = document.createElement("div")
    coinName.textContent = coinData.name;
    coinName.classList.add("cardName");
    coinCardEl.append(coinName);
    
    // coinData.block_time_in_minutes

    // coinData.coingecko_score

    // coinData.community_data.facebook_likes ; community_data.twitter_followers ; community_data.reddit_average_comments_48h 
    // coinCardEl.textContent = coinData.community_data.twitter_followers;

    // create social card
    var socialContainer = document.createElement("div");
    var logoEl = document.createElement("img");


    // socialContainer.textContent = coinData.community_data.twitter_followers + " followers";
        // create twitter logo image
        logoEl.classList.add("socialLogo");
        logoEl.src = "./twitter-svgrepo-com.svg"
        socialContainer.append(logoEl);

        // create twitter followers
        socialContainer.append(" " + coinData.community_data.twitter_followers + " followers")
        coinCardEl.append(socialContainer);

    // coinData.description.en

    // coinData.genesis_date

    // coinData.image.large
    var coinImageEl = document.createElement("img");
    coinImageEl.classList.add("coinImage");
    coinImageEl.src = coinData.image.large;
    coinCardEl.append(coinImageEl);

    // coinData.market_data.current_price.usd
    var marketData = document.createElement("div");
    marketData.append("Current Market Price: " + formatter.format(coinData.market_data.current_price.usd));
    coinCardEl.append(marketData);


    // coinData.market_data.market_cap.usd
    var marketCap = document.createElement("div");
    marketCap.append("Current Market Cap: " + formatter.format(coinData.market_data.market_cap.usd));
    coinCardEl.append(marketCap);

    // coinData.market_data.price_change_percentage_30d

    // append to display element
    displayEl.append(coinCardEl);
}


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