import Contract from './Contract';
import abi from '../abis/LoanExtv1.json';

class LoanExtv1 extends Contract {
  constructor(options, address) {
    super(options, "LoanExt", abi, address);
  }
}

export default LoanExtv1;
