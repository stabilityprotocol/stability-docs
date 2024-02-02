---
sidebar_position: 1
---

# Deploy Contract Using Hardhat on the Stability Network

## 1. Introduction

### Tutorial Objective

This tutorial teaches how to deploy an ERC20 Smart Contract on the Stabilityprotocol blockchain using Hardhat and TypeScript.

### Prerequisites

- Basic knowledge of programming, blockchain, and TypeScript.
- Node.js and NPM installed on your system.
- An Api Key with available transactions. For this, you can check the section [TRANSACTIONS](./../users/using_stability/transactions.md)
- A text editor or IDE for development.

### More Information

The complete code of this tutorial can be found at this [link](https://github.com/stabilityprotocol/tutorials/tree/main/deploy-using-hardhat)

## 2. Setting Up the Development Environment

### Installation of Node.js and NPM

Make sure you have Node.js and NPM. You can download them from [Node.js](https://nodejs.org/).

## 3. Creation and Configuration of the ERC20 Project

### Initializing the Project with Hardhat

Create a new directory for your project and navigate to it in your terminal. Run the following commands to start your hardhat project and install some dependencies:

```bash
npm init --y
npm install --save-dev hardhat typescript ts-node @nomiclabs/hardhat-ethers ethers @nomicfoundation/hardhat-toolbox hardhat-dependency-compiler
npx hardhat init
```

Select “Create a TypeScript project” when prompted.

When creating the project in hardhat, it will be created with 1 example contract called `Lock.sol`, delete it and also delete its test file.

### Creating the ERC20 Smart Contract in TypeScript

In the contracts directory, create a new file called MyERC20.sol. Then install the dependencies for this contract:

```
npm install @openzeppelin/contracts
```

and paste the following code:

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyERC20 is ERC20 {
    constructor(uint256 initialSupply) ERC20("MyToken", "MTK") {
        _mint(msg.sender, initialSupply);
    }
}
```

## 4. Deployment of the Smart Contract on Stabilityprotocol

### Configuration of the hardhat.config.ts File

Edit `hardhat.config.ts` to include the Stabilityprotocol network. Replace `YOUR_STABILITY_RPC_URL` with the provided RPC URL and `YOUR_PRIVATE_KEY` with your private key (ensure not to share your private key with anyone):

```ts
import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    stabilityprotocol: {
      url: "YOUR_STABILITY_RPC_URL",
      accounts: ["YOUR_PRIVATE_KEY"],
    },
  },
};

export default config;
```

### Compiling and Deploying the Contract

Compile the contract:

```bash
npx hardhat compile
```

Create a deployment script in the scripts directory. For example, deploy.ts:

```ts
import { ethers } from "hardhat";

async function main() {
  const MyERC20 = await ethers.getContractFactory("MyERC20");
  const myERC20 = await MyERC20.deploy("1000000", {
    maxFeePerGas: 0,
  });

  await myERC20.deployed();

  console.log("MyERC20 deployed to:", myERC20.address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
```

Deploy with:

```bash
npx hardhat run scripts/deploy.ts --network stabilityprotocol
```

After executing this command, the command console will return a message like this:

```
MyERC20 deployed to: 0x......
```

This message means that the contract has been successfully deployed.

If you now take that address and search for it in the Stability block explorer, you will see something similar to this:

![Contract deployed image](contract_deployed_image.png)

### Conclusion

Deploying a contract on the Stability network using Hardhat is very simple, as despite having zero gas transactions, the network maintains EVM compatibility, which allows using all existing tools in the EVM ecosystem to expedite the development of applications.
