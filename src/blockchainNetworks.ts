import { IBlockchainNetworkConfig } from "./interfaces/IConfig"

import ERC20 from "./jsonData/contractsABI/ERC20.json"

export type BlockchainNetwork = "local" | "ropsten" | "rinkeby" | "mainnet"

let localERC20Address = ""
try {
  // tslint:disable-next-line:no-var-requires
  localERC20Address = require("../../dc-protocol/v_0.1/build/addresses.json")
    .ERC20
} catch (error) {}

export const blockchainNetworkConfigs: Map<
  BlockchainNetwork,
  IBlockchainNetworkConfig
> = new Map<BlockchainNetwork, IBlockchainNetworkConfig>([
  [
    "local",
    {
      contracts: {
        ERC20: {
          address: localERC20Address,
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
      gasLimit: Number(process.env.GAS_LIMIT) || 4 * 100000,
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
    {
      contracts: {
        ERC20: {
          address: "0x995cf44c0bdff07a9b6e171802cdc83d3c4add82",
          abi: ERC20.abi
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
          abi: ERC20.abi
        }
      },
      web3HttpProviderUrl: "https://infura.io/JCnK5ifEPH9qcQkX0Ahl"
    }
  ]
])
