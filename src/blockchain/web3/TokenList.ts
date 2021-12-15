import { diamondAddress } from '../constants';
import TokenList from '../contracts/TokenList';
import { NumToBN } from '../utils';

class TokenListWrapper {

    tokenList: TokenList

    constructor(wrapperOptions: any) {
        this.tokenList = new TokenList(wrapperOptions, diamondAddress);
    }

    addMarketSupport(market: string, decimals: number, tokenAddress: string, amount: number, amountDecimal: number) {
        return this.tokenList.send("addMarketSupport", {}, market, String(decimals), String(tokenAddress), NumToBN(amount, amountDecimal));
    }

    removeMarketSupport(market: string) {
        return this.tokenList.send("removeMarketSupport", {}, market)
    }

    updateMarketSupport(market: string, decimals: number, tokenAddress: string) {
        return this.tokenList.send("updateMarketSupport", {}, market, String(decimals), tokenAddress);
    }

    addMarket2Support(market: string, decimals: number, tokenAddress: string) {
        return this.tokenList.send("addMarket2Support", {}, market, String(decimals), tokenAddress);
    }

    removeMarket2Support(market: string) {
        return this.tokenList.send("removeMarket2Support", {}, market);
    }

    updateMarket2Support(market : string, decimals: number, tokenAddress: string) {
        return this.tokenList.send("updateMarket2Support", {}, market, decimals, tokenAddress);
    }
    
    //getter methods
    isMarketSupported(market: string) {
        return this.tokenList.call("isMarketSupported", market);
    }

    getMarketAddress(market: string) {
        return this.tokenList.call("getMarketAddress", market);
    }

    getMarketDecimal(market: string) {
        return this.tokenList.call("getMarketDecimal", market);
    }

    isMarket2Supported(market: string) {
        return this.tokenList.call("isMarket2Supported", market);
    }

    getMarket2Address(market: string) {
        return this.tokenList.call("getMarket2Address", market);
    }

    getMarket2Decimal(market: string) {
        return this.tokenList.call("getMarket2Decimal", market);
    }

    isPausedTokenList() {
        return this.tokenList.call("isPausedTokenList");
    }

    //admin operations
    pauseTokenList() {
        return this.tokenList.send("pauseTokenList", {});
    }

    unpauseTokenList() {
        return this.tokenList.send("unpauseTokenList", {});
    }
}

export default TokenListWrapper;