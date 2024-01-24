---
sidebar_position: 1
---

# Generate a node key and insert it
  
## Key Generation
To generate a SEED, you can either use a reliable SEED generation service or the Stability node itself as it has a SEED generation mechanism built in. 

To use the built-in SEED generation mechanism, run the following command:
```
./target/release/stability key generate
```

# Key Insertion
To insert the keys into the node, use the followiing script:
```
   ## TO RUN THIS COMMAND YOU SHOULD DEFINE
   ## $SEED - Seed phrase from which Stability keys are derived
   ## $PATH - Path where you save your node data
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