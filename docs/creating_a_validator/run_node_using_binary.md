---
sidebar_position: 2
---

# Running a Node using the binary

To run a Stability node, run the following command:

```
./target/release/stability --chain testnet
```

Additionally, you can configure the following flags:

- `--validator`: Assumes that you are a validator and begins validation if you are on the validators' list.
- `--pruning archive`: Runs your node in archival mode. An archival node maintains a complete copy and allows queries on any historical chain state.
- `--unsafe-rpc-external --rpc-cors all --unsafe-ws-external`: Use if your node will be accessed from a system external to your localhost.
- `--bootnodes`: A list of p2p nodes for Stability to join the network. What is known as bootnodes
- `--base-path`: Specifies a custom base path for the data folder

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

---

## Implementing SEED Keys in Your Node

After [generating your SEED keys](./generate_and_insert_node_key.md), the next crucial step is to integrate them into your node. This process is essential for validators, enabling them to sign blocks effectively. Here’s how you can insert your SEED keys into the node:

### Script for SEED Key Insertion

To embed your SEED keys into the node, execute the script below. Before running this script, ensure you have defined the following variables:

- `$SEED`: This is your Seed phrase from which Stability keys are derived.
- `$PATH`: This denotes the path where your node data is stored.

Run these commands to insert the keys:

```shell
./target/release/stability key insert  \
--keystore-path  $PATH/chains/testnet/keystore \
--base-path $PATH \
--scheme ecdsa \
--suri "$SEED" \
--key-type aura

./target/release/stability key insert \
--keystore-path  $PATH/chains/testnet/keystore \
--base-path $PATH \
--scheme Ed25519 \
--suri "$SEED" \
--key-type gran
```

### Importance for Validators

It’s important to note that without these keys, a validator will not be able to sign blocks. This step is mandatory for all validators, either currently on the validators list or those applying to be included.

By following these instructions, validators can ensure their node is correctly configured for operational integrity within the network.
