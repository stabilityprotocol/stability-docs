---
sidebar_position: 8
---
# Nodes
Node Types, Node Keys, and Running Nodes

Nodes are network stakeholders that run the protocol software responsible for maintaining a distributed ledger and serves as a communication hub.

![Flow](../../static/img/blockchain_flow.png)  


## Node Types

There are two main node types on the Stability blockchain, below you will find details about each:

**Full Nodes (FNs)** contain the last 256 blocks, has read only access to data

**Validator Nodes (VNs)** contain the last 256 blocks, run distributed consensus to execute and store transactions on the blockchain and communicate directly with other nodes, and are used to state sync with other nodes

**Archive Nodes (ANs)** contain all blocks, beginning from the first block in the blockchains history, and are used to state sync with other nodes

## Node Keys
Stability nodes use 2 keys to operate:
- ECDSA for Aura (Stability's consensus mechanism)
- ED25519 for Grandpa (Stability's finality mechanism)

We recommend generating a single SEED for these keys, using it to produce the necessary keys.

_To launch a node please visit the **[Builder](../builders/)** guides_

## Hardware Requirements

The most common way to run a validator is on a cloud server, such as AWS or GCP, running Linux, such as Ubuntu 22.04.

### CPU
- x86-64 compatible
- Intel Ice Lake, or newer (Xeon or Core series); AMD Zen3, or newer (EPYC or Ryzen)
- 4 physical cores @ 3.4GHz
- Simultaneous multithreading disabled (Hyper-Threading on Intel, SMT on AMD)
- Recommend single-threaded performance over higher cores count. A comparison of single-threaded performance can be found here.
  
### Storage
- NVMe SSD of 1 TB

### Memory
- 32 GB DDR4 ECC

### System
- Linux Kernel 5.16 or newer

### Network
- minimum symmetric networking speed set to 500 Mbit/s (= 62.5 MB/s)
