import { ContractInfo } from './index';

const payChannelContract: ContractInfo = {
  address: '0x674f8b960d103ccbabc0b0201da0cd52b9f5d352',
  abi: require('../jsonData/contractsABI/Dice.json').abi
};

const ERC20: ContractInfo = {
  address: '0x5D1E47F703729fc87FdB9bA5C20fE4c1b7c7bf57',
  abi: require('../jsonData/contractsABI/ERC20.json').abi
};
export { payChannelContract, ERC20 };
