import { ContractInfo } from './index';

const payChannelContract: ContractInfo = {
  address: '0xF4daC7a329BcAbC02C62d438D1f2dD226680B6F6',
  abi: require('../jsonData/contractsABI/Dice.json').abi
};

const ERC20: ContractInfo = {
  address: '0x5D1E47F703729fc87FdB9bA5C20fE4c1b7c7bf57',
  abi: require('../jsonData/contractsABI/ERC20.json').abi
};
export { payChannelContract, ERC20 };
