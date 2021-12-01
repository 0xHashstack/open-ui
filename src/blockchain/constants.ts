export const defaultChainId = 42;

export const rpcUrls = {
  56: 'https://bsc-dataseed.binance.org/',
  1666700000: 'https://api.s0.b.hmny.io',
  42: "https://kovan.infura.io/v3/99b8947af7e14278ae235bb21eb81f53"
}

export const networkNames = {
  42: "Kovan Testnet",
  56: 'BSC Mainnet',
  1666700000: 'Harmony Testnet'
}

export const symbols = [
  // "0x574f4e4500000000000000000000000000000000000000000000000000000000", // WONE
  "0x555344542e740000000000000000000000000000000000000000000000000000", // USDT.t
  "0x555344432e740000000000000000000000000000000000000000000000000000", // USDC.t
  "0x4254432e74000000000000000000000000000000000000000000000000000000", // BTC.t
]

export const diamondAddress = "0xC63D5215B393743Cf255E0FF2260a4c17b23dD01";
export const addresses = {
  // wone: {
  //   1666700000: '0xD77B20D7301E6F16291221f50EB37589fdAB3720'
  // }
}

// export const markets = ["WONE", "USDT.t", "USDC.t", "BTC.t"];
export const markets = ["USDT.t", "USDC.t", "BTC.t"];
export const marketAddresses = [
  // '0xD77B20D7301E6F16291221f50EB37589fdAB3720', // WONE
  '0xe3367b181D051f756135c91c27DA23D958FE2708', // USDT.t
  '0x80a73792dB00175a889f5A6E03ED8E925b2cF06b', // USDC.t
  '0x2f92c5A5FCcb195a924f09aDCF430419450c3C34'  // BTC.t
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

