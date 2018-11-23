import { IBlockchainNetworkConfig, Contracts } from "./interfaces/IConfig"

import {ERC20 as ERC20Abi, Game as GameAbi} from "./contractsABI"

export type BlockchainNetwork = "local" | "ropsten" | "rinkeby" | "mainnet"


export const blockchainNetworkConfigs: Map<
  BlockchainNetwork,
  IBlockchainNetworkConfig
> = new Map<BlockchainNetwork, IBlockchainNetworkConfig>([
  [
    "local",
    {
      contracts: {
        ERC20: {
          address: '0xF12b5dd4EAD5F743C6BaA640B0216200e89B60Da', // "http://127.0.0.1:8545/contracts->ERC20",
          abi: ERC20Abi
        },
        Game: {
          address: '0x2C2B9C9a4a25e24B174f26114e8926a9f2128FE4', // "http://127.0.0.1:8545/contracts->Game",
          abi: GameAbi
        }
      },
      web3HttpProviderUrl: "http://127.0.0.1:8545",
      gasPrice: Number(process.env.GAS_PRICE) || 40 * 1000000000,
      gasLimit: Number(process.env.GAS_LIMIT) || 40 * 100000
    }
  ],
  [
    "ropsten",
    {
      web3HttpProviderUrl:
        "https://ropsten.infura.io/v3/f1848473a0934a5287c8f7d0968a940a",
      waitForConfirmations: 2,
      gasPrice: Number(process.env.GAS_PRICE) || 40 * 1000000000,
      gasLimit: Number(process.env.GAS_LIMIT) || 4 * 100000,
      contracts: {
        ERC20: {
          address: "0x5D1E47F703729fc87FdB9bA5C20fE4c1b7c7bf57",
          abi: ERC20Abi
        },
        Game: {
          address: "0x76acfE4A87381E6Ff1B5c68d404CD49837f53184",
          abi: GameAbi
        }
      }
    }
  ],
  [
    "rinkeby",
    {
      contracts: {
        ERC20: {
          address: "0x995cf44c0bdff07a9b6e171802cdc83d3c4add82",
          abi: ERC20Abi
        }
      },
      gasPrice: Number(process.env.GAS_PRICE) || 2000 * 1000 * 1000,
      gasLimit: Number(process.env.GAS_LIMIT) || 4 * 100000,
      web3HttpProviderUrl: "https://rinkeby.infura.io/JCnK5ifEPH9qcQkX0Ahl",
      waitForConfirmations: 2
    }
  ],
  [
    "mainnet",
    // TODO put correct value
    {
      contracts: {
        ERC20: {
          address: "0x5D1E47F703729fc87FdB9bA5C20fE4c1b7c7bf57",
          abi: ERC20Abi
        }
      },
      web3HttpProviderUrl: "https://infura.io/JCnK5ifEPH9qcQkX0Ahl"
    }
  ]
])
