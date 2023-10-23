---
sidebar_position: 5
---

# Sponsor a transaction

Sponsored transactions contains two key elements:  
- **Signed transaction**: A standard user-signed EVM transaction that would demostrate Stability nodes that the user agreed to execute that transaction  
- **Sponsored transaction signature**: The sponsor needs to sign the message described below so this proof could be used in Stabiliy nodes.

### Sponsor signing message

Below is the message that the sponsor has to sign:  

`I consent to be a sponsor of transaction: ${TransactionHash}`

_Note: `${TransactionHash}` is a `0x` prefixed hexadecimal string_

### API

To submit a sponsored transaction into the mempool tha  `stability_sendSponsoredTransaction` Stability RPC method is to be used.  
  
It receives three arguments:  
- **Raw signed transaction** (in the same format as eth_sendRawTransaction)  
- **Sponsor address** (Sponsor of the transaction)  
- **Sponsor signaure** (Signature of the signing sponsored transaction message)  
