import fetch from "cross-fetch"
import { IBlockchainNetworkConfig, Contracts } from "./interfaces/IConfig"

import ERC20Abi from "./ABI/ERC20.json"
import GameAbi from "./ABI/Game.json"

export type BlockchainNetwork = "local" | "ropsten" | "rinkeby" | "mainnet"

const getLocalAddresses = (
  httpAddress: string
): Promise<{
  Game: string
  ERC20: string
}> => {
  return fetch(httpAddress).then(r => {
    return r.json()
  })
}

export const blockchainNetworkConfigs: Map<
  BlockchainNetwork,
  IBlockchainNetworkConfig
> = new Map<BlockchainNetwork, IBlockchainNetworkConfig>([
  [
    "local",
    {
      getContracts: (
        web3HttpProviderUrl: string = "http://127.0.0.1:8545"
      ): Promise<Contracts> => {
        return getLocalAddresses(`${web3HttpProviderUrl}/contracts`).then(
          addresses => ({
            ERC20: {
              address: addresses.ERC20,
              abi: ERC20Abi.abi
            },
            Game: {
              address: addresses.Game,
              abi: GameAbi.abi
            }
          })
        )
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
      getContracts: () => ({
        ERC20: {
          address: "0x5D1E47F703729fc87FdB9bA5C20fE4c1b7c7bf57",
          abi: ERC20Abi.abi
        }
      })
    }
  ],
  [
    "rinkeby",
    {
      getContracts: () => ({
        ERC20: {
          address: "0x995cf44c0bdff07a9b6e171802cdc83d3c4add82",
          abi: ERC20Abi.abi
        }
      }),
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
      getContracts: () => ({
        ERC20: {
          address: "0x5D1E47F703729fc87FdB9bA5C20fE4c1b7c7bf57",
          abi: ERC20Abi.abi
        }
      }),
      web3HttpProviderUrl: "https://infura.io/JCnK5ifEPH9qcQkX0Ahl"
    }
  ]
])
