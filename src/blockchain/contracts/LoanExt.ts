import Contract from './Contract';
import abi from '../abis/LoanExt.json';

class LoanExt extends Contract {
  constructor(options, address) {
    super(options, "LoanExtv1", abi, address);
  }
}

export default LoanExt;
