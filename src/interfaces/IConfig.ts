import { BlockchainNetwork } from "../blockchainNetworks"

interface ContractInfo {
  address: string
  abi: any[]
}

interface IBlockchainNetworkConfig {
  privateKey?: string
  web3HttpProviderUrl: string
  waitForConfirmations?: number
  gasPrice?: number
  gasLimit?: number
  contracts: { ERC20: ContractInfo }
}

interface IConfig extends IBlockchainNetworkConfig {
  blockchain: BlockchainNetwork
  privateKey: string
  waitForConfirmations: number
  gasPrice: number
  gasLimit: number
  DAppsPath: string
  signalServersSwarm: string[]
  contracts: { ERC20: ContractInfo }
}

export { ContractInfo, IConfig, IBlockchainNetworkConfig }
