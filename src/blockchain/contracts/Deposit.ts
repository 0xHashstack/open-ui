import Contract from './Contract';
import abi from '../abis/diamond.json';

class Deposit extends Contract {
  constructor(options, address) {
    super(options, "Deposit", abi, address);
  }
}

export default Deposit;
