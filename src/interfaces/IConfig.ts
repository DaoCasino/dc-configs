import { ABIDefinition } from './iAbi'

import { BlockchainNetwork } from '../blockchainNetworks'

interface ContractInfo {
  address: string
  abi: ABIDefinition[]
}

export interface Contracts {
  ERC20: ContractInfo
  Game?: ContractInfo
}

export enum TransportType {
  IPFS = 1,
  WS,
  DIRECT,
  LIBP2P
}

interface IBlockchainNetworkConfig {
  web3HttpProviderUrl: string
  waitForConfirmations?: number
  gasPrice?: number
  gasLimit?: number
  contracts: Contracts
}

interface IConfig extends IBlockchainNetworkConfig, IBaseConfig {
  waitForConfirmations: number
  gasPrice: number
  gasLimit: number
  contracts: Contracts
}

interface IBaseConfig {
  platformId: string
  privateKey: string
  waitForConfirmations: number
  blockchainNetwork: BlockchainNetwork
  standartWalletPass: string
  contracts: Contracts
  gasPrice: number
  gasLimit: number
  minimumEth: number
  walletName: string
  DAppsPath: string
  blockchainType?: string
  transportServersSwarm: any // TODO: [key: TransportType enum]: string
  transport: TransportType
  waitForPeerTimeout: number // miliseconds
  statisticsServer: {
    authKey: string,
    host: string,
    protocol: string
  }
}

export { ContractInfo, IConfig, IBlockchainNetworkConfig, IBaseConfig }
