import path from "path"
import { IConfig, IBlockchainNetworkConfig } from "./interfaces/IConfig"
import {
  blockchainNetworkConfigs,
  BlockchainNetwork
} from "./blockchainNetworks"

const blockchain: BlockchainNetwork = (process.env.DC_NETWORK ||
  "ropsten") as BlockchainNetwork

const blockchainConfig: IBlockchainNetworkConfig = blockchainNetworkConfigs.get(
  blockchain
)

if (!blockchainConfig) {
  throw new Error(
    "Blockchain network not configured! Please put one of local | ropsten | rinkeby | mainnet to env.DC_NETWORK"
  )
}
export const config: IConfig = {
  blockchain,
  privateKey: process.env.ACCOUNT_PRIVATE_KEY,
  waitForConfirmations: 2,
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
