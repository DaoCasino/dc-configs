import { ContractInfo } from './index'

// Ropsten by default
let contractsDataPaths = {
  addresses: '../jsonData/addresses.json',
  abi: '../jsonData/contractsABI/'
}

// Contracts from local testrpc
if (process.env.DC_NETWORK === 'local') {
  contractsDataPaths = {
    addresses: '../../dc-protocol/v_0.1/build/addresses.json',
    abi: '../../dc-protocol/v_0.1/build/contracts/'
  }
}

const ERC20: ContractInfo = {
  address: require(contractsDataPaths.addresses).ERC20,
  abi: require(contractsDataPaths.abi + 'ERC20.json').abi
}
const Dice: ContractInfo = {
  address: require(contractsDataPaths.addresses).Dice,
  abi: require(contractsDataPaths.abi + 'Dice.json').abi
}

export { ERC20, Dice }
