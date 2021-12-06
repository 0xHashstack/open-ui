import Contract from './Contract';
import abi from '../abis/Comptroller.json';

class Comptroller extends Contract {
  constructor(options, address) {
    super(options, "Comptroller", abi, address);
  }
}

export default Comptroller;
