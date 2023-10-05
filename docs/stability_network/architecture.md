---
sidebar_position: 1
---

# Architecture

Stability is written in the Rust programming language using the [Substrate](https://github.com/paritytech/polkadot-sdk/tree/master/substrate) v0.9.36 blockchain framework and the [Frontier](https://github.com/paritytech/frontier) suite runtime module. Substrate is an open source Software Development Kit (SDK) created by the Polkadot ecosystem that enables modular and flexible chain development using open protocols to streamline interoperability, such as [jsonRPC](https://www.jsonrpc.org/specification) and [libp2p](https://docs.libp2p.io/concepts/introduction/overview/). The SDK provides a library of configurable modules and templates using the [FRAME](https://docs.substrate.io/reference/frame-pallets/) development environment to create a custom Substrate runtime. FRAME is composed of three core components: modules, macros, and libraries. These modules are also referred to as pallets and provide core functionality for chain runtime, such as enabling smart contract execution. [Frontier](https://github.com/paritytech/frontier/) is an Ethereum compatibility layer built for the Substrate SDK that enables the execution of unmodified EVM code using [SputnikVM](https://github.com/rust-blockchain/evm) as its EVM engine, producing nearly identical results to Ethereum Mainnet.

The Stability Substrate runtime uses the following pallets:

_Consensus_
Aura: Slot-based round-robin scheduled block creation by a known set of authorities/validator nodes
GRANDPA: Deterministic finality algorithm that uses the longest chain rule requiring a known weighted authority/validator node set, and works in combination with a block production mechanism

_Frontier_
pallet-evm: Executes Ethereum contract bytecode for smart contracts that are written in Solidity and are then compiled to EVM bytecode, the core responsibility of the EVM
pallet-ethereum: Stores Ethereum formatted blocks, transaction receipts, and transaction statuses

_Substrate_
session: Enables session key, length, and rotation management
timestamp: Enables getting and setting the on-chain time
collective: Enables a set of account IDs to make collective feelings known through dispatched calls from specialized origins

_Moonbeam_
precompile-utils: Allows users to read data directly off of the Ethereum JSON-RPC, eliminating the need to use an additional library

_Custom_
custom-balances: Replaces Substrate-style accounts and keys with Ethereum-style accounts and keys so that you can use Ethereum libraries and development environments
im-online: Enables signed heartbeat transactions to signal if nodes are online in the current era, and resets with each new era
balances: Enables account and balance handling
pallet-dynamic-fee: Simulates the functionality of Ethereum dynamic fee adjustment


For more information about pallets you can reference the substrate_node API documentation [here](https://paritytech.github.io/polkadot-sdk/master/substrate_node/index.html).
