import path from "path"
import {
  IConfig,
  IBlockchainNetworkConfig,
  IBaseConfig
} from "./interfaces/IConfig"
import {
  blockchainNetworkConfigs,
  BlockchainNetwork
} from "./blockchainNetworks"

export const getBlockChainConfig = (
  blockchain: BlockchainNetwork
): IBlockchainNetworkConfig => {
  const blockchainConfig = blockchainNetworkConfigs.get(blockchain)
  if (!blockchainConfig) {
    throw new Error(
      `Blockchain network not configured! 
      Please put one of local | ropsten | rinkeby | mainnet to env.DC_NETWORK or in configOptions.blockchainNetwork`
    )
  }
  return blockchainConfig
}

export interface IConfigOptions {
  blockchainNetwork?: BlockchainNetwork
  privateKey?: string
  platformId?: string
}
const envBlockchainNetwork: BlockchainNetwork =
  (process.env.DC_NETWORK as BlockchainNetwork) || "local"
const defaultConfig: IBaseConfig = {
  platformId: process.env.PLATFORM_ID || "DC_Platform",
  privateKey: process.env.ACCOUNT_PRIVATE_KEY,
  blockchainNetwork: envBlockchainNetwork,
  standartWalletPass: process.env.STANDART_WALLET_PASS || "23WDSksiuuyto!",
  minimumEth: 0.001,
  walletName: "daocasino_wallet",
  gasPrice: Number(process.env.GAS_PRICE) || 40 * 1000000000,
  gasLimit: Number(process.env.GAS_LIMIT) || 40 * 100000,
  waitForConfirmations: 2,
  DAppsPath: path.join(
    path.resolve() || "",
    process.env.DAPPS_PATH || "data/dapps"
  ),

  signalServersSwarm: [
    "/dns4/signal1.dao.casino/tcp/443/wss/p2p-websocket-star/",
    "/dns4/signal2.dao.casino/tcp/443/wss/p2p-websocket-star/",
    "/dns4/signal3.dao.casino/tcp/443/wss/p2p-websocket-star/"
  ]
}
export const getConfig = (configOptions: IConfigOptions = {}): IConfig => {
  const baseConfig = { ...defaultConfig, ...configOptions }
  const result = {
    ...baseConfig,
    ...getBlockChainConfig(baseConfig.blockchainNetwork)
  }

  return result
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

export * from "./interfaces/IConfig"
export * from "./blockchainNetworks"
