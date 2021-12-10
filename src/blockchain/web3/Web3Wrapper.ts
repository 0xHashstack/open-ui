import Web3 from 'web3';
import ComptrollerWeb3Wrapper from './Comptroller';
import DepositWrapper from './Deposit';
import LiquidatorWrapper from './Liquidator';
import LoanWrapper from './Loan';

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
    return new LiquidatorWrapper(this.wrapperOptions)
  }

}
