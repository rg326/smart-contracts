const {expect} = require('chai');
const ethers = require('ethers');

describe('Token contract',()=>{
    it('Deployment should assign the total supply of tokens to the owner', async () => {
    //MUST use async/await for all transactions done on the blockchain

        //A Signer in ethers.js is an object that represents an Ethereum account. It's used to send transactions to contracts and other accounts. Here we're getting a list of the accounts in the node we're connected to, which in this case is Hardhat Network, and we're only keeping the first one.
        const [owner] = await ethers.getSigners();

        //A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts, so Token here is a factory for instances of our token contract.
        const Token = await ethers.getContractFactory('Token');

        //Calling deploy() on a ContractFactory will start the deployment, and return a Promise that resolves to a Contract. This is the object that has a method for each of your smart contract functions.
        const hardhatToken = await Token.deploy();

        //Once the contract is deployed, we can call our contract methods on hardhatToken. Here we get the balance of the owner account by calling the contract's balanceOf() method.
        //Recall that the account that deploys the token gets its entire supply. By default, ContractFactory and Contract instances are connected to the first signer. This means that the account in the owner variable executed the deployment, and balanceOf() should return the entire supply amount.
        const ownerBalance = await hardhatToken.balanceOf(owner.address);
        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    })
})

//FINAL NOTES
// Here we're again using our Contract instance to call a smart contract function in our Solidity code. totalSupply() returns the token's supply amount and we're checking that it's equal to ownerBalance, as it should be.
// To do this we're using Chai which is a popular JavaScript assertion library. These asserting functions are called "matchers", and the ones we're using here come from the @nomicfoundation/hardhat-chai-matchers plugin, which extends Chai with many matchers useful to test smart contracts.
// If you need to test your code by sending a transaction from an account (or Signer in ethers.js terminology) other than the default one, you can use the connect() method on your ethers.js Contract object to connect it to a different account, like this: