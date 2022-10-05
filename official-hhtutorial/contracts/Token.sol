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


}