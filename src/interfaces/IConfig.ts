import { BlockchainNetwork } from "../blockchainNetworks"
interface ContractInfo {
  address: string
  abi: any[]
}
export interface Contracts {
  ERC20: ContractInfo
  Game?: ContractInfo
}

export enum TransportType {
  IPFS = 1,
  WS,
  DIRECT
}

interface IBlockchainNetworkConfig {
  web3HttpProviderUrl: string
  waitForConfirmations?: number
  gasPrice?: number
  gasLimit?: number
  getContracts: ((
    web3HttpProviderUrl?: string
  ) => Promise<Contracts> | Contracts)
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
  transportServersSwarm: any // TODO: [key: TransportType enum]: string
  transport: TransportType
  waitForPeerTimeout: number // miliseconds
}

export { ContractInfo, IConfig, IBlockchainNetworkConfig, IBaseConfig }
