import Contract from "./Contract"
import abi from "../abis/MockBep20.json"

class MockBep20 extends Contract {
  constructor(options, address) {
    super(options, "MockBep20", abi, address)
  }
}

export default MockBep20
