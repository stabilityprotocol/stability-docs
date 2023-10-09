---
sidebar_position: 2
---
# Nodes

## Node Types

There are two main node types on the Stability blockchain, below you will find details about each:

**Validator Nodes (VNs)** contain the last 256 blocks, run distributed consensus to execute and store transactions on the blockchain and communicate directly with other nodes, and are used to state sync with other nodes

**Archive Nodes (ANs)** contain all blocks, beginning from the first block in the blockchains history, and are used to state sync with other nodes

## Node Keys
Stability nodes use 2 keys to operate:
- ECDSA for Aura (Stability's consensus mechanism)
- ED25519 for Grandpa (Stability's finality mechanism)

We recommend generating a single SEED for these keys, using it to produce the necessary keys.

### Key Generation
To generate a SEED, you can either use a reliable SEED generation service or the Stability node itself as it has a SEED generation mechanism built in. 

To use the built-in SEED generation mechanism, run the following command:
```
./target/release/stability key generate
```

### Key Insertion
To insert the keys into the node, use the followiing script:
```
   ## TO RUN THIS COMMAND YOU SHOULD DEFINE
   ## $SEED - Seed phrase from which Stability keys are derived
   ## $PATH - Path where you save your node data
  ./target/release/stability key insert  \
  --keystore-path  $PATH/chains/alphanet/keystore \
  --base-path $PATH \
  --scheme ecdsa \
  --suri "$SEED" \
  --key-type aura

  ./target/release/stability key insert \
  --keystore-path  $PATH/chains/alphanet/keystore \
  --base-path $PATH \
  --scheme Ed25519 \
  --suri "$SEED" \
  --key-type gran
```

## Running a Node
To run a Stability node, run the following command:
```
./target/release/stability --chain alphanet
```

Additionally, you can configure the following flags:

- ``--validator``: Assumes that you are a validator and begins validation if you are on the validators' list.
- ``--pruning archive``: Runs your node in archival mode. An archival node maintains a complete copy and allows queries on any historical chain state.
- ``--unsafe-rpc-external --rpc-cors all --unsafe-ws-external``: Use if your node will be accessed from a system external to your localhost.
- ``--bootnodes``: A list of p2p nodes for Stability to join the network. What is known as bootnodes
- ``--base-path``: Specifies a custom base path for the data folder
  
## Running a Node using Docker

To build the Docker container, run the following command in the root of the project:
```
docker build -f ./docker/client/Dockerfile -t stability .
```

To run the Docker container, run the following command in the root of the project:
```
docker run -d -p 30333:30333 -p 9933:9933 -p 9944:9944 -p 9615:9615 -e CHAIN="/stability/chain-specs/betanet.json" stability
```

You can set different environment variables, from the list below, when you run the docker container by using the following flag:
```
-e NAME=VALUE
```  


> Optional Environment Variables:

>> SEED allows the node to authenticate with a specific account  

>> CHAIN_NAME allows the node to use a pre-defined chain spec  
>> or  
>> CHAIN allows the node to use a custom chain spec using the path to a chain spec file  

>> NODE_KEY allows the node to use a specified P2P key, If not specified, the node will generate a random P2P key.  

>> BOOTNODES allows the node to use a specified bootnode, separated by commas. If not specified, the node will use the default bootnodes for the chain spec.  

>>MODE allows the node to run in different pruning modes. Possible values are "full_node" or "archive". The default value is "full_node".



An example command using Optional Environment Variables:  
```
docker run -d -p 30333:30333 -p 9933:9933 -p 9944:9944 -p 9615:9615 -e SEED=account -e CHAIN="/stability/chain-specs/betanet.json" -e MODE=archive -e BOOTNODES=/ip4/... stability
```

## Running a Node for Testing using Docker

To build the Docker container for testing, run the following command in the root of the project:
```
docker build -f ./docker/test/Dockerfile -t stability-test .
```

To run the Docker container for testing, run the following command in the root of the project:
```
docker run stability-test
```

