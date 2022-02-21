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

export const fixedSpecial = (num: number, n: number) => {
  var str = num.toFixed(n);
  if (str.indexOf('e+') === -1)
    return str;

  // if number is in scientific notation, pick (b)ase and (p)ower
  str = str.replace('.', '').split('e+').reduce(function(b, p: any) {
    return b + Array(p - b.length + 2).join('0');
  });
  
  if (n > 0)
    str += '.' + Array(n + 1).join('0');
  
  return str;
}

export const BNtoNum = (value: number, decimal: number= 18) => {
  const val = new BigNumber(value).shiftedBy(-decimal).toNumber();
  return value < 1 ? value : fixedSpecial(val,0);
}

export const NumToBN = (value: number, decimal: number= 18) => {
  const val = new BigNumber(value).shiftedBy(decimal).toNumber();
  return val < 1 ? val.toPrecision(): fixedSpecial(val,0);
}

export const GetErrorText = (err) => {
  if (err) {
    try {
      return JSON.parse(err.split('.')[1]).message || 'Oops! Something went wrong.';
    }
    catch (error) {
      console.log(error);
      return err;
    }
  }
  else {
    return 'Oops! Something went wrong.';
  }
}

export const toFixed = (num: number, digit: number) => {
  if (isNaN(num)) return 0;
  var fixed_num = Number(num).toFixed(digit)
  return Number(fixed_num.toString());
}


export const isMarketSupported = async (symbol: string) => {
  const tokenList = new TokenList(getDefaultContractOptions(), process.env.REACT_APP_DIAMOND_ADDRESS);
  const isSupported = await tokenList.call("isMarketSupported", symbol);
  return {
    isSupport: isSupported
  }
}