---
sidebar_position: 3
---

# FAQ

_Frequently asked questions_

## What is the RPC URL and Chain ID?

RPC URL: **https://free.testnet.stabilityprotocol.com**  
Chain ID: **20180427**

## How do you manually add Stability Network to Metamask?

1. Click the Metamask logo in your browser extensions to open Metamask
1. Click the Network switcher icon the top left of the window\*\*
1. Click Add network\*\*
1. Click Add a network manually at the bottom of the network list\*\*

Enter the following information:  
 Network Name: **Stability Network**  
 New RPC URL: **https://free.testnet.stabilityprotocol.com**  
 Chain ID: **20180427**  
 Currency Symbol: **FREE**

## What happens if I run out of transactions?

The transaction status will show as 'Failed'

## Paid Transactions FAQs

- What does mean `missing queryParam: api_key` error?

  This means that you haven't setup correctly the `api_key` query param on your wallet provider or http request.

- What does mean `unknown api_key`?

  This could mean that either have set wrongly your `api_key` or that you haven't signed up correctly your `api_key` in [Stble Portal](https://portal.stble.io)

- What does mean `apikey limit exceeded`?

  Every `api_key` has a maximum of transactions that this `api_key` can execute. If this error has been reached you won't be able to execute more transactions in the period of time that your `api_key` is setup for.

## Free Transactions FAQs

- What does mean `free transactions disabled` error?

  This means that free transactions has been temporarily suspended for some reason.

- What does mean `gasLimit over maxTxGasLimit=number` error?

  There exist a limit for transaction `gasLimit` value for avoding DoS attack or other posible incovenients.

- What does mean `daily limit exceeded` error?

  There exist a limit for the transactions that an address can perform every day, is this error is shown you are above the limit.
