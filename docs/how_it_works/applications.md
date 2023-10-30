---
sidebar_position: 5
toc_max_heading_level: 5
---

# Applications
Stability applications operate on a decentralized peer-to-peer network and use a smart contract as its backend. The frontend can be written in any programming language to make calls to its backend.

## Features

_Stability Apps:_
- **trustless**: no one person or group needs to be in control as smart contracts are guaranteed to execute in a predictable manner 
- **decentralized**: no one person or group can have control, deterring censorship
- **permissionless**: anyone is free to access and use the application
- **transparent**: data stored on the network is publically available and immutable, providing data integrity
- **zero-downtime**: the entire network of nodes supports serving up your apps capabilities

vs.

_Traditional Apps:_
- **centralized**: one person or group monitors and controls the application and associated data, can be independently targeted by malicious actors
- **unverifiable**: nothing is verifiable, data is selectively presented by persons or groups controlling the application
- **permissioned**: access and use is restricted per the discretion of central owners
- **single point-of-failure**: commonly deployed on a single server and software can go down very easily

## App Components
- **Stability Network**: distributed peer-to-peer network with distributed ledger technology to operate on and serve as a database
- **Backend**: smart contract to define app functionality and serve as the backend
- **Frontend**: user interface that connects to the smart contract
- **Stability Wallet**: user authentication through SSO, Emailed OTP, and various web3 wallet providers like Metamask

### What is a smart contract?
A smart contract is a self-executing program stored on a blockchain that runs when defined conditions are met, essentially automating agreements. Stability currently supports smart contracts written in > Solidity 0.8.20 and < Paris/The Merge Upgrade, development is currently in progress to support the Shanghai Fork. Solidity is a high-level programming language that is statically typed and contract-oriented, and is used to implement smart contracts. You can find more information regarding installation **[here](https://docs.soliditylang.org/en/latest/installing-solidity.html#)**.  

The structure of a smart contract is very similar to classes in object-oriented-programming (OOP), as they contain persistent data in state variables and have functions that can modify these variables. The only way for a smart contract to run/execute is for its defined conditions to have been met.

## Development Process
1. **Define** the desired purpose and functionality of your app 
2. **Set up** your development environment (i.e. using git, vscode, npm, Node.js, Solidity, and Truffle)  
3. **Write** your smart contracts (i.e. using Solidity and Truffle)  
4. **Test** your smart contracts (i.e. using Truffle)  
5. **Choose** a frontend framework to build the UI/UX (i.e. using React)  
6. **Connect** frontend and backend (i.e. using ethers.js)  
7. **Design** and **develop** the UI/UX  
8. **Integrate** user authentication through SSO, Emailed OTP, or web3 native wallet providers like Metamask
9. **Test** the application on Stability Testnet (synonymous with a DEV environment) 
10. **Audit** your smart contract with a 3rd party (i.e. SlowMist or Zellic)  
11. **Deploy** to Stability Mainnet (synonymous with a PROD environment)
12. **Monitor** and **maintain** the application 
13. **Improve** the application with new features
14. **List** your application on the **[Stability App Marketplace](../resources/marketplace.md)**
14. **Promote** your app to your specified target market

## Helpful Resources
### Learning Solidity
- _[Solidity Documentation](https://docs.soliditylang.org/en/v0.8.21)_
    - _[Style Guide](https://docs.soliditylang.org/en/v0.8.21/style-guide.html)_
    - _[Common Patterns](https://docs.soliditylang.org/en/v0.8.21/common-patterns.html)_
    - _[Editor Integrations](https://docs.soliditylang.org/en/v0.8.21/resources.html#editor-integrations)_
    - _[IDE](https://remix.ethereum.org/)_
    - _[Examples](https://solidity-by-example.org/)_

### Practicing Solidity
- _[Crypto Zombies](https://cryptozombies.io/)_
- _[Ethernaut](https:://ethernaut.openzeppelin.com/)_
- _[0xMonaco](http://0xmonaco.ctf.paradigm.xyz/)_
- _[Chainshot](https:://chainshot.com)_

### Javascript Libraries
- _[etherjs](https://docs.ethers.io)_

### Development & Testing Frameworks
- _[OpenZeppelin](https://docs.openzeppelin.com/)_
- _[Truffle](https://trufflesuite.com/)_
- _[Hardhat](https://hardhat.org/docs)_
