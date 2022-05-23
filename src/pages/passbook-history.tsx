const openProtocolURL =
  "https://api.thegraph.com/subgraphs/name/nobita851/passbook";
import axios from "axios";

export const main = async (type: string, account: string, market: string, commitment: string) => {
    let data;
        try {
            data = await axios.post(openProtocolURL, {
              query: `
                    {  
                        ${type}(first:3, where: {
                            address: "${account.toLowerCase()}",
                            market: "${market.concat(".t")}",
                            commitment: "${commitment}",
                        }, orderBy: timestamp, orderDirection: desc) {
                            id
                            action
                            amount
                            timestamp
                        }
                    }
                `,
        })
    } catch (err) {
        console.log(err);
        return err;
    }
    if(type == "deposits")
        return data.data.data.deposits
    else 
        return data.data.data.loans
}