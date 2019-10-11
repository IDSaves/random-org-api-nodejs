const axios = require('axios')
require('dotenv').config()

class randomOrg {

    constructor(key) {
        this.apiKey = key
        this.echo = () => console.log(this.apiKey)
        this.getUsage = () => this.makeRequest("getUsage")
    }


    async makeRequest(method, params = {}) {
        params.apiKey = this.apiKey
        const resp = await axios({
            method: 'POST',
            url: "https://api.random.org/json-rpc/2/invoke",
            data: JSON.stringify({
                jsonrpc: "2.0",
                method,
                params,
                id: 1
            }),
            headers: {'Content-Type': 'application/json; charset=utf-8'}
        })
        return resp.data
    }

    generateIntegers(n, min, max, replacement = true, base = 10) {
        if (min >= max) {
          return Promise.reject(new Error("Min must be less than max!"))
        }
        else
          return this.makeRequest("generateIntegers", {
              n,
              min,
              max,
              replacement,
              base
          })
    }

    generateIntegerSequences(n, length, min, max, replacement = true, base = 10) {
        if (min >= max) {
          return Promise.reject(new Error("Min must be less than max!"))
        }
        else
          return this.makeRequest("generateIntegerSequences", {
              n,
              length,
              min,
              max,
              replacement,
              base
          })
    }

    generateDecimalFractions(n, decimalPlaces, replacement = true) {
        return this.makeRequest("generateDecimalFractions", {
          n,
          decimalPlaces,
          replacement
        })
    }

    generateGaussians(n, mean, standardDeviation, significantDigits) {
        return this.makeRequest("generateGaussians", {
            n,
            mean,
            standardDeviation,
            significantDigits
        })
    }

    generateStrings(n, length, characters, replacement = true) {
        return this.makeRequest("generateStrings", {
            n,
            length,
            characters,
            replacement
        })
    }

    generateUUIDs(n) {
        return this.makeRequest("generateUUIDs", {
            n
        })
    }

    generateBlobs(n, size, format = "base64") {
        return this.makeRequest("generateBlobs", {
            n,
            size,
            format
        })
    }
}


const rnd = new randomOrg(process.env.API_KEY)

rnd.getUsage().then(res => console.log(res.result)).catch(err => console.log(err))
