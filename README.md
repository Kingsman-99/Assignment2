# Merkle Tree Demonstration with ethers.js

This script demonstrates how to construct a Merkle root from a list of transaction strings using the **ethers.js** library. It computes the Merkle root twice:

- Once using **SHA256** hashing
- Once using **Keccak256** hashing (the standard hash function used in Ethereum Merkle trees)

The purpose is to show the difference in resulting roots when using different hash functions and to illustrate a basic recursive Merkle tree construction.

## What the Code Does

1. Defines a list of simple transaction strings (e.g., `"Chibex sent 100USD"`).
2. Converts each transaction string to bytes and hashes the leaves using either `ethers.sha256` or `ethers.keccak256`.
3. Recursively builds the Merkle tree:
   - Pairs adjacent hashes, concatenates them, and hashes the result.
   - If a level has an odd number of nodes, the last node is promoted to the next level unchanged (no duplication).
   - Logs each intermediate level for visibility.
4. Outputs:
   - The hashed leaves (for SHA256 only)
   - The final Merkle root for SHA256
   - The final Merkle root for Keccak256

## Gas Fee Estimation:
   -https://hackmd.io/@kingsman/ByV3vRCHWl

## Requirements

- Node.js (v14 or higher recommended)
- ethers.js v6 (or compatible version)

Install dependencies:

```bash
npm install ethers# Assignment2
