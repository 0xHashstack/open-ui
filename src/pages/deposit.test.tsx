import React from 'react';
import renderer from 'react-test-renderer';
import PrivateKeyProvider from "truffle-privatekey-provider";
import { providers } from 'ethers';

test('Deposit feature', async () => {
    const provider = new PrivateKeyProvider(
        "d631de5b7e9cf451135896c833187c8b4dc230bf47756a9a2ca4ffccc161175e", // Wallet private Key
        "https://nd-400-266-190.p2pify.com/1efac602169fba8d5bf0589315ec436a" // RPC URL
    );
    const ethersInstance = new providers.Web3Provider(provider);
    await ethersInstance.send("eth_requestAccounts", [])
    const signer = await ethersInstance.getSigner()
    console.log(signer)
    // Use above signer to call contracts

    // const component = renderer.create(
    //     // <Link page="http://www.facebook.com">Facebook</Link>,
    // );
    // let tree = component.toJSON();
    // expect(tree).toMatchSnapshot();

    // // manually trigger the callback
    // tree.props.onMouseEnter();
    // // re-rendering
    // tree = component.toJSON();
    // expect(tree).toMatchSnapshot();

    // // manually trigger the callback
    // tree.props.onMouseLeave();
    // // re-rendering
    // tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
});