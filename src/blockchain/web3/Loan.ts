import Loan from 'blockchain/contracts/Loan';
import { NumToBN } from '../utils';
import Loan1 from 'blockchain/contracts/Loan1';
// import { pancakeSwapTokenAddress } from 'blockchain/constants';
class LoanWrapper {
    
    //Contract
    loan: Loan; 
    loan1: Loan1;

    constructor(wrapperOptions: any) {
        this.loan = new Loan(wrapperOptions, process.env.REACT_APP_DIAMOND_ADDRESS);
        this.loan1 = new Loan1(wrapperOptions, process.env.REACT_APP_DIAMOND_ADDRESS);
    }

    //send transaction methods
    swapLoan(market: string, commitment: string, swapMarket: string) {
        return this.loan.send("swapLoan", {}, market, commitment, swapMarket);
    }

    swapToLoan(swapMarket: string, commitment: string, market: string) {
        return this.loan.send("swapToLoan", {}, swapMarket, commitment, market);
    }

    withdrawCollateral(market: string, commitment: string) {
        return this.loan.send("withdrawCollateral", {}, market, commitment);
    }

    repayLoan(market: string, commitment: string, repayAmount: number, decimal: number) {
        return this.loan.send("repayLoan", {}, market, commitment, NumToBN(repayAmount, decimal));
    }

    loanRequest(market: string, commitment: string, loanAmount: number, loanDecimal: number, collateralMarket: string, collateralAmount: number, collateralDecimal: number) {
        // let marketAddress = pancakeSwapTokenAddress[market];
        // let API_URL = `https://testapi.hashstack.finance/seedTokenPrice?marketAddress=${marketAddress}&market=${market}&amount=${loanAmount}&decimal=${loanDecimal}`
        // console.log(API_URL)
        // return fetch(API_URL).then(response => response.json()).then((data) => {
        //     if(!data["success"]) {
        //         console.log("MarketAddress: ", marketAddress);
        //         console.log("Market: ", market);
        //         console.log("Amount: ", loanAmount);
        //         console.log("Data: ", data);
        //         throw new Error("Error in setting fair price")
        //     }
        //     console.log("Set Fair Price Successful");
            return this.loan1.send("loanRequest", {}, market, commitment, NumToBN(loanAmount, loanDecimal), collateralMarket, NumToBN(collateralAmount, collateralDecimal));
        // })
    }
    
    addCollateral(market: string, commitment: string, collateralMarket: string, collateralAmount: number, collateralDecimal: number) {
        return this.loan1.send("addCollateral", {}, market, commitment, collateralMarket, NumToBN(collateralAmount, collateralDecimal));
    }

    liquidation(address: string, id: number) {
        return this.loan1.send("liquidation", {}, address, String(id));
    }

    permissibleWithdrawal(market: string, commitment: string, collateralMarket: string, amount: number, decimal: number) {
        return this.loan1.send("permissibleWithdrawal", market, commitment, collateralMarket, NumToBN(amount, decimal));
    }

    //getter methods
    hasLoanAccount(address: string) {
        return this.loan1.call("hasLoanAccount", address);
    }

    avblReservesLoan(market: string) {
        return this.loan1.call("avblReservesLoan", market);
    }

    utilisedReservesLoan(market: string) {
        return this.loan1.call("utilisedReservesLoan", market);
    }

    isPausedLoan() {
        return this.loan.call("isPausedLoan");
    }

    isPausedLoan1() {
        return this.loan1.call("isPausedLoan1");
    }

    //admin operations
    pauseLoan() {
        return this.loan.send("pauseLoan", {});
    }

    unpauseLoan() {
        return this.loan.send("unpauseLoan", {});
    }
    
    pauseLoan1() {
        return this.loan1.send("pauseLoan1", {});
    }

    unpauseLoan1() {
        return this.loan1.send("unpauseLoan1", {});
    }

}

export default LoanWrapper;