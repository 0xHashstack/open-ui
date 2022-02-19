import { createContext, useCallback, useEffect, useState } from 'react';
import Web3Modal from "web3modal";
import Web3 from 'web3';
// import { useMoralis } from 'react-moralis';
import { createWeb3, providerOptions } from 'blockchain/utils';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IWeb3ModalContext {
  web3: Web3 | null;
  connect: () => void;
  disconnect: () => void;
  account: string | null;
  chainId: number | null;
  // networkId: number | null;
  connected: boolean;
}

export const Web3ModalContext = createContext<IWeb3ModalContext>({
  web3: null,
  connect: () => { },
  disconnect: () => { },
  account: null,
  chainId: null,
  // networkId: null,
  connected: false
});


let web3Modal
if (typeof window !== 'undefined') {
  web3Modal = new Web3Modal({
    network: 'mainnet', // optional
    cacheProvider: true,
    providerOptions, // required
  })
}

const Web3ModalProvider = (props: any) => {
  // const [web3Modal, setWeb3Modal] = useState<Web3Modal | null>(null);
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);
  const [provider, setProvider] = useState<any | null>(null)
  const [connected, setConnected] = useState<boolean>(false);

  const resetWeb3 = useCallback(() => {
    setWeb3(null);
    setAccount(null);
    setChainId(null);
    // setNetworkId(null);
    setConnected(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const subscribeProvider = useCallback(async (_provider: any, _web3: Web3) => {
  //   if (!_provider.on)
  //     return;

  //   _provider.on("disconnect", () => {
  //     console.log("disconnect")
  //     disconnect();
  //   });

  //   _provider.on("accountsChanged", async (accounts: string[]) => {
  //     setAccount(accounts[0]);
  //   });

  //   _provider.on("chainChanged", async (chainId: number) => {
  //     console.log("Chain changed: ", chainId);
  //     // const networkId = await _web3.eth.net.getId();
  //     const _chainId = await _web3.eth.getChainId();
  //     setChainId(_chainId);
  //     // setNetworkId(networkId);

  //     if (_chainId != 97)
  //       toast.warn(`Please connect to BSC Testnet`, { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 4000, closeOnClick: true });
  //     else
  //       toast.success("Connected to BSC Testnet", { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 4000, closeOnClick: true });

  //   });

  //   // _provider.on("networkChanged", async (networkId: number) => {
  //   //   const chainId = await _web3.eth.getChainId();
  //   //   setChainId(chainId);
  //   //   setNetworkId(networkId);

  //   // });

  //   _provider.on("connect", () => {
  //     console.log('------');
  //     // authenticate();
  //   });
  // }, [resetWeb3]);

  const disconnect = useCallback(
    async function () {
      await web3Modal.clearCachedProvider()
      // const provider: any = web3.currentProvider;
      if (provider?.disconnect && typeof provider.disconnect === 'function') {
        await provider.disconnect()
      }
      resetWeb3();
    },
    [web3Modal, web3, resetWeb3]
  )

  const connect = useCallback(async () => {
    let _provider;
    try {
      _provider = await web3Modal.connect();
      setProvider(_provider);
    } catch (e) {
      toast.warn(`Trouble connecting wallet..!! Check if your wallet is unlocked.`, { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 4000, closeOnClick: true });
      return;
    }
    // authenticate()
    // if (isAuthenticated) {
    if (_provider === null)
      return;

    const _web3 = createWeb3(_provider);
    setWeb3(_web3);
    // await subscribeProvider(_provider, _web3);

    const accounts = await _web3.eth.getAccounts();
    const _account = accounts[0];
    // const _networkId = await _web3.eth.net.getId();
    const _chainId = await _web3.eth.getChainId();
    if (_chainId != 97) {
      toast.warn(`Please connect to BSC Testnet`, { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 4000, closeOnClick: true });
      disconnect();
      return;
    }
    setAccount(_account);
    setChainId(_chainId);
    setConnected(true);
    // toast.success("Connected to BSC Testnet", { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 4000, closeOnClick: true });
    // setNetworkId(_networkId);

  }, [web3Modal]);

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts: string[]) => {
        // eslint-disable-next-line no-console
        console.log('accountsChanged', accounts)
        setAccount(accounts[0]);
      }

      // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
      const handleChainChanged = async (_hexChainId: string) => {
        // window.location.reload()
        setChainId(parseInt(_hexChainId, 16));
        if (parseInt(_hexChainId, 16) !== 97) {
          toast.warn(`Please connect to BSC Testnet`, { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 4000, closeOnClick: true });
          setConnected(false);
          return;
        }
        toast.success("Connected to BSC Testnet", { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 4000, closeOnClick: true });
      }

      const handleDisconnect = (error: { code: number; message: string }) => {
        // eslint-disable-next-line no-console
        console.log('disconnect', error.message)
        disconnect()
      }

      provider.on('accountsChanged', handleAccountsChanged)
      provider.on('chainChanged', handleChainChanged)
      provider.on('disconnect', handleDisconnect)

      // Subscription Cleanup
      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged)
          provider.removeListener('chainChanged', handleChainChanged)
          provider.removeListener('disconnect', handleDisconnect)
        }
      }
    }
    return () => { }
  }, [provider, disconnect])

  // Auto connect to the cached provider
  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect()
    }
  }, [connect])

  // const disconnect = useCallback(async () => {
  //   if (web3 && web3.currentProvider) {
  //     const _provider: any = web3.currentProvider;
  //     if (_provider.close)
  //       await _provider.close();
  //   }
  //   if (web3Modal) {
  //     await web3Modal.clearCachedProvider();
  //   }
  //   resetWeb3();
  // }, [web3Modal, web3, resetWeb3])

  return (
    <Web3ModalContext.Provider
      value={{
        web3,
        connect,
        disconnect,
        account,
        // networkId,
        chainId,
        connected
      }}>
      {props.children}
    </Web3ModalContext.Provider>
  )
}

export default Web3ModalProvider;