---
title: "Node Upgrades"
---

Stability blockchain client will be updated within time for enhancing the utility and effiency of the ecosystem. For this reason, there will upgrades of the client that all validators would have to update to.

We can distinguish two different kind of upgradem, though a certain upgrade could include both of them:

- Runtime Upgrade: Updates the consensus rules of the blockchain and affects to how a valid block is defined. For example, adding some new EVM opcode.

- Node Upgrade: Affects to how users (either validators or blockchain users) interact with the blockchain consensus rules. For example, adding a parameter to the blockchain client so every validator could custom their prometheus configuration.

## How keep sync for a Runtime Upgrade?

Runtime upgrades are a built-in mechanism in Substrate framework so no operation is needed from the validators side. Runtime upgrades ocurr through the `pallet_upgrade_runtime` that is controlled by the `pallet_tech_comitee` that acts as multi-signature system that only grants permission for a runtime upgrade if more than half of tech comittee members allow it. Alternatively, there is also an EVM interface for this purpose though the same requirement is required for approving any runtime upgrade.

## How keep sync for a Node Upgrade?

Node upgrades need the validators nodes (and RPCs) to do some operations to keep in sync. Every upgrade would generate a docker image [here](https://github.com/stabilityprotocol/stability/pkgs/container/stability) and could be executed following [this tutorial](/creating_a_validator/run_node_using_docker).

For keep in sync to every node upgrade, every node in the network would have to download the latest docker image and restarting the execution of it, assuring that the latest version of the node is indeed executing.
