fetch('https://api.coingecko.com/api/v3/coins/list?include_platform=true')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch ((err) => {

    })
