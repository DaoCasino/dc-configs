import { ContractInfo } from './index';

// Ropsten by default
let contractsDataPaths = {
  addresses: '../jsonData/addresses.json',
  abi: '../jsonData/contractsABI/'
};

// Contracts from local testrpc
if (process.env.DC_NETWORK === 'local') {
  contractsDataPaths = {
    addresses: '../../dc-protocol/v_0.1/build/addresses.json',
    abi: '../../dc-protocol/v_0.1/build/contracts/'
  };
}

const ERC20: ContractInfo = {
  address: '0x5D1E47F703729fc87FdB9bA5C20fE4c1b7c7bf57',

  abi: require('../jsonData/contractsABI/ERC20.json').abi
};
const Dice: ContractInfo = {
  address: '0xf4dac7a329bcabc02c62d438d1f2dd226680b6f6',
  abi: require('../jsonData/contractsABI/Dice.json').abi
};

export { ERC20, Dice };
