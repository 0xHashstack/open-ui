export const defaultChainId = 3

export const rpcUrls = {
  56: "https://bsc-dataseed.binance.org/",
  1666700000: "https://api.s0.b.hmny.io",
  42: "https://kovan.infura.io/v3/99b8947af7e14278ae235bb21eb81f53",
  3: "https://eth-ropsten.alchemyapi.io/v2/fxrejtNAKunh--Iym4w8DI4mpb4pEEbA",
  97: "https://nd-400-266-190.p2pify.com/1efac602169fba8d5bf0589315ec436a",
  1337: "http://127.0.0.1:8545/"
};

export const networkNames = {
  42: "Kovan Testnet",
  56: "BSC Mainnet",
  1666700000: "Harmony Testnet",
  3: "ropsten Testnet",
}

export const marketDataOnChain = {
  "97": {
    marketAddresses: [
      // '0xD77B20D7301E6F16291221f50EB37589fdAB3720', // WONE
      "0x00a36364Ce052CcA9FCE353f32959BD9Ec8dfb40", // USDT.t
      "0xB539329a9566418c8E099109214a0c51C11BDE1e", // USDC.t
      "0x60E4Af9C17c12a7505064533A059Fb3eDE24EE61", // BTC.t
      "0x793e9A0DE44089CB0e357Aa7AF8f80FcFAfE8860", // SXP
      "0x7450A3Bdf31086e01020183efA659b5DA39958B6", // CAKE
      "0x22F1dA29427daBd7c7c9bE6ba4FAeA8F908AC3E7", // BNB
    ],
    DecimalsMap: {
      "BTC": 8,
      "BTC.t": 8,
      "0x4254432e74000000000000000000000000000000000000000000000000000000": 8,
      "USDT": 8,
      "USDT.t": 8,
      "0x555344542e740000000000000000000000000000000000000000000000000000": 8,
      "USDC.t": 8,
      "USDC": 8,
      "0x555344432e740000000000000000000000000000000000000000000000000000": 8,
      "BNB": 8,
      "BNB.t": 8,
      "0x57424e4200000000000000000000000000000000000000000000000000000000": 8,
      "WBNB": 8,
      "WBNB.t": 8,
    }
  },
  "56": {
    marketAddresses: [
      // '0xD77B20D7301E6F16291221f50EB37589fdAB3720', // WONE
      "0x55d398326f99059ff775485246999027b3197955", // USDT.t
      "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", // USDC.t
      "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c", // BTC.t
      "0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A", // SXP
      "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", // CAKE
      "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", // BNB
    ],
    DecimalsMap: {
      "BTC": 18,
      "BTC.t": 18,
      "0x4254432e74000000000000000000000000000000000000000000000000000000": 18,
      "USDT": 18,
      "USDT.t": 18,
      "0x555344542e740000000000000000000000000000000000000000000000000000": 18,
      "USDC.t": 18,
      "USDC": 18,
      "0x555344432e740000000000000000000000000000000000000000000000000000": 18,
      "BNB": 18,
      "BNB.t": 18,
      "0x57424e4200000000000000000000000000000000000000000000000000000000": 18,
      "WBNB": 18,
      "WBNB.t": 18,
    }
  },
  "1337": {
    marketAddresses: [
      // '0xD77B20D7301E6F16291221f50EB37589fdAB3720', // WONE
      "0x00a36364Ce052CcA9FCE353f32959BD9Ec8dfb40", // USDT.t
      "0xB539329a9566418c8E099109214a0c51C11BDE1e", // USDC.t
      "0x60E4Af9C17c12a7505064533A059Fb3eDE24EE61", // BTC.t
      "0x793e9A0DE44089CB0e357Aa7AF8f80FcFAfE8860", // SXP
      "0x7450A3Bdf31086e01020183efA659b5DA39958B6", // CAKE
      "0x22F1dA29427daBd7c7c9bE6ba4FAeA8F908AC3E7", // BNB
    ],
    DecimalsMap: {
      "BTC": 8,
      "BTC.t": 8,
      "0x4254432e74000000000000000000000000000000000000000000000000000000": 8,
      "USDT": 8,
      "USDT.t": 8,
      "0x555344542e740000000000000000000000000000000000000000000000000000": 8,
      "USDC.t": 8,
      "USDC": 8,
      "0x555344432e740000000000000000000000000000000000000000000000000000": 8,
      "BNB": 8,
      "BNB.t": 8,
      "0x57424e4200000000000000000000000000000000000000000000000000000000": 8,
      "WBNB": 8,
      "WBNB.t": 8,
    }
  },
}

export const SymbolsMap = {
  WONE: "0x574f4e4500000000000000000000000000000000000000000000000000000000", // WONE
  USDT: "0x555344542e740000000000000000000000000000000000000000000000000000", // USDT.t
  "USDT.t":
    "0x555344542e740000000000000000000000000000000000000000000000000000",
  USDC: "0x555344432e740000000000000000000000000000000000000000000000000000", // USDC.t
  "USDC.t":
    "0x555344432e740000000000000000000000000000000000000000000000000000",
  BTC: "0x4254432e74000000000000000000000000000000000000000000000000000000", // BTC.t
  "BTC.t": "0x4254432e74000000000000000000000000000000000000000000000000000000",
  SXP: "0x5358500000000000000000000000000000000000000000000000000000000000",
  CAKE: "0x43414b4500000000000000000000000000000000000000000000000000000000", // CAKE
  BNB: "0x57424e4200000000000000000000000000000000000000000000000000000000",
  WBNB: "0x57424e4200000000000000000000000000000000000000000000000000000000",
  "BNB.t": "0x57424e4200000000000000000000000000000000000000000000000000000000",
  ETH: "0x4554480000000000000000000000000000000000000000000000000000000000", // ETH
}

export const symbols = [
  // "0x574f4e4500000000000000000000000000000000000000000000000000000000", // WONE
  "0x555344542e740000000000000000000000000000000000000000000000000000", // USDT.t
  "0x555344432e740000000000000000000000000000000000000000000000000000", // USDC.t
  "0x4254432e74000000000000000000000000000000000000000000000000000000", // BTC.t
  "0x57424e4200000000000000000000000000000000000000000000000000000000",
]

// export const markets = ["WONE", "USDT.t", "USDC.t", "BTC.t"];
export const markets = ["USDT.t", "USDC.t", "BTC.t"]
export const marketAddresses = [
  // '0xD77B20D7301E6F16291221f50EB37589fdAB3720', // WONE
  "0x00a36364Ce052CcA9FCE353f32959BD9Ec8dfb40", // USDT.t
  "0xB539329a9566418c8E099109214a0c51C11BDE1e", // USDC.t
  "0x60E4Af9C17c12a7505064533A059Fb3eDE24EE61", // BTC.t
  "0x793e9A0DE44089CB0e357Aa7AF8f80FcFAfE8860", // SXP
  "0x7450A3Bdf31086e01020183efA659b5DA39958B6", // CAKE
  "0x22F1dA29427daBd7c7c9bE6ba4FAeA8F908AC3E7", // BNB
]
export const latestPrice = [
  // '0.2886',
  "1",
  "1",
  "64931.45",
]

export const DepositInterestRates = {
  NONE: "7.8%",
  TWOWEEKS: "10%",
  ONEMONTH: "15%",
  THREEMONTHS: "18%",
}

export const VariableDepositInterestRates = {
  NONE: "0%",
  TWOWEEKS: "Upto 2.1%",
  ONEMONTH: "Upto 3.6%",
  THREEMONTHS: "Upto 6%",
}

export const BorrowInterestRates = {
  NONE: "18%",
  ONEMONTH: "15%",
}

// export const decimals = [18,18,18,8];

export const DecimalsMap = {
  "BTC": 8,
  "BTC.t": 8,
  "0x4254432e74000000000000000000000000000000000000000000000000000000": 8,
  "USDT": 8,
  "USDT.t": 8,
  "0x555344542e740000000000000000000000000000000000000000000000000000": 8,
  "USDC.t": 8,
  "USDC": 8,
  "0x555344432e740000000000000000000000000000000000000000000000000000": 8,
  "BNB": 8,
  "BNB.t": 8,
  "0x57424e4200000000000000000000000000000000000000000000000000000000": 8,
  "WBNB": 8,
  "WBNB.t": 8,
}

export const CommitMap = {
  NONE: "0x636f6d69745f4e4f4e4500000000000000000000000000000000000000000000",
  TWOWEEKS:
    "0x636f6d69745f54574f5745454b53000000000000000000000000000000000000",
  ONEMONTH:
    "0x636f6d69745f4f4e454d4f4e5448000000000000000000000000000000000000",
  THREEMONTHS:
    "0x636f6d69745f54485245454d4f4e544853000000000000000000000000000000",
}

export const CommitMapReverse = {
  "0x636f6d69745f4e4f4e4500000000000000000000000000000000000000000000": "NONE",
  "0x636f6d69745f54574f5745454b53000000000000000000000000000000000000": "TWOWEEKS",
  "0x636f6d69745f4f4e454d4f4e5448000000000000000000000000000000000000": "ONEMONTH",
  "0x636f6d69745f54485245454d4f4e544853000000000000000000000000000000": "THREEMONTHS"
}

export const comit_NONE =
  "0x636f6d69745f4e4f4e4500000000000000000000000000000000000000000000"
export const comit_TWOWEEKS =
  "0x636f6d69745f54574f5745454b53000000000000000000000000000000000000"
export const comit_ONEMONTH =
  "0x636f6d69745f4f4e454d4f4e5448000000000000000000000000000000000000"
export const comit_THREEMONTHS =
  "0x636f6d69745f54485245454d4f4e544853000000000000000000000000000000"

export const faucetAddress = "0x21b3De312A749c654CdB5907787078744dF8ef66"

export const pancakeSwapTokenAddress = {
  "0x555344432e740000000000000000000000000000000000000000000000000000":
    "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", //USDC
  "0x555344542e740000000000000000000000000000000000000000000000000000":
    "0x55d398326f99059fF775485246999027B3197955", //USDT,
  "0x4254432e74000000000000000000000000000000000000000000000000000000":
    "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c", //BTC,
  "0x57424e4200000000000000000000000000000000000000000000000000000000":
    "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", //BNB
}

export const EventMap = {
  GET_TOKEN: "",
  NEW_DEPOSIT: "NewDeposit",
  DEPOSIT_ADDED: "DepositAdded",
  WITHDRAW_DEPOSIT: "Withdrawal",
  REQUEST_LOAN: "NewLoan",
  REPAY_LOAN: "LoanRepaid",
  WITHDRAW_LOAN: "WithdrawPartialLoan",
  ADD_COLLATERAL: "AddCollateral",
  WITHDRAW_COLLATERAL: "CollateralReleased",
  SWAP_LOAN: "MarketSwapped",
  SWAP_TO_LOAN: "MarketSwapped",

  "USDC.T": "USDC",
  "USDT.T": "USDT",
  "BTC.T": "BTC",
  "BNB.T": "BNB",
  "WBNB.T": "BNB",

  USDC: "USDC",
  USDT: "USDT",
  BTC: "BTC",
  BNB: "BNB",
  WBNB: "BNB",
  CAKE: "CAKE",
  SXP: "SXP",

  NONE: "None",
  TWOWEEKS: "Two Weeks",
  ONEMONTH: "One Month",
  THREEMONTHS: "Three Months",
  comit_NONE: "None",
  comit_TWOWEEKS: "Two Weeks",
  comit_ONEMONTH: "One Month",
  comit_THREEMONTHS: "Three Months",
}

export const CoinClassNames = {
  USDT: "mdi mdi-litecoin",
  USDC: "mdi mdi-ethereum",
  BTC: "mdi mdi-bitcoin",
  BNB: "mdi mdi-drag-variant",
  WBNB: "mdi mdi-drag-variant",
  "USDT.T": "mdi mdi-litecoin",
  "USDC.T": "mdi mdi-ethereum",
  "BTC.T": "mdi mdi-bitcoin",
  "BNB.T": "mdi mdi-drag-variant",
  "WBNB.T": "mdi mdi-drag-variant",
  CAKE: "mdi mdi-cake"
}

export const MinimumAmount = {
  USDT: 2500,
  USDC: 2500,
  BTC: 1,
  BNB: 2.5,
}
