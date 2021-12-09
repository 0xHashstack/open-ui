import Web3 from 'web3';
import ComptrollerWeb3Wrapper from './Comptroller';
import DepositWeb3Wrapper from './Deposit';
import LoanWeb3Wrapper from './Loan';

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
    return new DepositWeb3Wrapper(this.wrapperOptions);
  }

  getLoanInstance() {
    return new LoanWeb3Wrapper(this.wrapperOptions);
  }

  getComptrollerInstance() {
    return new ComptrollerWeb3Wrapper(this.wrapperOptions);
  }

}
