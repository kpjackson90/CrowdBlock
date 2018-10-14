import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  //we are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  //We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider( //Create custom provider
    "https://rinkeby.infura.io/v3/cc66e894bbb34a4abe846f95bd745cc2"
  );
  web3 = new Web3(provider);
}

export default web3;
