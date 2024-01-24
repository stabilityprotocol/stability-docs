---
sidebar_position: 2
---

# Running a Node using the binary

To run a Stability node, run the following command:
```
./target/release/stability --chain testnet
```

Additionally, you can configure the following flags:

- ``--validator``: Assumes that you are a validator and begins validation if you are on the validators' list.
- ``--pruning archive``: Runs your node in archival mode. An archival node maintains a complete copy and allows queries on any historical chain state.
- ``--unsafe-rpc-external --rpc-cors all --unsafe-ws-external``: Use if your node will be accessed from a system external to your localhost.
- ``--bootnodes``: A list of p2p nodes for Stability to join the network. What is known as bootnodes
- ``--base-path``: Specifies a custom base path for the data folder  
  
## Running a Full Node using the binary: 
```
./target/release/stability --base-path /tmp/node --unsafe-rpc-external --rpc-cors all --unsafe-ws-external --prometheus-external --chain=./chain-specs/testnet.json --zero-gas-tx-pool="https://OPTIONAL.com"
```  
  
## Running a Full Archival Node using the binary:
```
./target/release/stability --base-path /tmp/node --unsafe-rpc-external --rpc-cors all --unsafe-ws-external --prometheus-external --chain=./chain-specs/testnet.json --zero-gas-tx-pool="https://OPTIONAL.com" --pruning archive
```  
  
## Running a Validator Full Node using the binary: 
```
./target/release/stability --base-path /tmp/node --validator --unsafe-rpc-external --rpc-cors all --unsafe-ws-external --prometheus-external --chain=./chain-specs/testnet.json --zero-gas-tx-pool="https://OPTIONAL.com"
```  
  
## Running a Validator Archival Node using the binary:
```
./target/release/stability --base-path /tmp/node --validator --unsafe-rpc-external --rpc-cors all --unsafe-ws-external --prometheus-external --chain=./chain-specs/testnet.json --zero-gas-tx-pool="https://OPTIONAL.com" --pruning archive
```
