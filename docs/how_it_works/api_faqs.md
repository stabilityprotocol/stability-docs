---
title: "Zero Gas Transactions API FAQs"
---

Zero Gas Transactions API is composed by two different components:

- Free Transactions: Allows every user to execute a limitted number of transactions every day.

- Paid Transactions: Allows to execute a larger number of transactions using an API KEY that you could generate at [Stability Portal](https://portal.stabilityprotocol.com).

## Paid Transactions FAQs

- What does mean `missing queryParam: api_key` error?

  This means that you haven't setup correctly the `api_key` query param on your wallet provider or http request.

- What does mean `unknown api_key`?

  This could mean that either have set wrongly your `api_key` or that you haven't signed up correctly your `api_key` in [Stability Portal](https://portal.stabilityprotocol.com)

- What does mean `apikey limit exceeded`?

  Every `api_key` has a maximum of transactions that this `api_key` can execute. If this error has been reached you won't be able to execute more transactions in the period of time that your `api_key` is setup for.

## Free Transactions FAQs

- What does mean `free transactions disabled` error?

  This means that free transactions has been temporarily suspended for some reason.

- What does mean `gasLimit over maxTxGasLimit=number` error?

  There exist a limit for transaction `gasLimit` value for avoding DoS attack or other posible incovenients.

- What does mean `daily limit exceeded` error?

  There exist a limit for the transactions that an address can perform every day, is this error is shown you are above the limit.
