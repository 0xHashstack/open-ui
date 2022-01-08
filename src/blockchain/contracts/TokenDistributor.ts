import Contract from './Contract';
import abi from '../abis/TokenDistributor.json';

class TokenDistributor extends Contract {
  constructor(options, address) {
    super(options, "TokenDistributor", abi, address);
  }
}

export default TokenDistributor;
