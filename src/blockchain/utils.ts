import Web3 from 'web3';
import { defaultChainId, rpcUrls, symbols, latestPrice, decimals, diamondAddress } from './constants';
import { BigNumber } from "bignumber.js";
import Deposit from './contracts/Deposit';
import TokenList from './contracts/TokenList';
import Loan1 from './contracts/Loan1';
import Reserve from './contracts/Reserve';

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
  return new BigNumber(value).shiftedBy(decimal);
}

export const toFixed = (num, digit) => {
  if (isNaN(num)) return 0;
  var fixed_num = Number(num).toFixed(digit)
  return Number(fixed_num.toString());
}

export const getDashboardData = async () => {
  let defaultContractOptions = getDefaultContractOptions();
  const deposit = new Deposit(defaultContractOptions, diamondAddress);
  const loan1 = new Loan1(defaultContractOptions, diamondAddress);
  const reserve = new Reserve(defaultContractOptions, diamondAddress);

  let reserveDeposit = 0;
  let reserveLoan = 0;

  for(let i = 0 ; i < symbols.length; i++) {
    reserveDeposit += Number(latestPrice[i]) * BNtoNum(Number(await deposit.call("avblReservesDeposit", symbols[i])), decimals[i]);
  }

  for(let i = 0 ; i < symbols.length; i++) {
    reserveLoan += Number(latestPrice[i]) * BNtoNum(Number(await loan1.call("avblReservesLoan", symbols[i])), decimals[i]);
  }

  const marketReserveUsdt = await reserve.call("marketReserves", symbols[0]);
  const marketReserveUsdc = await reserve.call("marketReserves", symbols[1]);
  const marketReserveBtc = await reserve.call("marketReserves", symbols[2]);
  const avblMarketReserveUsdt = await reserve.call("avblMarketReserves", symbols[0]);
  const avblMarketReserveUsdc = await reserve.call("avblMarketReserves", symbols[1]);
  const avblMarketReserveBtc = await reserve.call("avblMarketReserves", symbols[2]);

  return {
    reserveDeposit: Number(reserveDeposit),
    reserveLoan: Number(reserveLoan),
    marketreserveUsdt: BNtoNum(Number(marketReserveUsdt)),
    marketReserveUsdc: BNtoNum(Number(marketReserveUsdc)),
    marketReserveBtc: BNtoNum(Number(marketReserveBtc)),

    avblMarketReserveUsdt: BNtoNum(Number(avblMarketReserveUsdt)),
    avblMarketReserveUsdc: BNtoNum(Number(avblMarketReserveUsdc)),
    avblMarketReserveBtc: BNtoNum(Number(avblMarketReserveBtc))    
  }
}

export const isMarketSupported = async (symbol) => {
  const tokenList = new TokenList(getDefaultContractOptions(), diamondAddress);
  const isSupported = await tokenList.call("isMarketSupported", symbol);
  return {
    isSupport : isSupported
  }
}