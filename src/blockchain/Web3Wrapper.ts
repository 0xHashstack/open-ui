import Web3 from 'web3';
import { diamondAddress } from './constants';
import Deposit from './contracts/Deposit';
import Loan from './contracts/Loan';
import Loan1 from './contracts/Loan1';
// import WONE from './contracts/WONE';
import { NumToBN } from './utils';

export default class Web3Wrapper {
  web3: Web3;
  chainId: string;
  account: string;
  wrapperOptions: any;

  // Contracts
  deposit: Deposit;
  loanContract: Loan; 
  loan1: Loan1;
  // wone: WONE;

  constructor(web3, chainId, account, options = {}) {

    this.web3 = web3;
    this.chainId = chainId;
    this.account = account;

    this.wrapperOptions = {
      web3, chainId, account,
      ...options
    }

    this.deposit = new Deposit(this.wrapperOptions, diamondAddress);
    this.loanContract = new Loan(this.wrapperOptions, diamondAddress);
    this.loan1 = new Loan1(this.wrapperOptions, diamondAddress);
    // this.wone = new WONE(this.wrapperOptions, addresses.wone[this.chainId]);
    // this.loan1.on("CollCount", function(count){console.log("CollCount: ", count)}, "");
    // this.loan1.on("AddCollateral", function(_account,_id, amount,timestamp, tag){
    //   console.log("AddCollateral ret vals are ", _account, _id, amount,timestamp,tag);
    // }, "");

    // this.loanContract.on("TestEvent", function(ret){
    //   console.log("TestEvent ret ", ret);
    // }, "");
  }
  
  async addToDeposit(market: string, commitment: string, amount: number, decimal: number) {
    try {
      // if(market === symbols[0]){
      //   await this.wone.send("deposit", {value: NumToBN(amount, decimal)});
      //   await this.wone.send("transfer", {}, this.account, NumToBN(amount, decimal));
      // }
      const tx = await this.deposit.send("createDeposit", {}, market, commitment, NumToBN(amount, decimal));
      // const tx = await this.loanContract.send("testFunc", {});
      // console.log("test ret is ", tx);
      return tx;
      
    } catch (e) {
      console.log("addToDeposit Error amount is :", e);
      return false;
    }
  }
  async withdrawDeposit(market: string, commitment: string, amount: number, savingType: number, decimal: number) {
    try {
      const tx = await this.deposit.send("withdrawDeposit", {}, market, commitment, NumToBN(amount, decimal), savingType);
      // if(market === symbols[0]){
      //   await this.wone.send("withdraw", {value: NumToBN(amount, decimal)});
      // }
      return tx;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async loanRequest(
    _market: string,
		_commitment: string,
		_loanAmount: number,
    _loanDecimal: number,
		_collateralMarket: string,
		_collateralAmount: number,
    _collateralDecimal: number
  ) {
    console.log("loanRequest");
    try{
      // console.log("_market", _market);
      console.log("loanrequest ", _market, " ", _commitment);
      const tx = await this.loan1.send("loanRequest", {}, _market, _commitment, NumToBN(_loanAmount, _loanDecimal), _collateralMarket, NumToBN(_collateralAmount, _collateralDecimal));
      console.log("loan request", tx);
      return tx;
    } catch(e) {
      console.log("loanRequest Error amount is :", _loanAmount, e);
      return false;
    }
  }

  async addCollateral(
    _market: string,
    _commitment: string,
    _collateralMarket: string,
    _collateralAmount: number,
    _collateralDecimal: number
  ) {
    try {
      console.log("addcollateral ", _market, " ", _commitment, " ", _collateralMarket, " ", _collateralAmount);
      const tx = await this.loan1.send("addCollateral", {}, _market, _commitment, _collateralMarket, NumToBN(_collateralAmount, _collateralDecimal));
      console.log("addcollateral ", tx);
      return tx;
    } catch(e) {
      console.log("addcollateral Error ", e);
      return false;
    }
  }

  async repayLoan(market: string, commitment: string, amount: number, decimal: number) {
    try {
      console.log("repayLoan");
      const tx = await this.loanContract.send("repayLoan", {}, market, commitment, NumToBN(amount, decimal));
      return tx;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async swapLoan(market: string, commitment: string, swapMarket: string) {
    try {
      const tx = await this.loanContract.send("swapLoan", {}, market, commitment, swapMarket);
      console.log("swapLoan", tx);
      return tx;
    } catch(e) {
      console.log(e);
      return false;
    }
  }

}
