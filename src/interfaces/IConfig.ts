import { BlockchainNetwork } from "../blockchainNetworks"

interface ContractInfo {
  address: string
  abi: any[]
}

interface IBlockchainNetworkConfig {
  web3HttpProviderUrl: string
  waitForConfirmations?: number
  gasPrice?: number
  gasLimit?: number
  contracts: { ERC20: ContractInfo }
}

interface IConfig extends IBlockchainNetworkConfig, IBaseConfig {
  waitForConfirmations: number
  gasPrice: number
  gasLimit: number
}
interface IBaseConfig {
  platformId: string
  privateKey: string
  waitForConfirmations: number
  blockchainNetwork: BlockchainNetwork
  standartWalletPass: string
  gasPrice: number
  gasLimit: number
  minimumEth: number
  walletName: string
  DAppsPath: string
  signalServersSwarm: string[]
}

export { ContractInfo, IConfig, IBlockchainNetworkConfig, IBaseConfig }
