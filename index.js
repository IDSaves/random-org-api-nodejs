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

    //
    generateIntegers(n, min, max, replacement = true, base = 10) {
        if (min >= max)
          return Promise.reject(new Error("Min must be less than max."))
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
        if (min >= max)
            return Promise.reject(new Error("Min must be less than max."))
        else if (n < 1 || n > 1000)
            return Promise.reject(new Error("N must be within the [1, 1000] range."))
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
        if (n < 1 || n > 10000)
            return Promise.reject(new Error("N must be within the [1, 10000] range."))
        else if (decimalPlaces < 1 || decimalPlaces > 14)
            return Promise.reject(new Error("Decimal Places must be within the [1, 14] range."))
        else
            return this.makeRequest("generateDecimalFractions", {
                n,
                decimalPlaces,
                replacement
            })
    }

    generateGaussians(n, mean, standardDeviation, significantDigits) {
        if (n < 1 || n > 10000)
            return Promise.reject(new Error("N must be within the [1, 10000] range."))
        else if (mean < -1000000 || mean > 1000000)
            return Promise.reject(new Error("Mean must be within the [-1000000, 1000000] range."))
        else if (standardDeviation < -1000000 || standardDeviation > 1000000)
            return Promise.reject(new Error("Standard Deviation must be within the [-1000000, 1000000] range."))
        else if (significantDigits < 2 || significantDigits > 14)
            return Promise.reject(new Error("Significant Digits must be within the [2, 14] range."))
        else
            return this.makeRequest("generateGaussians", {
                n,
                mean,
                standardDeviation,
                significantDigits
            })
    }

    generateStrings(n, length, characters, replacement = true) {
        if (n < 1 || n > 10000)
            return Promise.reject(new Error("N must be within the [1, 10000] range."))
        else if (length < 1 || length > 10000)
            return Promise.reject(new Error("Length must be within the [1, 10000] range."))
        else if (characters.length > 128) {
            return Promise.reject(new Error("The maximum number of characters is 128."))
        }
        else
            return this.makeRequest("generateStrings", {
                n,
                length,
                characters,
                replacement
            })
    }

    generateUUIDs(n) {
        if (n < 1 || n > 1000)
            return Promise.reject(new Error("N must be within the [1, 1000] range."))
        else
            return this.makeRequest("generateUUIDs", {
                n
            })
    }

    generateBlobs(n, size, format = "base64") {
        if (n < 1 || n > 100)
            return Promise.reject(new Error("N must be within the [1, 100] range."))
        return this.makeRequest("generateBlobs", {
            n,
            size,
            format
        })
    }

    // Signed
    generateSignedIntegers(n, min, max, replacement = true, base = 10, userData = null) {
        if (min >= max) {
        return Promise.reject(new Error("Min must be less than max!"))
        }
        else
        return this.makeRequest("generateSignedIntegers", {
            n,
            min,
            max,
            replacement,
            base,
            userData
        })
    }

    generateSignedIntegerSequences(n, length, min, max, replacement = true, base = 10, userData = null) {
        if (min >= max)
            return Promise.reject(new Error("Min must be less than max."))
        else if (n < 1 || n > 1000)
            return Promise.reject(new Error("N must be within the [1, 1000] range."))
        else
            return this.makeRequest("generateSignedIntegerSequences", {
                n,
                length,
                min,
                max,
                replacement,
                base,
                userData
            })
    }

    generateSignedDecimalFractions(n, decimalPlaces, replacement = true, userData = null) {
        if (n < 1 || n > 10000)
            return Promise.reject(new Error("N must be within the [1, 10000] range."))
        else if (decimalPlaces < 1 || decimalPlaces > 14)
            return Promise.reject(new Error("Decimal Places must be within the [1, 14] range."))
        else
            return this.makeRequest("generateSignedDecimalFractions", {
                n,
                decimalPlaces,
                replacement,
                userData
            })
    }

    generateSignedGaussians(n, mean, standardDeviation, significantDigits, userData = null) {
        if (n < 1 || n > 10000)
            return Promise.reject(new Error("N must be within the [1, 10000] range."))
        else if (mean < -1000000 || mean > 1000000)
            return Promise.reject(new Error("Mean must be within the [-1000000, 1000000] range."))
        else if (standardDeviation < -1000000 || standardDeviation > 1000000)
            return Promise.reject(new Error("Standard Deviation must be within the [-1000000, 1000000] range."))
        else if (significantDigits < 2 || significantDigits > 14)
            return Promise.reject(new Error("Significant Digits must be within the [2, 14] range."))
        else
            return this.makeRequest("generateSignedGaussians", {
                n,
                mean,
                standardDeviation,
                significantDigits,
                userData
            })
    }

    generateSignedStrings(n, length, characters, replacement = true, userData = null) {
        if (n < 1 || n > 10000)
            return Promise.reject(new Error("N must be within the [1, 10000] range."))
        else if (length < 1 || length > 10000)
            return Promise.reject(new Error("Length must be within the [1, 10000] range."))
        else if (characters.length > 128) {
            return Promise.reject(new Error("The maximum number of characters is 128."))
        }
        else
            return this.makeRequest("generateSignedStrings", {
                n,
                length,
                characters,
                replacement,
                userData
            })
    }

    generateSignedUUIDs(n, userData = null) {
        if (n < 1 || n > 1000)
            return Promise.reject(new Error("N must be within the [1, 1000] range."))
        else
            return this.makeRequest("generateSignedUUIDs", {
                n,
                userData
            })
    }

    generateSignedBlobs(n, size, format = "base64", userData = null) {
        if (n < 1 || n > 100)
            return Promise.reject(new Error("N must be within the [1, 100] range."))
        return this.makeRequest("generateSignedBlobs", {
            n,
            size,
            format,
            userData
        })
    }

    getResult(serialNumber) {
        return this.makeRequest("getResult", {
            serialNumber
        })
    }

    verifySignature(random, signature) {
        return this.makeRequest("verifySignature", {
            random,
            signature
        })
    }

}


const rnd = new randomOrg(process.env.API_KEY)

rnd.getUsage().then(res => console.log(res.result)).catch(err => console.log(err))
