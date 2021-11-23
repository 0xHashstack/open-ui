import Contract from './Contract';
import abi from '../abis/diamond.json';

class Loan1 extends Contract {
  constructor(options, address) {
    super(options, "Loan1", abi, address);
  }
}

export default Loan1;
