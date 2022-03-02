import { defaultChainId, rpcUrls, DecimalsMap } from './constants';
import { BigNumber } from "bignumber.js";
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { utils } from "ethers";
import TokenList from './contracts/TokenList';


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
  return val < 1 ? val.toPrecision(): fixedSpecial(val,0);
}

export const NumToBN = (value: number, decimal: number= 18) => {
  const val = new BigNumber(value).shiftedBy(decimal).toNumber();
  return val < 1 ? val.toPrecision(): fixedSpecial(val,0);
}

export const GetErrorText = (err) => {
  // if (err) {
  //   try {
  //     return JSON.parse(err.split('.')[1]).message || 'Oops! Something went wrong.';
  //   }
  //   catch (error) {
  //     console.log(error);
  //     return err;
  //   }
  // }
  // else {
  //   return 'Oops! Something went wrong.';
  // }
  if (typeof(err) == 'string') {
    return err;
  }
  else if(err.data)
    return err.data.message;
  else if(err.message)
    return err.message;
  else
    return "Oops! Something went wrong."
}

export const toFixed = (num: number, digit: number) => {
  if (isNaN(num)) return 0;
  var fixed_num = Number(num).toFixed(digit)
  return Number(fixed_num.toString());
}


// export const isMarketSupported = async (symbol: string) => {
//   const tokenList = new TokenList(getDefaultContractOptions(), process.env.REACT_APP_DIAMOND_ADDRESS);
//   const isSupported = await tokenList.call("isMarketSupported", symbol);
//   return {
//     isSupport: isSupported
//   }
// }

export const OnSuccessCallback = (data, eventName, key, message) => {
  const res = data[eventName]['returnValues'];
  let amount = BNtoNum(Number(res.amount), DecimalsMap[res[key]]);
  toast.success(`${message}: ${amount}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
}

export const OnErrorCallback = (err) => {
  if (err instanceof Object) {
    toast.error(`${GetErrorText(String(err['message']))}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
  } else {
    toast.error(`${GetErrorText(String(err))}`, { position: toast.POSITION.BOTTOM_RIGHT, closeOnClick: true});
  }
}

export const bytesToString = (bytes) =>{
  return utils.parseBytes32String(bytes);
}

