const web3 = new Web3(window.ethereum);

// Request account access if needed
window.ethereum.enable().then(function(accounts) {
  // Set the current account
  web3.eth.defaultAccount = accounts[0];

  // Use web3.js to interact with the Ethereum network
  web3.eth.getBalance(accounts[0], function(error, balance) {
    if (!error) {
      console.log("Account balance: " + web3.utils.fromWei(balance, "ether") + " ETH");
    }
  });
});
