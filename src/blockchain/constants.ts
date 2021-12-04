export const defaultChainId = 3;

export const rpcUrls = {
  56: 'https://bsc-dataseed.binance.org/',
  1666700000: 'https://api.s0.b.hmny.io',
  42: "https://kovan.infura.io/v3/99b8947af7e14278ae235bb21eb81f53",
  3: "https://eth-ropsten.alchemyapi.io/v2/fxrejtNAKunh--Iym4w8DI4mpb4pEEbA"
}

export const networkNames = {
  42: "Kovan Testnet",
  56: 'BSC Mainnet',
  1666700000: 'Harmony Testnet',
  3: "ropsten Testnet"
}

export const symbols = [
  // "0x574f4e4500000000000000000000000000000000000000000000000000000000", // WONE
  "0x555344542e740000000000000000000000000000000000000000000000000000", // USDT.t
  "0x555344432e740000000000000000000000000000000000000000000000000000", // USDC.t
  "0x4254432e74000000000000000000000000000000000000000000000000000000", // BTC.t
]

export const diamondAddress = "0x867bbd342C4cFc792051450aCc662827eF0a4267";
export const addresses = {
  // wone: {
  //   1666700000: '0xD77B20D7301E6F16291221f50EB37589fdAB3720'
  // }
}

// export const markets = ["WONE", "USDT.t", "USDC.t", "BTC.t"];
export const markets = ["USDT.t", "USDC.t", "BTC.t"];
export const marketAddresses = [
  // '0xD77B20D7301E6F16291221f50EB37589fdAB3720', // WONE
  '0x0fcb7a59c1af082ed077a972173cf49430efd0dc', // USDT.t
  '0xe767f958a81df36e76f96b03019edfe3aafd1ccd', // USDC.t
  '0xa48f5ab4cf6583029a981ccfaf0626ea37123a14'  // BTC.t
]
export const latestPrice = [
  // '0.2886',
  '1',
  '1',
  '64931.45'
]

// export const decimals = [18,18,18,8];
export const decimals = [18,18,8];

export const comit_NONE = "0x636f6d69745f4e4f4e4500000000000000000000000000000000000000000000";
export const comit_TWOWEEKS = "0x636f6d69745f54574f5745454b53000000000000000000000000000000000000";
export const comit_ONEMONTH = "0x636f6d69745f4f4e454d4f4e5448000000000000000000000000000000000000";
export const comit_THREEMONTHS = "0x636f6d69745f54485245454d4f4e544853000000000000000000000000000000";

