// all examples are portray using es6;

import algosdk from  'algosdk'; //importing algosdk
import inquirer from 'inquirer'; // importing inquirer

// open a purestaker api and get a unique API KEY
const server = "https://testnet-algorand.api.purestake.io/ps2";
const port = "";
const token = {
  "X-API-Key": "" //your API key gotten from purestake API, 
};
const algodClient = new algosdk.Algodv2(token, server, port);

// create a testnet account with myalgowallet, keep the mmemonic key;
const mnemonic = 'YOUR MNEMONIC HERE'; //the mmemonic 25 characters seperated by a whitespace should be imported here

// get account from mmemonic key;
const recoveredAccount = algosdk.mnemonicToSecretKey(mnemonic); 

