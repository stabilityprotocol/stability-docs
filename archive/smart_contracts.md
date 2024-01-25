---
sidebar_position: 5
---

# Smart Contracts
_Introduction to smart contracts_  
## What is a smart contract?
A smart contract is a self-executing program stored on a blockchain that runs when defined conditions are met, essentially automating agreements. Stability currently supports smart contracts written in > Solidity 0.8.20 and < Paris/The Merge Upgrade, development is currently in progress to support the Shanghai Fork. Solidity is a high-level programming language that is statically typed and contract-oriented, and is used to implement smart contracts. You can find more information regarding installation **[here](https://docs.soliditylang.org/en/latest/installing-solidity.html#)**.  

The structure of a smart contract is very similar to classes in object-oriented-programming (OOP), as they contain persistent data in state variables and have functions that can modify these variables. The only way for a smart contract to run/execute is for its defined conditions to have been met.  

#

## Helpful Resources
### Learning/Practicing Solidity
- **[Crypto Zombies](https://cryptozombies.io/)**
- **[Ethernaut](https:://ethernaut.openzeppelin.com/)**
- **[0xMonaco](http://0xmonaco.ctf.paradigm.xyz/)**
- **[Chainshot](https:://chainshot.com)**

# 

### Javascript Libraries
- **[web3.js](https://web3js.readthedocs.io)**
- **[etherjs](https://docs.ethers.io)**

#

### Development & Testing Frameworks
- **[OpenZeppelin](https://docs.openzeppelin.com/)**
- **[Truffle](https://trufflesuite.com/)**
- **[Hardhat](https://hardhat.org/docs)**
- **[Brownie for Python](https://eth-brownie.readthedocs.io/en/stable/)**
- **[Waffle for Typescript](https://ethereum-waffle.readthedocs.io/en/latest/)**

#

### Contract Structure
Contracts can contain declarations as well as inheritances from other contracts. Examples of components that can be declared include State Variables, Functions, Function Modifiers, Events, Errors, Struct Types, and Enum Types. Additional information about component usage can be found **[here](https://docs.soliditylang.org/en/latest/structure-of-a-contract.html)**.

#

### Solidity Source File
A Solidity Source File is comprised of directives and definitions. Directives may include contract definitions, import, pragma, and using for. Definitions may include struct, enum, function, error, and constant variable.  

#

#### SPDX License Identifier
The first line should include a comment indicating its SPDX License Identifier if it is open source, such as:    
```
// SPDX-License-Identifier: MIT
```

 If it’s not open source you should specify it as:  
```
// UNLICENSED
```
_Additional information about SPDX license identifiers can be found **[here](https://spdx.org/ids-how)**._

#

#### Pragmas
_Pragma_ is used to enable compiler features or checks and is local to a source file, so it must be mentioned in each file of a project if you want something used in your entire project.  

_Version Pragma_ is specified so that compilation gets rejected if compiler versions are incompatible, in this case you will want to specify:
```
pragma solidity 0.8.3
```

_ABI Coder Pragma_ is used to specify between v1 and v2 implementations of the ABI encoder and decoder. As of Solidity 0.6.0, v2 is enabled by default however you can still select v1 if preferred.  

_Experimental Pragma_ is used to enable features of the compiler or programming language that are not enabled by default, such as SMTChecker.  

#

#### Importing Source Files
Solidity supports import statements to modularize code bases. Below are examples of how you can reference/import another file:  
```
import * as symbolA from “filename”;
or
import “filename” as symbolA;
```  

In this example, symbolName is the global symbol, you can name your global symbols anything that you want, like symbol1 etc. Additionally, if there is a naming conflict/collision you can rename an alias and assign a new alias to a new file in the same command, such as:
```
import {symbolA as symbol1, symbolB} from “filename”;
```  

_Additional information about the Style Guide can be found **[here](https://docs.soliditylang.org/en/latest/style-guide.html#style-guide)**._

#

### Testing
After you write a Smart Contract an integral next step is testing your smart contract. You can create unit tests for each method in your smart contract and you can create end-to-end tests by deploying in Testnet before deploying in Mainnet. It is highly recommended to do both to ensure the code does what you intended it to do and doesn’t have any overlooked vulnerabilities.
