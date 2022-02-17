import Web3 from 'web3';
import ComptrollerWeb3Wrapper from './Comptroller';
import DepositWrapper from './Deposit';
import LiquidatorWrapper from './Liquidator';
import LoanWrapper from './Loan';
import OracleOpenWrapper from './OracleOpen';
import ReserveWrapper from './Reserve';
import Faucet from './Faucet';
import TokenList from './TokenList';
import MockBep20Wrapper from './MockBep20';

export default class Web3Wrapper {
  web3: Web3;
  chainId: number;
  account: string;
  wrapperOptions: any;
  depositInstance: any;
  loanInstance: any;
  comptrollerInstance: any;
  liquidatorInstance: any;
  tokenListInstance: any;
  reserveInstance: any;
  oracleOpenInstance: any;
  faucetInstance: any;
  mockBep20Instance: any;

  constructor(web3, chainId, account, options = {}) {

    this.web3 = web3;
    this.chainId = chainId;
    this.account = account;

    this.wrapperOptions = {
      web3, chainId, account,
      ...options
    }
  }

  getDepositInstance() {
    if (!this.depositInstance) {
      this.depositInstance = new DepositWrapper(this.wrapperOptions);
    }
    return this.depositInstance;

  }

  getLoanInstance() {
    if (!this.loanInstance) {
      this.loanInstance = new LoanWrapper(this.wrapperOptions);;
    }
    return this.loanInstance;
  }

  getComptrollerInstance() {
    if (!this.comptrollerInstance) {
      this.comptrollerInstance = new ComptrollerWeb3Wrapper(this.wrapperOptions);;
    }
    return this.comptrollerInstance;
  }

  getLiquidatorInstance() {
    if (!this.liquidatorInstance) {
      this.liquidatorInstance = new LiquidatorWrapper(this.wrapperOptions);;
    }
    return this.liquidatorInstance;
  }

  getTokenListInstance() {
    if (!this.tokenListInstance) {
      this.tokenListInstance = new TokenList(this.wrapperOptions);;
    }
    return this.tokenListInstance;
  }

  getReserveInstance() {
    if (!this.reserveInstance) {
      this.reserveInstance = new ReserveWrapper(this.wrapperOptions);;
    }
    return this.reserveInstance;
  }

  getOracleOpen() {
    if (!this.oracleOpenInstance) {
      this.oracleOpenInstance = new OracleOpenWrapper(this.wrapperOptions);;
    }
    return this.oracleOpenInstance;
  }

  getFaucetInstance() {
    if (!this.faucetInstance) {
      this.faucetInstance = new Faucet(this.wrapperOptions);
    }
    return this.faucetInstance;
  }

  getMockBep20Instance() {
    if(!this.mockBep20Instance) {
      this.mockBep20Instance = new MockBep20Wrapper(this.wrapperOptions);
    }
    return this.mockBep20Instance;
  }
}
