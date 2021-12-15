import Contract from './Contract';
import abi from '../abis/Liquidator.json';

class Liquidator extends Contract {
  constructor(options, address) {
    super(options, "Liquidator", abi, address);
  }
}

export default Liquidator;
