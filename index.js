const Web3 = require("web3");

// const customProvider = {
//   sendAync: (payload, cb) => {
//     console.log("you called");
//     console.log(payload);
//     cb(undefined, 100);
//   },
// };

const provider = new Web3.providers.HttpProvider("http://localhost:8545");
// const web3 = new Web3(customProvider);

web3.eth.getBlockNumber().then(() => console.log("done!"));
