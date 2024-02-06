---
sidebar_position: 8
---

# Nodes

Stability is a blockchain, and like every blockchain, it comprises a set of nodes. A node is a computer that runs Stability software and connects to one or more other Stability nodes. These nodes are synchronized with the Stability blockchain, meaning they receive new blocks and execute them to maintain the most recent state.

Nodes provide a RPC (Remote Procedure Call) API, allowing users to interact with the blockchain. This interaction includes querying fields in smart contracts, sending transactions, and more.

## Validator types

### Validator Nodes

Not all nodes serve the same purpose. Some, in addition to being connected and synced, function as validator nodes. Their role is to propose blocks periodically.

To propose a block, a validator node selects a set of transactions from the mempool and the zero gas transaction pool, executes them in a specific order, and forwards the result to the network.

#### Validator Keys

A validator node must sign the block it proposes. This is essential as it allows other validators to verify that the block was proposed by the designated validator. Validator nodes also sign finalized blocks, adhering to the GRANDPA (GHOST-based Recursive ANcestor Deriving Prefix Agreement) mechanism. Finalizing a block means that the node will not accept any new blocks prior to the finalized one.

### RPC Nodes

In the Stability blockchain, nodes that are not validators are termed RPC nodes. These nodes are synced and can be used to forward transactions to the blockchain and query data from it. However, they do not propose blocks. Anyone can deploy their own RPC Node and synchronize it with the blockchain.

## Network Connectivity

The nodes connect using a peer-to-peer (P2P) protocol, specifically through the libp2p framework. Libp2p is a collection of protocols, specifications, and libraries facilitating P2P communication among network participants, also known as peers.

P2P networks are decentralized, which means:

- They do not rely on a privileged set of servers that operate differently from their clients, as seen in the traditional client-server model.
- There is no central server or authority controlling the network, ensuring an egalitarian communication platform.
