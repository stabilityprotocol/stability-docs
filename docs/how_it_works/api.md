---
sidebar_position: 9
---

# API

## What is the Stability API?

The Stability API allows applications to connect to a Stability node that is part of the Stability Blockchain Network. Users can interact with on-chain data and send transactions programmatically by using endpoints provided by this API, or through a UI that uses these endpoints as its backend. The API follows a JSON-RPC standard with a uniform set of methods agnostic of custom applications or nodes, that is lightweight and stateless remote procedure call using JSON as its data format (RFC 4627).

The Stability JSON RPC API supports familiar Ethereum/Geth-compatible endpoints in addition to Stability-custom endpoints that have functionality specialized to our ecosystem.

[Ethereum API Documentation](https://ethereum.github.io/execution-apis/api-documentation/)

## EVM RPC Endpoints

### Mainnet

- RPC URL: **https://free.stabilityprotocol.com**
- Chain ID: **101010**

### Testnet

- RPC URL: **https://free.testnet.stabilityprotocol.com**
- Chain ID: **20180427**

## Stability Custom RPC Endpoints

> `stability_getValidatorList`

Obtain the current validator set, showcasing the active validators within the network.

#

> `stability_getSupportedTokens`

Fetch a list of network-supported tokens eligible for transaction fee payments and potential mining rewards under certain conditions.

#

> `stability_sendSponsoredTransaction`

Submit a transaction that is sponsored to the network's mempool, facilitating transactions without direct fee payment by the sender.

## Example

```
$ curl 'https://free.testnet.stabilityprotocol.com/' \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"method":"stability_getSupportedTokens","params":[], "id":1,"jsonrpc":"2.0"}'


{"jsonrpc":"2.0","result":{"code":200,"value":["0xdc2b93f3291030f3f7a6d9363ac37757f7ad5c43"]},"id":1}
```

This snippet demonstrates how to query the supported tokens using the stability_getSupportedTokens endpoint, showcasing the API's straightforward and efficient interaction model.
