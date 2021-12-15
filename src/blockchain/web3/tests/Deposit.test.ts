import { getDefaultContractOptions } from "blockchain/utils";
import Web3Wrapper from "../Web3Wrapper";
import { symbols, comit_TWOWEEKS, comit_ONEMONTH } from 'blockchain/constants';

const defaultContractOptions = getDefaultContractOptions()
const web3Wrapper = new Web3Wrapper(defaultContractOptions.web3, defaultContractOptions.chainId, "0xc471f113bD5547916925ff28F8018834E8b205F1");

test("Deposits USDT.t that is within the limit", () => {
    return web3Wrapper?.getDepositInstance().createDeposit(symbols[0], comit_TWOWEEKS, 30, 18).then((data) => {
        expect(data.events.NewDeposit.returnValues.amount).toBe("30000000000000000000");
        expect(data.events.NewDeposit.returnValues.commitment).toBe("0x636f6d69745f54574f5745454b53000000000000000000000000000000000000");
    })
})

test("Deposit USDC.t that is within the limit", () => {
    return web3Wrapper?.getDepositInstance().createDeposit(symbols[1], comit_TWOWEEKS, 3, 18).then((data) => {
        expect(data.events.NewDeposit.returnValues.amount).toBe("3000000000000000000");
        expect(data.events.NewDeposit.returnValues.commitment).toBe("0x636f6d69745f54574f5745454b53000000000000000000000000000000000000");
    })
})

test("Deposit BTC.t that is within the limit", () => {
    return web3Wrapper?.getDepositInstance().createDeposit(symbols[2], comit_ONEMONTH, 3, 18).then((data) => {
        expect(data.events.NewDeposit.returnValues.amount).toBe("3000000000000000000");
        expect(data.events.NewDeposit.returnValues.commitment).toBe("0x636f6d69745f4f4e454d4f4e5448000000000000000000000000000000000000");
    })
})

test("Add to USDC.t deposit", () => {
    return web3Wrapper?.getDepositInstance().addToDeposit(symbols[1], comit_TWOWEEKS, 3, 18).then((data) => {
        expect(data.events.DepositAdded.returnValues.amount).toBe("3000000000000000000");
        expect(data.events.DepositAdded.returnValues.commitment).toBe("0x636f6d69745f54574f5745454b53000000000000000000000000000000000000");
    })
})

test("Withdraw USDC.t", () => {
    return web3Wrapper?.getDepositInstance().withdrawDeposit(symbols[1], comit_TWOWEEKS, 3, 0, 18).then((data) => {
        expect(data.events.Withdrawal.returnValues.amount).toBe("3000000000000000000");
    })
})

test("Test convert yeild", () => {
    return web3Wrapper?.getDepositInstance().convertYeild(symbols[0], comit_ONEMONTH).then((data) => {
        expect(data.events.YieldDeposited.returnValues.commitment).toBe("0x636f6d69745f4f4e454d4f4e5448000000000000000000000000000000000000");
    })
})

