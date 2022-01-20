# Build a decentralized voting app with choice coin and javascript-algorand-sdk tutorial using NodeJs

## Requirements

* NPM and Node installed, download [HERE](https://phoenixnap.com/kb/install-node-js-npm-on-windows)
* A Purestake API key: [See Tutorial](https://developer.algorand.org/tutorials/getting-started-purestake-api-service/)
* Funded Testnet Accounts: [See Tutorial](https://developer.algorand.org/tutorials/create-account-testnet-javascript/)

## Run Application On Your Local Machine

* git clone the repository

```
  $ git clone https://github.com/Samuellyworld/Choice-Coin-JS-Tutorial.git
```
* go into the application directory

```
 $ cd Choice-Coin-JS-Tutorial
```
* install app dependencies
```
 $ npm install
```
* inside `index.js`, update the following 
```
const token = {
  "X-API-Key": "" //your API key gotten from purestake API, 
}

const mnemonic = ""; //the mmemonic 25 characters seperated by a whitespace should be imported here

const voting_address = '' //input a voting address wallet you can send choice to, make sure choice is opt-in to receive votes

```
* start the application 
```
$ node index.js
```
This can also been done with
```
$ npm start
```