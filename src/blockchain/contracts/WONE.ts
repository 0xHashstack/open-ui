import Contract from './Contract';
import abi from '../abis/WONE.json';

class WONE extends Contract {
  constructor(options, address) {
    super(options, "WONE", abi, address);
  }
}

export default WONE;
