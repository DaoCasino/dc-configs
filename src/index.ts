import path from "path"
import { IConfig, IBlockchainNetworkConfig } from "./interfaces/IConfig"
import {
  blockchainNetworkConfigs,
  BlockchainNetwork
} from "./blockchainNetworks"

export const getBlockChainConfig = (
  blockchain: BlockchainNetwork
): IBlockchainNetworkConfig => {
  return blockchainNetworkConfigs.get(blockchain)
}
const blockchainNetwork: BlockchainNetwork = (process.env.DC_NETWORK ||
  "ropsten") as BlockchainNetwork
const blockchainConfig: IBlockchainNetworkConfig = getBlockChainConfig(
  blockchainNetwork
)

if (!blockchainConfig) {
  throw new Error(
    "Blockchain network not configured! Please put one of local | ropsten | rinkeby | mainnet to env.DC_NETWORK"
  )
}
export const config: IConfig = {
  platformId: process.env.PLATFORM_ID || "DC_Platform",
  blockchainNetwork,
  privateKey: process.env.ACCOUNT_PRIVATE_KEY,
  waitForConfirmations: 2,
  standartWalletPass: process.env.STANDART_WALLET_PASS || '23WDSksiuuyto!',
  minimumEth: 0.001,
  walletName: 'daocasino_wallet',
  gasPrice: Number(process.env.GAS_PRICE) || 40 * 1000000000,
  gasLimit: Number(process.env.GAS_LIMIT) || 40 * 100000,

  DAppsPath: path.join(
    path.resolve() || "",
    process.env.DAPPS_PATH || "data/dapps"
  ),

  signalServersSwarm: [
    "/dns4/signal2.dao.casino/tcp/443/wss/p2p-websocket-star/",
    "/dns4/signal3.dao.casino/tcp/443/wss/p2p-websocket-star/"
  ],
  ...blockchainConfig
}
export * from "./interfaces/IConfig"
export * from "./blockchainNetworks"
