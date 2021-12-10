import Contract from './Contract';
import abi from '../abis/TokenList.json';

class TokenList extends Contract {
  constructor(options, address) {
    super(options, "TokenList", abi, address);
  }
}

export default TokenList;
