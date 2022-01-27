import { tokenDistributorAddress } from '../constants';
import TokenDistributor from '../contracts/TokenDistributor';

class TokenDistributorWrapper {  
    // Contracts
    tokenDistributor: TokenDistributor;
  
    constructor(wrapperOptions: any) {
        this.tokenDistributor = new TokenDistributor(wrapperOptions, tokenDistributorAddress);
    }

    TokenRequestMap = {
        "BTC": "requestTokens3",
        "Bitcoin": "requestTokens3",
        "USDC": "requestTokens2",
        "USDT": "requestTokens1",
        "BNB": "requestTokens4"
    };

    //send transaction methods
    requestTokens(token) {
        return this.tokenDistributor.send(this.TokenRequestMap[token], {});
    }
     
}

export default TokenDistributorWrapper;