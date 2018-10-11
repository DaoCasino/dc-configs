import { ContractInfo } from './index';

let contractsDataPaths = {
  addresses: '../jsonData/addresses.json',
  abi: '../jsonData/contractsABI/'
};

if (process.env.DC_NETWORK === 'local') {
  contractsDataPaths = {
    addresses: '../../dc-protocol/v_0.1/build/addresses.json',
    abi: '../../dc-protocol/v_0.1/build/contracts/'
  };
}

const ERC20: ContractInfo = {
  address: require(contractsDataPaths.addresses).ERC20,
  abi: require(contractsDataPaths.abi + 'ERC20.json').abi
};

export { ERC20 };
