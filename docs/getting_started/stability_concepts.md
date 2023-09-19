---
sidebar_position: 2
---

# Stability Concepts

## Zero Gas Transactions (ZGT)

_Zero Gas Transactions (ZGT)_ empower validators to process transactions integrated into the blockchain at zero cost. These transactions are not part of the public mempool. Instead, they are added to the validator mempool via an external service, which is responsible for implementing the necessary filters or rules to validate the transactions.

## Business Share Revenue (BSR)

_Business Share Revenue_ allows for the option of having transaction fees be split between validators and dApps, providing a financial incentive for developers to build and maintain applications on Stability Chain.

## Federated Oracles

_Federated Oracles_ enable validators to not only secure the blockchain by signing blocks, but also contribute to the Oracle system by allowing for data from offline sources to be stored on-chain. It is accomplished by leveraging [Substrate’s Offchain Worker](https://docs.substrate.io/reference/how-to-guides/offchain-workers/) capability, where compute and time intensive tasks can be processed off-chain. Off-chain workers have read and write access to off-chain storage, while on-chain logic only has write access through off-chain indexing which allows for private linkage and storage of user or node-specific data, without requiring consensus over the whole network

## Verifiable Random Function (VRF)

_Verifiable Random Function_ (VRF) is a cryptographic tool that generates random output with a supporting proof from an input and a private key. This ensures trustless and verifiable randomness which safeguards against potential manipulation and predictability. It is accomplished by leveraging [Substrate’s Inherent Transactions](https://docs.substrate.io/learn/transaction-types/#inherent-transactions) capability, where block authors can insert random numbers into each block without sharing it with the other validators
