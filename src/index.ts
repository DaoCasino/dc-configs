import path from 'path'
import { IBaseConfig, IBlockchainNetworkConfig, IConfig, TransportType } from './interfaces/IConfig'
import os from 'os'
import { BlockchainNetwork, blockchainNetworkConfigs } from './blockchainNetworks'

let machineName
try {
  machineName = os.hostname()
} catch (error) {
  console.log(error)
}

export interface IConfigOptions {
  blockchainNetwork?: BlockchainNetwork
  transport?: TransportType
  blockchainType?: string
  privateKey?: string
  platformId?: string
  customWeb3HttpProviderUrl?: string,
  DAppsPath?: string,
  statisticsAuthKey?: string
}

const envBlockchainNetwork: BlockchainNetwork =
  (process.env.DC_NETWORK as BlockchainNetwork) || 'local'

const envTransportType: TransportType = TransportType[process.env.DC_TRANSPORT] || TransportType.LIBP2P

const defaultConfig: IBaseConfig = {
  platformId: process.env.PLATFORM_ID || machineName || 'DC_Platform',
  privateKey: process.env.ACCOUNT_PRIVATE_KEY,
  blockchainNetwork: envBlockchainNetwork,
  standartWalletPass: process.env.STANDART_WALLET_PASS || '23WDSksiuuyto!',
  minimumEth: 0.001,
  walletName: 'daocasino_wallet',
  contracts: blockchainNetworkConfigs.get(envBlockchainNetwork).contracts,
  gasPrice: Number(process.env.GAS_PRICE) || 40 * 1000000000,
  gasLimit: Number(process.env.GAS_LIMIT) || 40 * 100000,
  waitForConfirmations: 2,
  DAppsPath: (
    process.env.DAPPS_FULL_PATH
    || path.join(path.resolve() || '', process.env.DAPPS_PATH || 'data/dapps')
  ),

  transportServersSwarm: {},
  transport: envTransportType,
  waitForPeerTimeout: 30000,
  statisticsServer: {
    authKey: process.env.STAT_SERV_AUTH || undefined,
    host: process.env.STAT_SERV_HOST || undefined,
    protocol: process.env.STAT_SERV_PROTOCOL || undefined
  },
  sentry: {
    dsn: process.env.SENTRY_DSN || undefined
  }
}

const signals = [
  '/dns4/signal1.dao.casino/tcp/443/wss/p2p-websocket-star/',
  '/dns4/signal2.dao.casino/tcp/443/wss/p2p-websocket-star/',
  '/dns4/signal3.dao.casino/tcp/443/wss/p2p-websocket-star/'
]

defaultConfig.transportServersSwarm[TransportType.WS] = ['ws://localhost:8888/']
defaultConfig.transportServersSwarm[TransportType.IPFS] = signals
defaultConfig.transportServersSwarm[TransportType.LIBP2P] = signals
// .concat(["/ip4/0.0.0.0/tcp/0"])

const getBlockChainConfig = (
  blockchain: BlockchainNetwork,
  customWeb3HttpProviderUrl: string = process.env.CUSTOM_WEB3_PROVIDER_URL
): IBlockchainNetworkConfig => {
  const blockchainConfig = blockchainNetworkConfigs.get(blockchain)
  if (!blockchainConfig) {
    throw new Error(
      `Blockchain network not configured! 
      Please put one of local | ropsten | rinkeby | mainnet to env.DC_NETWORK or in configOptions.blockchainNetwork`
    )
  }
  return blockchain !== 'local' || !customWeb3HttpProviderUrl
    ? blockchainConfig
    : {
      ...blockchainConfig,
      web3HttpProviderUrl: customWeb3HttpProviderUrl
    }
}

export const getConfig = (configOptions: IConfigOptions = {}): IConfig => {
  const baseConfig = { ...defaultConfig, ...configOptions }
  return {
    ...baseConfig,
    ...getBlockChainConfig(
      baseConfig.blockchainNetwork,
      configOptions.customWeb3HttpProviderUrl
    )
  }
}

class ConfigStore {
  static default: IConfig
}

export const setDefaultConfig = (configOptions: IConfigOptions = {}) => {
  const result = getConfig(configOptions)
  ConfigStore.default = result
  return result
}

if (!ConfigStore.default) {
  ConfigStore.default = getConfig()
}
export const config = ConfigStore

export * from './interfaces/iAbi'
export * from './interfaces/IConfig'
export * from './blockchainNetworks'
