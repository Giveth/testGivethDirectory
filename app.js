const Web3 = require("web3");
// create an instance of web3 using the HTTP provider.
// NOTE in mist web3 is already available, so check first if its available before instantiating
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));


const GivethDirectory = require("givethdirectory");

const gd = new GivethDirectory(web3, '0x30e1a463ecf25dbba2f83cb3e4b10045f888e55b');

let currentStatus = {};

function readFromBlockchain() {
    gd.getState(function(err, st) {
        if (!err) {
            currentStatus = st;
            console.log(JSON.stringify(st, null, 2));
        }
        setTimeout(readFromBlockchain, 1000);
    });
}

readFromBlockchain();




