---
title: Connect
---

# Connect

Integrating with the Stability Protocol chain involves connecting through MetaMask, a popular Ethereum wallet and gateway to blockchain apps, followed by advanced interactions using Ethers.js. This comprehensive guide walks you through the process of connecting to the Stability Protocol network using these tools, facilitating everything from simple transactions to complex smart contract interactions.

## MetaMask Configuration

MetaMask allows users to interact with the Ethereum blockchain easily. Here's how to set it up for the Stability Protocol chain:

### 1. Installing MetaMask

If you haven't already, install MetaMask for your browser from the [official MetaMask website](https://metamask.io/).

### 2. Adding Stability Protocol Network

After installation, you need to add the Stability Protocol network to MetaMask:

- Open MetaMask and go to Settings > Networks > Add Network.
- Enter the following details:

  - **Mainnet Configuration:**

    - Network Name: Stability Protocol Mainnet
    - New RPC URL: `https://free.stabilityprotocol.com`
    - Chain ID: 101010
    - Currency Symbol: FREE
    - Block Explorer URL: WIP

  - **Testnet Configuration:**
    - Network Name: Stability Protocol Testnet
    - New RPC URL: `https://free.testnet.stabilityprotocol.com`
    - Chain ID: 20180427
    - Currency Symbol: FREE
    - Block Explorer URL: WIP

Now you're connected to the Stability Protocol network through MetaMask and ready to make transactions or interact with smart contracts.

## Ethers.js Integration

Ethers.js is a concise and powerful library for interacting with the Ethereum blockchain and smart contracts.

### Connecting to Stability Protocol

With MetaMask configured, you can use Ethers.js to interact with the Stability Protocol network programmatically.

#### Example Code Snippet:

```javascript
const { ethers } = require("ethers");

// Using MetaMask as the provider for Ethers.js
const provider = new ethers.providers.Web3Provider(window.ethereum);

// Prompt user for account connections
await provider.send("eth_requestAccounts", []);
const signer = provider.getSigner();

// Now you can use 'signer' for transactions or smart contract interactions
```

## Requirements for Transactions

**Mainnet Transactions:** For executing transactions on the Stability Protocol mainnet, users are required to obtain an API key. This key enables authenticated access to the network, ensuring secure and authorized transaction execution. The API key creation process is straightforward and can be initiated through our Dashboard, designed to guide users through the necessary steps.

**Testnet Transactions:** While the testnet is generally more accessible and does not require an API key for basic interactions, certain actions may still necessitate authentication. This approach allows developers to test their applications in a controlled environment, closely simulating mainnet conditions with fewer constraints.

For further details on the API key creation process and other requirements, refer to the [Transactions](./using_stability/transactions.md) section.
