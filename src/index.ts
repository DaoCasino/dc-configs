import path      from 'path'
import { ERC20 } from './contracts'

export interface ContractInfo {
  address : string
  abi     : any[]
}

export interface IConfig {
  privateKey           : string
  web3HttpProviderUrl  : string
  waitForConfirmations : number
  contracts            : { ERC20: ContractInfo }
  gasPrice             : number
  gasLimit             : number
  DAppsPath            : string
  signalServersSwarm   : string[]
}

// Infura Ropsten provide by default 
let rpcUrl:string = 'https://ropsten.infura.io/JCnK5ifEPH9qcQkX0Ahl'
// in local(dev) env
if (process.env.DC_NETWORK === 'local') rpcUrl = 'http://0.0.0.0:8545'
// provider set directly by env
if (process.env.WEB_HTTP_PROVIDER_URL)  rpcUrl = process.env.WEB_HTTP_PROVIDER_URL


export const config: IConfig = {
  privateKey : process.env.ACCOUNT_PRIVATE_KEY,

  web3HttpProviderUrl  : rpcUrl,
  waitForConfirmations : 2,
  contracts : { ERC20 },
  gasPrice  : Number(process.env.GAS_PRICE) || 40 * 1000000000,
  gasLimit  : Number(process.env.GAS_LIMIT) || 40 * 100000,
  
  DAppsPath : path.join(
    path.resolve() || '',
    process.env.DAPPS_PATH || 'data/dapps'
  ),
  
  signalServersSwarm: [
    '/dns4/signal2.dao.casino/tcp/443/wss/p2p-websocket-star/',
    '/dns4/signal3.dao.casino/tcp/443/wss/p2p-websocket-star/'
  ]
};
