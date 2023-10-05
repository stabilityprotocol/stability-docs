---
sidebar_position: 2
---
# Nodes

## Node Types

There are two main node types on the Stability blockchain, below you will find details about each:

**Validator Nodes (VNs)** contain the last 256 blocks, run distributed consensus to execute and store transactions on the blockchain and communicate directly with other nodes, and are used to state sync with other nodes

**Archive Nodes (ANs)** contain all blocks, beginning from the first block in the blockchains history, and are used to state sync with other nodes

## Running a Node
To build the chain, run the following command in the root of the project:
```
$ cargo build --release
```
  
To execute the chain, run the following command in the root of the project:
```
$ ./target/release/stability --dev
```
  
To use manual-seal and produce blocks manually through RPC,  run the following command in the root of the project:
```
$ ./target/release/stability --dev --manual-seal
```
  
## Running a Node using Docker

To build the Docker container, run the following command in the root of the project:
```
$ docker build -f ./docker/client/Dockerfile -t stability .
```

To run the Docker container, run the following command in the root of the project:
```
$ docker run -d -p 30333:30333 -p 9933:9933 -p 9944:9944 -p 9615:9615 -e CHAIN="/stability/chain-specs/betanet.json" stability
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
$ docker run -d -p 30333:30333 -p 9933:9933 -p 9944:9944 -p 9615:9615 -e SEED=account -e CHAIN="/stability/chain-specs/betanet.json" -e MODE=archive -e BOOTNODES=/ip4/... stability
```

## Running a Node for Testing using Docker

To build the Docker container for testing, run the following command in the root of the project:
```
$ docker build -f ./docker/test/Dockerfile -t stability-test .
```

To run the Docker container for testing, run the following command in the root of the project:
```
$ docker run stability-test
```

