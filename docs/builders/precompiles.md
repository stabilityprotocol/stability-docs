---
sidebar_position: 5
---

# Precompiles

A precompiled contract is a piece of native Substrate code with an Ethereum-style address, callable through the Ethereum API like any regular smart contract.
These precompiles enable direct calls to the Substrate runtime, a feature typically inaccessible from the Ethereum perspective within Stability.

## Ethereum Native

### ECRECOVER

Address: `0x0000000000000000000000000000000000000001`

The main function of this precompile is to verify the signature of a message. In general terms, you feed ecrecover the transaction's signature values and it returns an address. The signature is verified if the address returned is the same as the public address that sent the transaction.

### SHA256

Address: `0x0000000000000000000000000000000000000002`

The function of this precompile is returns the SHA256 hash from the given data.

### RIPEMD160

Address: `0x0000000000000000000000000000000000000003`

The function of this precompile is returns the RIPEMD160 hash from the given data.

### Identity

Address: `0x0000000000000000000000000000000000000004`

Also known as `datacopy`, this precompile serves as a cheaper way to copy data in memory.

### Modexp

Address: `0x0000000000000000000000000000000000000005`

This precompile calculates the remainder when an integer `b` (base) is raised to the `e`-th power (the exponent), and is divided by a positive integer `m` (the modulus).

### BN128Add

Address: `0x0000000000000000000000000000000000000006`

The BN128Add precompile implements a native elliptic curve point addition. It returns an elliptic curve point representing `(ax, ay) + (bx, by)` such that `(ax, ay)` and `(bx, by)` are valid points on the curve BN256.

### BN128Mul

Address: `0x0000000000000000000000000000000000000007`

The BN128Mul precompile implements a native elliptic curve multiplication with a scalar value. It returns an elliptic curve point representing `scalar * (x, y)` such that `(x, y)` is a valid curve point on the curve BN256.

### BN128Pairing

Address: `0x0000000000000000000000000000000000000008`

The BN128Pairing precompile implements elliptic curve pairing operation to perform zkSNARK verification.

### Blake2

Address: `0x0000000000000000000000000000000000000009`

The Blake2 precompile implements the BLAKE2b hash function and other higher-round 64-bit BLAKE2 variants to run cheaply on the EVM.

### SHA3FIPS256

Address: `0x0000000000000000000000000000000000000400`

The SHA3FIPS256 precompile implements the SHA-3 family of cryptographic hashes codified in FIPS202 that produces an output 256 bits in length

### ECRecoverPublicKey

Address: `0x0000000000000000000000000000000000000402`

Similar to ECRecover, but returns the pubkey (not the corresponding Ethereum address)

## Stability native

In Stability, we have developed a set of precompiles to facilitate interaction from the EVM side with the custom features of the Stability blockchain

### SupportedTokensManager

Address: `0x0000000000000000000000000000000000000801`

Link to code: [here](https://github.com/stabilityprotocol/stability/tree/main/precompiles/token-fee-controller/supported-tokens-manager)

A precompile that enables Stability administration to manage the various permitted tokens

### ValidatorFeeManager

Address: `0x0000000000000000000000000000000000000802`

Link to code: [here](https://github.com/stabilityprotocol/stability/tree/main/precompiles/token-fee-controller/validator-fee-selector)

A precompile that allows validators to manage their accepted tokens and their conversion rate controllers

### FeeToken

Address: `0x0000000000000000000000000000000000000803`

Link to code: [here](https://github.com/stabilityprotocol/stability/tree/main/precompiles/token-fee-controller/fee-token-selector)

A precompile that allows users to set their fee token

### ValidatorController

Address: `0x0000000000000000000000000000000000000805`

Link to code: [here](https://github.com/stabilityprotocol/stability/tree/main/precompiles/validator-controller)

A precompile that enables Stability administration to manage the validator node set

### UpgradeRuntimeControllerPrecompile

Address: `0x0000000000000000000000000000000000000806`

Link to code: [here](https://github.com/stabilityprotocol/stability/tree/main/precompiles/upgrade-runtime-controller)

A precompile that enables Stability administration to manage runtime upgrades.

### FeeRewardsVaultController

Address: `0x0000000000000000000000000000000000000807`

Link to code: [here](https://github.com/stabilityprotocol/stability/tree/main/precompiles/fee-rewards-vault-controller)

A precompile for Stability users and administration that enables interaction with the BSR (Business Share Revenue) feature
