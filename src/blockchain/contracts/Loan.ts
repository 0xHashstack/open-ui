import Contract from './Contract';
import abi from '../abis/diamond.json';

class Loan extends Contract {
  constructor(options, address) {
    super(options, "Loan", abi, address);
  }
}

export default Loan;
