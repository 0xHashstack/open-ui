import Contract from './Contract';
import abi from '../abis/diamond.json';

class Reserve extends Contract {
  constructor(options, address) {
    super(options, "Reserve", abi, address);
  }
}

export default Reserve;
