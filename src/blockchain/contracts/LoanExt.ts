import Contract from './Contract';
import abi from '../abis/LoanExt.json';

class LoanExt extends Contract {
  constructor(options, address) {
    super(options, "LoanExt", abi, address);
  }
}

export default LoanExt;
