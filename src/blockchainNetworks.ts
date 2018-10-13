import { contractAddresses } from "dc-protocol"
import { IBlockchainNetworkConfig } from "./interfaces/IConfig"

import ERC20 from "./jsonData/contractsABI/ERC20.json"

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
          address: contractAddresses.ERC20,
          abi: ERC20.abi
        }
      },
      web3HttpProviderUrl: "http://0.0.0.0:8545",
      gasPrice: Number(process.env.GAS_PRICE) || 40 * 1000000000,
      gasLimit: Number(process.env.GAS_LIMIT) || 40 * 100000
    }
  ],
  [
    "ropsten",
    {
      web3HttpProviderUrl: "https://ropsten.infura.io/JCnK5ifEPH9qcQkX0Ahl",
      waitForConfirmations: 2,
      gasPrice: Number(process.env.GAS_PRICE) || 40 * 1000000000,
      gasLimit: Number(process.env.GAS_LIMIT) || 40 * 100000,
      contracts: {
        ERC20: {
          address: "0x5D1E47F703729fc87FdB9bA5C20fE4c1b7c7bf57",
          abi: ERC20.abi
        }
      }
    }
  ],
  [
    "rinkeby",

    // TODO put correct value

    {
      contracts: {
        ERC20: {
          address: "0x5D1E47F703729fc87FdB9bA5C20fE4c1b7c7bf57",
          abi: ERC20.abi
        }
      },
      web3HttpProviderUrl: "https://ropsten.infura.io/JCnK5ifEPH9qcQkX0Ahl"
    }
  ],
  [
    "mainnet",
    // TODO put correct value
    {
      contracts: {
        ERC20: {
          address: "0x5D1E47F703729fc87FdB9bA5C20fE4c1b7c7bf57",
          abi: ERC20.abi
        }
      },
      web3HttpProviderUrl: "https://infura.io/JCnK5ifEPH9qcQkX0Ahl"
    }
  ]
])
