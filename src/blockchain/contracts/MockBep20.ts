import Contract from "./Contract"
import abi from "../abis/BEP20Token.json"

class MockBep20 extends Contract {
  constructor(options, address) {
    super(options, "MockBep20", abi, address)
  }
}

export default MockBep20
