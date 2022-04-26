import ComptrollerWeb3Wrapper from './Comptroller';
import DepositWrapper from './Deposit';
import LiquidatorWrapper from './Liquidator';
import LoanWrapper from './Loan';
import OracleOpenWrapper from './OracleOpen';
import ReserveWrapper from './Reserve';
import Faucet from './Faucet';
import TokenList from './TokenList';
import MockBep20Wrapper from './MockBep20';
import PancakeWrapper from './Pancake';

export default class Web3Wrapper {
  signer: any;
  depositInstance: any;
  loanInstance: any;
  comptrollerInstance: any;
  liquidatorInstance: any;
  tokenListInstance: any;
  reserveInstance: any;
  oracleOpenInstance: any;
  faucetInstance: any;
  mockBep20Instance: any;
  pancakeInstance: any;

  constructor(_signer: any) {
    this.signer = _signer;
  }

  getDepositInstance() {
    if (!this.depositInstance) {
      this.depositInstance = new DepositWrapper(this.signer);
    }
    return this.depositInstance;

  }

  getLoanInstance() {
    if (!this.loanInstance) {
      this.loanInstance = new LoanWrapper(this.signer);
    }
    return this.loanInstance;
  }

  getComptrollerInstance() {
    if (!this.comptrollerInstance) {
      this.comptrollerInstance = new ComptrollerWeb3Wrapper(this.signer);
    }
    return this.comptrollerInstance;
  }

  getLiquidatorInstance() {
    if (!this.liquidatorInstance) {
      this.liquidatorInstance = new LiquidatorWrapper(this.signer);
    }
    return this.liquidatorInstance;
  }

  getTokenListInstance() {
    if (!this.tokenListInstance) {
      this.tokenListInstance = new TokenList(this.signer);
    }
    return this.tokenListInstance;
  }

  getReserveInstance() {
    if (!this.reserveInstance) {
      this.reserveInstance = new ReserveWrapper(this.signer);
    }
    return this.reserveInstance;
  }

  getOracleOpen() {
    if (!this.oracleOpenInstance) {
      this.oracleOpenInstance = new OracleOpenWrapper(this.signer);
    }
    return this.oracleOpenInstance;
  }

  getFaucetInstance() {
    if (!this.faucetInstance) {
      this.faucetInstance = new Faucet(this.signer);
    }
    return this.faucetInstance;
  }

  getMockBep20Instance() {
    if(!this.mockBep20Instance) {
      this.mockBep20Instance = new MockBep20Wrapper(this.signer);
    }
    return this.mockBep20Instance;
  }

  getPancakeInstance() {
    if (!this.pancakeInstance) {
      this.pancakeInstance = new PancakeWrapper(this.signer)
    }
    return this.pancakeInstance
  }
}
