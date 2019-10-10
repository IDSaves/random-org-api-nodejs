const axios = require('axios')
require('dotenv').config()

class randomOrg {
    apiKey = ''

    constructor(key) {
        this.apiKey = key
    }

    echo = () => console.log(this.apiKey)

    async makeRequest(method, params) {
        params.apiKey = this.apiKey
        const resp = await axios({
            method: 'POST',
            url: "https://api.random.org/json-rpc/2/invoke", 
            data: JSON.stringify({
                jsonrpc: "2.0",
                method: method,
                params: params,
                id: 1
            }), 
            headers: {'Content-Type': 'application/json; charset=utf-8'}
        })
        return resp.data.result.random
    }

    generateIntegers(n, min, max, replacement = true, base = 10) {
        return this.makeRequest("generateIntegers", {
            n: n,
            min: min,
            max: max,
            replacement: replacement,
            base: base
        })
    }

    generateIntegerSequences(n, length, min, max, replacement = true, base = 10) {
        return this.makeRequest("generateIntegerSequences", {
            n: n,
            length: length, 
            min: min,
            max: max,
            replacement: replacement,
            base: base
        })
    }
}


const rnd = new randomOrg(process.env.API_KEY);

rnd.generateIntegers(3, 1, 2).then(res => console.log(res))
