import Web3 from 'web3';
import { defaultChainId, rpcUrls } from './constants';
import { BigNumber } from "bignumber.js";
import TokenList from './contracts/TokenList';


export const createWeb3 = (provider) => {
  var realProvider;

  if (typeof provider === 'string') {
    if (provider.includes('wss')) {
      realProvider = new Web3.providers.WebsocketProvider(
        provider
      );
    } else {
      realProvider = new Web3.providers.HttpProvider(
        provider
      );
    }
  } else {
    realProvider = provider;
  }

  return new Web3(realProvider);
}

export const getDefaultWeb3 = () => {
  return createWeb3(rpcUrls[defaultChainId]);
}

export const getDefaultContractOptions = () => {
  const web3 = getDefaultWeb3();
  return { 
    web3, 
    chainId: defaultChainId, 
    account: null 
  };
}

export const BNtoNum = (value, decimal = 18) => {
  return new BigNumber(value).shiftedBy(-decimal).toNumber();
}

export const NumToBN = (value, decimal = 18) => {
  return new BigNumber(value).shiftedBy(decimal).toString();
}

export const GetErrorText = (err) => {
  if(err) {
    return JSON.parse(err.split('.')[1]).message || 'Oops! Something went wrong.';
  }
}

export const toFixed = (num, digit) => {
  if (isNaN(num)) return 0;
  var fixed_num = Number(num).toFixed(digit)
  return Number(fixed_num.toString());
}


export const isMarketSupported = async (symbol) => {
  const tokenList = new TokenList(getDefaultContractOptions(), process.env.REACT_APP_DIAMOND_ADDRESS);
  const isSupported = await tokenList.call("isMarketSupported", symbol);
  return {
    isSupport : isSupported
  }
}