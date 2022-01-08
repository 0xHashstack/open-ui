import { tokenDistributorAddress } from '../constants';
import TokenDistributor from '../contracts/TokenDistributor';

class TokenDistributorWrapper {  
    // Contracts
    tokenDistributor: TokenDistributor;
  
    constructor(wrapperOptions: any) {
        this.tokenDistributor = new TokenDistributor(wrapperOptions, tokenDistributorAddress);
    }

    //send transaction methods
    requestTokens1() {
        return this.tokenDistributor.send("requestTokens1", {});
    }

    requestTokens2() {
        return this.tokenDistributor.send("requestTokens2", {});
    }
    
    requestTokens3() {
        return this.tokenDistributor.send("requestTokens3", {});
    }
     
}

export default TokenDistributorWrapper;