---
sidebar_position: 2
---

# Example: Validator Controller
This smart contract can be used to create a dApp to add validators, remove validators, query the global list of validators, and query the active list of validators.

~~~
// SPDX-License-Identifier: GPL-3.0-only
pragma solidity >=0.8.3;

interface ValidatorController {
    function addValidator(address validator) external; // onlyOwner

    function removeValidator(address validator) external; // onlyOwner

    function getValidatorList() external view returns (address[] memory);

    function getActiveValidatorList() external view returns (address[] memory);
}
~~~

You can copy-paste the code block into a new file with the .sol suffix
