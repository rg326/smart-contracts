// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract Token {
    // Some string type variables to identify the token.
    string public name = "My Hardhat Token";
    string public symbol = "MHT";

    // The fixed amount of tokens available, stored in an unsigned integer variable.
    uint256 public totalSupply = 1000000;

    //An address variable that stores ethereum account address.
    address public owner; //owner is the standard convention variable

    // A mapping is a key/value map/pair. Here, we store each account's balance.
    mapping(address => uint256) balances;

    // The Transfer event helps off-chain applications understand what happens within your contract. 
    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    /**
     * Read only function to retrieve the token balance of a given account.
     * 
     * The 'view' modifier indicates that it doesn't modify the contract's state, which allows us to call it without executing a transaction.
     */

    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }


}