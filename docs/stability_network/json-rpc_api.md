---
sidebar_position: 4
---

# JSON-RPC API

## What is the Stability API?
The Stability API allows applications to connect to a Stability node that is part of the Stability Blockchain Network. Users can interact with on-chain data and send transactions programmatically by using endpoints provided by this API, or through a UI that uses these endpoints as its backend. The API follows a JSON-RPC standard with a uniform set of methods agnostic of custom applications or nodes, that is lightweight and stateless remote procedure call using JSON as its data format (RFC 4627). The Stability JSON RPC API supports familiar Ethereum/Geth-compatible endpoints in addition to Stability-custom endpoints that have functionality specialized to our ecosystem. 

## Stability Custom RPC Endpoints  

>```stability_getValidatorList```  

This endpoint retrieves the current list of validators on the network, which can be also referred to as the active validator set 
#
>```stability_getSupportedTokens```  

This endpoint retrieves the list of tokens supported by the network for payment of transaction fees. These tokens can also be mined as rewards in certain configurations. 
