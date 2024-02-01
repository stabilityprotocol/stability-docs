---
sidebar_position: 1
---

# Node Key Generation

When setting up a node in our network, generating a SEED is a critical first step. There are two recommended methods to accomplish this: using an external SEED generation service or employing the built-in SEED generation feature of the Stability node.

## Preferred Method: External SEED Generation Service

For optimal security and reliability, we strongly recommend using the Stability Protocol's external SEED generation service. This dedicated service is designed to ensure the highest standards of security in SEED creation.

**Access the SEED Generator here:**
[Stability Protocol Validator Key Generator](https://stabilityprotocol.github.io/validator-key-generator/)

## Alternative Method: In-Built SEED Generator

As an alternative, you can utilize the built-in SEED generation mechanism of the Stability node. This method can be used if direct access to the external service is not feasible.

To generate a SEED using the Stability node, execute the following command:

```shell
./target/release/stability key generate
```
