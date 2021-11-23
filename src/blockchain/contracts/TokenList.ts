import Contract from './Contract';
import abi from '../abis/diamond.json';

class TokenList extends Contract {
  constructor(options, address) {
    super(options, "TokenList", abi, address);
  }
}

export default TokenList;
