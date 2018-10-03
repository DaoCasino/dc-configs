import path from "path";
import { payChannelContract, ERC20 } from "./contracts";
// export interface ContractInfo {
//   abi: { [key: string]: any };
//   address: string;
// }
// const readContract = (name: string): ContractInfo => {
//   const address = process.env[`${name}_ADDRESS`];
//   const abiString = process.env[`${name}_ABI`];
//   if (!address || !abiString)
//     throw new Error(
//       `Error reading contract configuration. Please configure ${name}_ABI and ${name}_ADDRESS environment variables`
//     );
//   let abi;
//   try {
//     abi = JSON.parse(abi);
//   } catch (error) {
//     throw new Error(
//       `Incorrect JSON in ${name}_ABI environment variable: ${error.message}`
//     );
//   }
//   return { abi, address };
// };
// const ERC20: ContractInfo = readContract("ERC20");

// const payChannelContract = readContract("PAY_CHANNEL_CONTRACT");
export interface ContractInfo {
  abi: any[];
  address: string;
}
export interface IConfig {
  name: string;
  signalServersSwarm: string[];
  contracts: {
    ERC20: ContractInfo;
    payChannelContract: ContractInfo;
  };
  privateKey: string;
  gasPrice: number;
  gasLimit: number;
  waitForConfirmations: number;
  rules: { depositX: number };
  web3HttpProviderUrl: string;
  faucetServerUrl: string;
  DAppsPath: string;
}

export const config: IConfig = {
  name: "sdk",

  signalServersSwarm: [
    "/dns4/signal2.dao.casino/tcp/443/wss/p2p-websocket-star/",
    "/dns4/signal3.dao.casino/tcp/443/wss/p2p-websocket-star/"
  ],

  contracts: {
    ERC20,
    payChannelContract
  },
  waitForConfirmations: 2,
  gasPrice: Number(process.env.GAS_PRICE) || 40 * 1000000000,
  gasLimit: Number(process.env.GAS_LIMIT) || 40 * 100000,
  rules: { depositX: 2 },
  faucetServerUrl: "https://faucet.dao.casino/",
  web3HttpProviderUrl:
    process.env.WEB_HTTP_PROVIDER_URL ||
    "https://ropsten.infura.io/JCnK5ifEPH9qcQkX0Ahl",
  DAppsPath: path.join(
    path.resolve() || "",
    process.env.DAPPS_PATH || "data/dapps"
  ),
  privateKey: process.env.ACCOUNT_PRIVATE_KEY
};
