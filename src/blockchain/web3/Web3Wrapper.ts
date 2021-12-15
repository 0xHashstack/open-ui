import Web3 from 'web3';
import ComptrollerWeb3Wrapper from './Comptroller';
import DepositWrapper from './Deposit';
import LiquidatorWrapper from './Liquidator';
import LoanWrapper from './Loan';
import OracleOpenWrapper from './OracleOpen';
import ReserveWrapper from './Reserve';
import TokenList from './TokenList';

export default class Web3Wrapper {
  web3: Web3;
  chainId: number;
  account: string;
  wrapperOptions: any;

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
    return new DepositWrapper(this.wrapperOptions);
  }

  getLoanInstance() {
    return new LoanWrapper(this.wrapperOptions);
  }

  getComptrollerInstance() {
    return new ComptrollerWeb3Wrapper(this.wrapperOptions);
  }

  getLiquidatorInstance() {
    return new LiquidatorWrapper(this.wrapperOptions);
  }

  getTokenListInstance() {
    return new TokenList(this.wrapperOptions);
  }

  getReserveInstance() {
    return new ReserveWrapper(this.wrapperOptions);
  }

  getOracleOpen() {
    return new OracleOpenWrapper(this.wrapperOptions);
  }

}
