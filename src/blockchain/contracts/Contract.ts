import Web3 from "web3";
import { AbiItem } from 'web3-utils';
import { Contract as Web3Contract } from "web3-eth-contract";

class Contract {
  web3: Web3;
  chainId: number;
  account: string | null;
  tag: string | null;
  events: object;
  contract: Web3Contract;

  constructor(options, tag: string, abi, address: string) {
    this.web3 = options.web3;
    this.chainId = options.chainId;
    this.account = options.account;

    this.contract = new this.web3.eth.Contract(abi as AbiItem[], address);

    if (tag) this.tag = tag;
    else this.tag = "contract-" + Date.now();

    this.events = {};
  }

  estimateGas = (method, options, params) => {
    return this.contract.methods[method].apply(this, params).estimateGas(options);
  }

  call(method, ...params) {
    return this.contract.methods[method](...params).call()
  }

  send(method, options, ...params) {
    options = {...options, from: this.account}
    return this.estimateGas(method, options, params).then((gasLimit) => {
      options["gas"] = Math.round(1.3 * gasLimit);
      return this.contract.methods[method].apply(this, params).send(options);
    })
  }

  on(event, callback, onerr) {
    if (this.events[event])
      return;
    this.contract.events[event]((err, res) => {
      if (err === null) {
        callback(res.returnValues, this.tag);
      } else {
        if (onerr) onerr(err);
        else console.log(err);
      }
    });
    this.events[event] = true;
  }
}

export default Contract;