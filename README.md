# Random.org nodejs api file
**!! Requires [axios](https://github.com/axios/axios "axios") !!** 
**!! Before using it read random.org [docs](https://api.random.org/json-rpc/2 "docs") !!**

#### Usage

##### Initialization 
`const rnd = new randomOrg(*Your API KEY*)`
##### Authentication
`rnd.setAuth(*Your login*, *Your password*)`

##### Example
`rnd.generateIntegers(1, 2, 3).then(res => console.log(res)).catch(err => console.log(err))`

##### Functions
###### Basic
- generateIntegers(n, min, max, replacement = true, base = 10)
- generateIntegerSequences(n, length, min, max, replacement = true, base = 10)
- generateDecimalFractions(n, decimalPlaces, replacement = true)
- generateGaussians(n, mean, standardDeviation, significantDigits)
- generateStrings(n, length, characters, replacement = true)
- generateUUIDs(n)
- generateBlobs(n, size, format = "base64")
- getResult(serialNumber)
- verifySignature(random, signature)

###### Signed
- generateSignedIntegers(n, min, max, userData = null, replacement = true, base = 10)
- generateSignedIntegerSequences(n, length, min, max, userData = null, replacement = true, base = 10)
- generateSignedDecimalFractions(n, decimalPlaces, userData = null, replacement = true)
- generateSignedGaussians(n, mean, standardDeviation, significantDigits, userData = null)
- generateSignedStrings(n, length, characters, userData = null, replacement = true)
- generateSignedUUIDs(n, userData = null)
- generateSignedBlobs(n, size, userData = null, format = "base64")
- getResult(serialNumber)
- verifySignature(random, signature)

###### Delegation
- addDelegation(serviceId, delegateId, notifyDelegate = true) **Requires Authentication**
- removeDelegation(delegationKey, notifyDelegate = true) **Requires Authentication**
- listDelegations() **Requires Authentication**
- setNotificationHandler(handlerUrl, handlerSecret) **Requires Authentication**
- delegationNotification(serviceId, delegatorId, delegateId, delegationKey, handlerSecret)

###### Draw service
- holdDraw(title, recordType, entries, entriesDigest, winnerCount, entryType = "opaque", identicalEntriesPermitted = false, winnerStart = 1, winnerHandling = "remove", showEntries = true, showWinners = true, delegationKey = null) **Requires Authentication**
- getDraw(drawId, maxEntries = 3000000, delegationKey = null) **Requires Authentication**
- listDraws(delegationKey = null) **Requires Authentication**

###### Giveaway system
- beginGiveaway(description, entries, entriesDigest, rounds, delegationKey = null) **Requires Authentication**
- continueGiveaway(giveawayKey, delegationKey = null) **Requires Authentication**
- getGiveaway(giveawayKey)
- listGiveaways(delegationKey = null) **Requires Authentication**
