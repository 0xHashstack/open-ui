import Contract from './Contract';
import abi from '../abis/OracleOpen.json';

class OracleOpen extends Contract {
  constructor(options, address) {
    super(options, "OracleOpen", abi, address);
  }
}

export default OracleOpen;
