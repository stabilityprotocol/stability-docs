---
sidebar_position: 3
---

# Running a Node using Docker

To build the Docker container, run the following command in the root of the project:

```
docker build -f ./docker/client/Dockerfile -t stability .
```

To run the Docker container, run the following command in the root of the project:

```
docker run -d -p 30333:30333 -p 9933:9933 -p 9944:9944 -p 9615:9615 -e CHAIN="dev" stability
```

Optional Environment Variables:

- SEED allows the node to authenticate with a specific account
- CHAIN_NAME allows the node to use a pre-defined chain spec
- CHAIN allows the node to use a custom chain spec using the path to a chain spec file (by default "dev")
- NODE_KEY allows the node to use a specified P2P key, If not specified, the node will generate a random P2P key.
- BOOTNODES allows the node to use a specified bootnode, separated by commas. If not specified, the node will use the default bootnodes for the chain spec.
- MODE allows the node to run in different pruning modes. Possible values are "full_node" or "archive". The default value is "full_node".
  - If MODE is set to "archive", the node will run in archive mode, which means that it will keep all historical data.
  - If MODE is set to "archive", there is an extra flag for the BACKEND_TYPE, which allows the node to use a specific backend. Possible values are "local" or "sql", where "sql" is faster for querying blockchain data but requires more resources. The default value is "local".
- ZERO_GAS_TX_POOL, accepts a URL to a JSON file containing a list of zero gas transactions to be added to the transaction pool on startup.

## Running a Full Node using Docker:

```
docker run -d -p 30333:30333 -p 9933:9933 -p 9944:9944 -p 9615:9615 -e CHAIN_NAME="./chain-specs/testnet.json" -e ZERO_GAS_TX_POOL="https://OPTIONAL.com" -v /tmp/node:/tmp/node ghcr.io/stabilityprotocol/stability:latest
```

## Running a Full Archival Node using Docker:

```
docker run -d -p 30333:30333 -p 9933:9933 -p 9944:9944 -p 9615:9615 -e CHAIN_NAME="./chain-specs/testnet.json" -e ZERO_GAS_TX_POOL="https://OPTIONAL.com" -e MODE="archive" -v /tmp/node:/tmp/node ghcr.io/stabilityprotocol/stability:latest
```

## Running a Validator Full Node using Docker:

```
docker run -d -e SEED="useful ... mnemonic" -p 30333:30333 -p 9933:9933 -p 9944:9944 -p 9615:9615 -e CHAIN_NAME="./chain-specs/testnet.json" -e ZERO_GAS_TX_POOL="https://OPTIONAL.com" -v /tmp/node:/tmp/node ghcr.io/stabilityprotocol/stability:latest
```

## Running a Validator Archival Node using Docker:

```
docker run -d -e SEED="useful ... mnemonic" -p 30333:30333 -p 9933:9933 -p 9944:9944 -p 9615:9615 -e CHAIN_NAME="./chain-specs/testnet.json" -e ZERO_GAS_TX_POOL="https://OPTIONAL.com" -v /tmp/node:/tmp/node -e MODE="archive" ghcr.io/stabilityprotocol/stability:latest
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
