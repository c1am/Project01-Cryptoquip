


fetch('https://api.coingecko.com/api/v3/coins/list?include_platform=true')
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
    })
