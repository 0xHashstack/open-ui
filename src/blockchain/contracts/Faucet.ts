import Contract from './Contract';
import abi from '../abis/Faucet.json';

class Faucet extends Contract {
  constructor(options, address) {
    super(options, "Faucet", abi, address);
  }
}

export default Faucet;
