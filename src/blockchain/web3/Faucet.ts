import { faucetAddress } from '../constants';
import Faucet from '../contracts/Faucet';

class FaucetWrapper {  
    // Contracts
    faucet: Faucet;
  
    constructor(wrapperOptions: any) {
        this.faucet = new Faucet(wrapperOptions, faucetAddress);
    }

    TokenRequestMap = {
        "USDT": 0,
        "USDC": 1,
        "BTC": 2,
        "Bitcoin": 2,
        "BNB": 3
    };

    //send transaction methods
    getTokens(token) {
        return this.faucet.send("getTokens", {}, this.TokenRequestMap[token]);
    }
     
}

export default FaucetWrapper;