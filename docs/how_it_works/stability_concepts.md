---
sidebar_position: 5
---

# Stability Concepts  
_How Stability supports financial and non-financial transactions_ 
#  
Traditional token-based L1 blockchains use token supply, demand, and network traffic to generate a variable fee, commonly referred to as “gas” to conduct a transaction on the network. This variable transaction fee is typically imposed on users who initiate transactions, and at times sponsored by businesses to remove that burden on user adoption. This becomes a growing issue due to its existence as an overhead cost, and its variability negatively affects the integrity of using the technology. We chose to shift the perception of cons outweighing pros when using blockchain technology, by making transaction fees optional and static.  
  
When fees are removed, transactions are considered “non-financial” and not subject to regulatory ambiguity. These transactions are part of an external private mempool and are able to be added to a validators mempool through setting the ```–zero-gas-tx-pool`` parameter when configuring the node. WIth this feature, users don’t have to fund and/or have a funded account to use a dApp, easing user onboarding and removing the financial barrier to entry for businesses and users alike.  
  
When fees are set, transactions are considered “financial” and subsequently subject to regulation, but also consistent and predictable. These fees are statically configured and stored in a reward vault, where it can be claimed and shared between dApp developers and validators. dApp developers are able to control the percentage that is claimable in the ```FeeRewardsVaultController```. This provides an incentive for validators to support the network, and an incentive for dApp developers to build on the network. These predictable and consistent fees are also able to be sponsored by businesses/dApp developers to support freemium/trial access so that new users are not required to pay to try a dApps functionality.  
  
Typically, transaction fees are only able to be paid by the network's native token, due to Stability’s tokenless nature we have decided to support payment using a variety of tokens. The list of available tokens is maintained by a public whitelist contract maintained by network validators. Users and validators in turn have the autonomy and flexibility to select a token of their choosing for transaction processing, from this whitelist.  
