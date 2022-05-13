const openProtocolURL =
  "https://api.thegraph.com/subgraphs/name/prtk418/open_protocol_bsc_test";
import axios from "axios";

export const main = async (type: string) => {
  let totalDepositBtcUsd = 0;
  let totalDepositBnbUsd = 0;
  let totalDepositUsdtUsd = 0;
  let totalDepositUsdcUsd = 0;

  let totalDepositBtcCount = 0;
  let totalDepositBnbCount = 0;
  let totalDepositUsdtCount = 0;
  let totalDepositUsdcCount = 0;

  let totalDepositNone = 0;
  let totalDeposit2Weeks = 0;
  let totalDeposit1Month = 0;
  let totalDeposit3Month = 0;

  let totalBorrowedBtcUsd = 0;
  let totalBorrowedBnbUsd = 0;
  let totalBorrowedUsdtUsd = 0;
  let totalBorrowedUsdcUsd = 0;

  let totalCollateralBtcUsd = 0;
  let totalCollateralBnbUsd = 0;
  let totalCollateralUsdtUsd = 0;
  let totalCollateralUsdcUsd = 0;

  let totalBorrowedBtcCount = 0;
  let totalBorrowedBnbCount = 0;
  let totalBorrowedUsdtCount = 0;
  let totalBorrowedUsdcCount = 0;

  let totalBorrowedBtcSwapped = 0;
  let totalBorrowedBnbSwapped = 0;
  let totalBorrowedUsdtSwapped = 0;
  let totalBorrowedUsdcSwapped = 0;

  let totalBorrowedBtcRepayTime = 0;
  let totalBorrowedBnbRepayTime = 0;
  let totalBorrowedUsdtRepayTime = 0;
  let totalBorrowedUsdcRepayTime = 0;

  let totalBorrowedBtcRepayCount = 0;
  let totalBorrowedBnbRepayCount = 0;
  let totalBorrowedUsdtRepayCount = 0;
  let totalBorrowedUsdcRepayCount = 0;

  let totalBorrowed1MonthRepayTime = 0;
  let totalBorrowedNoneRepayTime = 0;

  let totalBorrowed1MonthRepayCount = 0;
  let totalBorrowedNoneRepayCount = 0;

  let totalBorrowedActive = 0;
  let totalBorrowedActiveCount = 0;

  let totalBorrowedNone = 0;
  let totalBorrowed1Month = 0;

  let btcPrice = 0;
  let bnbPrice = 0;

  let totalTransactions = 0;
  let totalFailedTransaction = 0;
  axios
    .get(
      "https://api.pancakeswap.info/api/v2/tokens/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c"
    )
    .then((response) => {
      btcPrice = parseInt(response.data.data.price);
    })
    .catch((error) => {
      console.log(error);
      // return(error);
    });

  axios
    .get(
      "https://api.pancakeswap.info/api/v2/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
    )
    .then((response) => {
      bnbPrice = parseInt(response.data.data.price);
    })
    .catch((error) => {
      console.log(error);
      // return(error);
    });

  axios
    .get(
      "https://api-testnet.bscscan.com/api?module=account&action=txlist&address=0x12bdAC56C03FA27687c6f35E60fC36BecB00850e&apikey=YourApiKeyToken"
    )
    .then((response) => {
      for (let d of response.data.result) {
        totalTransactions++;
        totalFailedTransaction += parseInt(d.isError);
      }
      console.log("Total txs: ", totalTransactions);
      console.log("Total Failed Txs: ", totalFailedTransaction);
    })
    .catch((error) => {
      console.log(error);
      // return(error);
    });

  let data;
  let totalUsers = 0;
  let flag = 0;
  while (flag == totalUsers) {
    try {
      data = await axios.post(openProtocolURL, {
        query: `
                {
                    users(first: 1000, skip: ${flag}){
                        address
                        loans{
                            initialAmount
                            initialMarket
                            commitment
                            interestAccrued
                            isSwapped
                            createdAt
                            updatedAt
                            state
                            collateral{
                                initialAmount
                                market
                            }
                        }
                        deposits{
                            market
                            commitment
                            currentAmount
                            interestAccrued
                            createdAt
                        }
                    }
                },
            `,
      });
    } catch (err) {
      console.log(err);
      return err;
    }
    for (let u of data.data.data.users) {
      for (let d of u.deposits) {
        if(d.currentAmount < 0) continue;
        if (d.market == "BTC.t") {
          totalDepositBtcUsd += btcPrice * (d.currentAmount / 100000000);
          totalDepositBtcCount += 1;
        } else if (d.market == "WBNB") {
          totalDepositBnbUsd += bnbPrice * (d.currentAmount / 100000000);
          totalDepositBnbCount += 1;
        } else if (d.market == "USDC.t") {
          totalDepositUsdcUsd += d.currentAmount / 100000000;
          totalDepositUsdcCount += 1;
        } else if (d.market == "USDT.t") {
          totalDepositUsdtUsd += d.currentAmount / 100000000;
          totalDepositUsdtCount += 1;
        }

        if (d.commitment == "comit_THREEMONTHS") {
          totalDeposit3Month += 1;
        } else if (d.commitment == "comit_ONEMONTH") {
          totalDeposit1Month += 1;
        } else if (d.commitment == "comit_NONE") {
          totalDepositNone += 1;
        } else if (d.commitment == "comit_TWOWEEKS") {
          totalDeposit2Weeks += 1;
        }
      }

      for (let l of u.loans) {
        if(l.initialAmount < 0) continue;
        if (l.initialMarket == "BTC.t") {
          totalBorrowedBtcUsd += btcPrice * (l.initialAmount / 100000000);
          totalBorrowedBtcCount += 1;
          if (l.isSwapped) totalBorrowedBtcSwapped++;
          if (l.state == "Active") {
            totalBorrowedActive += btcPrice * (l.initialAmount / 100000000);
            totalBorrowedActiveCount++;
          }

          if (l.state == "Repaid") {
            totalBorrowedBtcRepayTime += l.updatedAt - l.createdAt;
            totalBorrowedBtcRepayCount++;
          }
        } else if (l.initialMarket == "WBNB") {
          totalBorrowedBnbUsd += bnbPrice * (l.initialAmount / 100000000);
          totalBorrowedBnbCount += 1;
          if (l.isSwapped) totalBorrowedBnbSwapped++;
          if (l.state == "Active") {
            totalBorrowedActive += bnbPrice * (l.initialAmount / 100000000);
            totalBorrowedActiveCount++;
          }

          if (l.state == "Repaid") {
            totalBorrowedBnbRepayTime += l.updatedAt - l.createdAt;
            totalBorrowedBnbRepayCount++;
          }
        } else if (l.initialMarket == "USDC.t") {
          totalBorrowedUsdcUsd += l.initialAmount / 100000000;
          totalBorrowedUsdcCount += 1;
          if (l.isSwapped) totalBorrowedUsdcSwapped++;
          if (l.state == "Active") {
            totalBorrowedActive += l.initialAmount / 100000000;
            totalBorrowedActiveCount++;
          }

          if (l.state == "Repaid") {
            totalBorrowedUsdcRepayTime += l.updatedAt - l.createdAt;
            totalBorrowedUsdcRepayCount++;
          }
        } else if (l.initialMarket == "USDT.t") {
          totalBorrowedUsdtUsd += l.initialAmount / 100000000;
          totalBorrowedUsdtCount += 1;
          if (l.isSwapped) totalBorrowedUsdtSwapped++;
          if (l.state == "Active") {
            totalBorrowedActive += l.initialAmount / 100000000;
            totalBorrowedActiveCount++;
          }

          if (l.state == "Repaid") {
            totalBorrowedUsdtRepayTime += l.updatedAt - l.createdAt;
            totalBorrowedUsdtRepayCount++;
          }
        }

        if (l.collateral.initialAmount < 0) continue;
          if (l.collateral.market == "BTC.t") {
            totalCollateralBtcUsd +=
              btcPrice * (l.collateral.initialAmount / 100000000);
          } else if (l.collateral.market == "WBNB") {
            totalCollateralBnbUsd +=
              bnbPrice * (l.collateral.initialAmount / 100000000);
          } else if (l.collateral.market == "USDC.t") {
            totalCollateralUsdcUsd += l.collateral.initialAmount / 100000000;
          } else if (l.collateral.market == "USDT.t") {
            totalCollateralUsdtUsd += l.collateral.initialAmount / 100000000;
          }

        if (l.commitment == "comit_ONEMONTH") {
          totalBorrowed1Month += 1;
          if (l.state == "Repaid") {
            totalBorrowed1MonthRepayTime += l.updatedAt - l.createdAt;
            totalBorrowed1MonthRepayCount++;
          }
        } else if (l.commitment == "comit_NONE") {
          totalBorrowedNone += 1;
          if (l.state == "Repaid") {
            totalBorrowedNoneRepayTime += l.updatedAt - l.createdAt;
            totalBorrowedNoneRepayCount++;
          }
        }
      }
    }
    totalUsers += data.data.data.users.length;
    flag += 1000;
  }
  console.log(
    "Total USD Deposit: ",
    totalDepositBtcUsd +
      totalDepositUsdtUsd +
      totalDepositUsdcUsd +
      totalDepositBnbUsd
  );
  // console.log("Deposit:");
  console.log("BTC equivalnent USD: ", totalDepositBtcUsd);
  console.log("BNB equivalent USD: ", totalDepositBnbUsd);
  console.log("USDC equivalent USD: ", totalDepositUsdcUsd);
  console.log("USDT equivalent USD: ", totalDepositUsdtUsd);

  // console.log("BTC Count: ", totalDepositBtcCount);
  // console.log("USDC Count: ", totalDepositUsdcCount);
  // console.log("USDT Count: ", totalDepositUsdtCount);
  // console.log("BNB Count: ", totalDepositBnbCount);

  // console.log("None Count: ", totalDepositNone);
  // console.log("2 Weeks Count: ", totalDeposit2Weeks);
  // console.log("1 month Count: ", totalDeposit1Month);
  // console.log("3 month Count: ", totalDeposit3Month);

  // console.log("Borrow: ");

  // console.log("BTC equivalnent USD: ", totalBorrowedBtcUsd);
  // console.log("BNB equivalent USD: ", totalBorrowedBnbUsd);
  // console.log("USDC equivalent USD: ", totalBorrowedUsdcUsd);
  // console.log("USDT equivalent USD: ", totalBorrowedUsdtUsd);

  // console.log("BTC collateral equivalnent USD: ", totalCollateralBtcUsd);
  // console.log("BNB collateral equivalent USD: ", totalCollateralBnbUsd);
  // console.log("USDC collateral equivalent USD: ", totalCollateralUsdcUsd);
  // console.log("USDT collateral equivalent USD: ", totalCollateralUsdtUsd);

  // console.log("BTC Count: ", totalBorrowedBtcCount);
  // console.log("USDC Count: ", totalBorrowedUsdcCount);
  // console.log("USDT Count: ", totalBorrowedUsdtCount);
  // console.log("BNB Count: ", totalBorrowedBnbCount);

  // console.log("None Count: ", totalBorrowedNone);
  // console.log("1 month Count: ", totalBorrowed1Month);

  // console.log("BTC Swap Count: ", totalBorrowedBtcSwapped);
  // console.log("USDC Swap Count: ", totalBorrowedUsdcSwapped);
  // console.log("USDT Swap Count: ", totalBorrowedUsdtSwapped);
  // console.log("users: ", data.data.data.users.length);

  /// Deposits
  if (type == "totalUsers") return totalUsers;
  else if (type == "totalValueLocked")
    return (
      totalDepositBtcUsd +
      totalDepositUsdtUsd +
      totalDepositUsdcUsd +
      totalDepositBnbUsd +
      totalCollateralBnbUsd +
      totalCollateralUsdcUsd +
      totalCollateralUsdtUsd +
      totalCollateralBtcUsd
    );
  else if (type == "utilisationFactor")
    return (
      (totalBorrowedBnbUsd +
        totalBorrowedUsdcUsd +
        totalBorrowedUsdtUsd +
        totalBorrowedBtcUsd) /
      (totalDepositBtcUsd +
        totalDepositUsdtUsd +
        totalDepositUsdcUsd +
        totalDepositBnbUsd)
    );
  else if (type == "dominantMarket") {
    if (
      totalDepositBtcUsd + totalBorrowedBtcUsd >
        totalDepositUsdtUsd + totalBorrowedUsdtUsd &&
      totalDepositBtcUsd + totalBorrowedBtcUsd >
        totalDepositUsdcUsd + totalBorrowedUsdcUsd &&
      totalDepositBtcUsd + totalBorrowedBtcUsd >
        totalDepositBnbUsd + totalBorrowedBnbUsd
    )
      return ["BTC", totalDepositBtcUsd + totalBorrowedBtcUsd];
    if (
      totalDepositUsdtUsd + totalBorrowedUsdtUsd >
        totalDepositBtcUsd + totalBorrowedUsdtUsd &&
      totalDepositUsdtUsd + totalBorrowedUsdtUsd >
        totalDepositUsdcUsd + totalBorrowedUsdcUsd &&
      totalDepositUsdtUsd + totalBorrowedUsdtUsd >
        totalDepositBnbUsd + totalBorrowedBnbUsd
    )
      return ["USDT", totalDepositUsdtUsd + totalBorrowedUsdtUsd];
    if (
      totalDepositUsdcUsd + totalBorrowedUsdcUsd >
        totalDepositUsdtUsd + totalBorrowedUsdtUsd &&
      totalDepositUsdcUsd + totalBorrowedUsdcUsd >
        totalDepositBtcUsd + totalBorrowedBtcUsd &&
      totalDepositUsdcUsd + totalBorrowedUsdcUsd >
        totalDepositBnbUsd + totalBorrowedBnbUsd
    )
      return ["USDC", totalDepositUsdcUsd + totalBorrowedUsdcUsd];
    if (
      totalDepositBnbUsd + totalBorrowedBnbUsd >
        totalDepositUsdtUsd + totalBorrowedUsdtUsd &&
      totalDepositBnbUsd + totalBorrowedBnbUsd >
        totalDepositUsdcUsd + totalBorrowedUsdcUsd &&
      totalDepositBnbUsd + totalBorrowedBnbUsd >
        totalDepositBtcUsd + totalBorrowedBtcUsd
    )
      return ["BNB", totalDepositBnbUsd + totalBorrowedBnbUsd];
  } else if (type == "totalDepositUsd") {
    console.log(
      "Total USD Deposit: ",
      totalDepositBtcUsd +
        totalDepositUsdtUsd +
        totalDepositUsdcUsd +
        totalDepositBnbUsd
    );
    return (
      totalDepositBtcUsd +
      totalDepositUsdtUsd +
      totalDepositUsdcUsd +
      totalDepositBnbUsd
    );
  }
  // USD equivalent values
  else if (type == "totalDepositBtcUsd") {
    console.log("BTC equivalnent USD: ", totalDepositBtcUsd);
    return totalDepositBtcUsd;
  } else if (type == "totalDepositBnbUsd") {
    console.log("BNB equivalent USD", totalDepositBnbUsd);
    return totalDepositBnbUsd;
  } else if (type == "totalDepositUsdcUsd") {
    console.log("USDC equivalent USD", totalDepositUsdcUsd);
    return totalDepositUsdcUsd;
  } else if (type == "totalDepositUsdtUsd") {
    console.log("USDT equivalent USD", totalDepositUsdtUsd);
    return totalDepositUsdtUsd;
  }
  // counts by market
  else if (type == "totalDepositBtcCount") {
    console.log("BTC Count", totalDepositBtcCount);
    return totalDepositBtcCount;
  } else if (type == "totalDepositBnbCount") return totalDepositBnbCount;
  else if (type == "totalDepositUsdcCount") return totalDepositUsdcCount;
  else if (type == "totalDepositUsdtCount") return totalDepositUsdtCount;
  // counts by commitment
  else if (type == "totalDepositNone") return totalDepositNone;
  else if (type == "totalDeposit2Weeks") return totalDeposit2Weeks;
  else if (type == "totalDeposit1Month") return totalDeposit1Month;
  else if (type == "totalDeposit3Month") return totalDeposit3Month;
  /// Borrows
  else if (type == "totalBorrowedUsd")
    return (
      totalBorrowedBnbUsd +
      totalBorrowedUsdcUsd +
      totalBorrowedUsdtUsd +
      totalBorrowedBtcUsd
    );
  else if (type == "totalCollateralUsd")
    return (
      totalCollateralBnbUsd +
      totalCollateralUsdcUsd +
      totalCollateralUsdtUsd +
      totalCollateralBtcUsd
    );
  // active loans usd equivalent
  else if (type == "totalBorrowedActive") return totalBorrowedActive;
  // active loans count
  else if (type == "totalBorrowedActiveCount") return totalBorrowedActiveCount;
  // USD Equivalent values
  else if (type == "totalBorrowedBtcUsd") return totalBorrowedBtcUsd;
  else if (type == "totalBorrowedBnbUsd") return totalBorrowedBnbUsd;
  else if (type == "totalBorrowedUsdcUsd") return totalBorrowedUsdcUsd;
  else if (type == "totalBorrowedUsdtUsd") return totalBorrowedUsdtUsd;
  // counts by market
  else if (type == "totalBorrowedBtcCount") return totalBorrowedBtcCount;
  else if (type == "totalBorrowedBnbCount") return totalBorrowedBnbCount;
  else if (type == "totalBorrowedUsdcCount") return totalBorrowedUsdcCount;
  else if (type == "totalBorrowedUsdtCount") return totalBorrowedUsdtCount;
  // counts by commitment
  else if (type == "totalBorrowedNone") return totalBorrowedNone;
  else if (type == "totalBorrowed1Month") return totalBorrowed1Month;
  // counts by swap
  else if (type == "totalBorrowedBtcSwapped") return totalBorrowedBtcSwapped;
  else if (type == "totalBorrowedBnbSwapped") return totalBorrowedBnbSwapped;
  else if (type == "totalBorrowedUsdcSwapped") return totalBorrowedUsdcSwapped;
  else if (type == "totalBorrowedUsdtSwapped") return totalBorrowedUsdtSwapped;
  // average repayment period
  else if (type == "averageRepayTime")
    return (
      (totalBorrowedBnbRepayTime +
        totalBorrowedUsdcRepayTime +
        totalBorrowedUsdtRepayTime +
        totalBorrowedBtcRepayTime) /
      (totalBorrowedBnbRepayCount +
        totalBorrowedUsdcRepayCount +
        totalBorrowedUsdtRepayCount +
        totalBorrowedBtcRepayCount)
    );
  // average repayment by market
  else if (type == "averageRepayBtc")
    return totalBorrowedBtcRepayTime / totalBorrowedBtcRepayCount;
  else if (type == "averageRepayBnb")
    return totalBorrowedBnbRepayTime / totalBorrowedBnbRepayCount;
  else if (type == "averageRepayUsdc")
    return totalBorrowedUsdcRepayTime / totalBorrowedUsdcRepayCount;
  else if (type == "averageRepayUsdt")
    return totalBorrowedUsdtRepayTime / totalBorrowedUsdtRepayCount;
  // average repayment by commitment
  else if (type == "averageRepayNone")
    return totalBorrowedNoneRepayTime / totalBorrowedNoneRepayCount;
  else if (type == "averageRepay1Month")
    return totalBorrowed1MonthRepayTime / totalBorrowed1MonthRepayCount;
};

//main()