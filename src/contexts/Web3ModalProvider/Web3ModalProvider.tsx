import { createContext, useCallback, useEffect, useState } from "react"
import Web3Modal from "web3modal"
import Web3 from "web3"
import { ethers } from "ethers"
import { createWeb3, providerOptions } from "blockchain/utils"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { string } from "prop-types"
const BSCChainId = 97
interface IWeb3ModalContext {
  web3: any | null;
  signer: any | null;
  connect: () => void;
  disconnect: () => void;
  account: string | null;
  chainId: number | null;
  // networkId: number | null;
  connected: boolean;
}

export const Web3ModalContext = createContext<IWeb3ModalContext>({
  web3: null,
  signer: null,
  connect: () => {},
  disconnect: () => {},
  account: null,
  chainId: null,
  // networkId: null,
  connected: false,
})

let web3Modal
if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true,
    providerOptions, // required
    theme: {
      background: "rgb(39, 49, 56)",
      main: "rgb(199, 199, 199)",
      secondary: "rgb(136, 136, 136)",
      border: "rgba(195, 195, 195, 0.14)",
      hover: "rgb(16, 26, 32)",
    },
  })
}

const Web3ModalProvider = (props: any) => {
  // const [web3Modal, setWeb3Modal] = useState<Web3Modal | null>(null);
  const [web3, setWeb3] = useState<any | null>(null)
  const [signer, setSigner] = useState<any | null>(null)
  const [account, setAccount] = useState<string | null>(null)
  const [chainId, setChainId] = useState<number | null>(null)
  const [provider, setProvider] = useState<any | null>(null)
  const [connected, setConnected] = useState<boolean>(false)

  const resetWeb3 = useCallback(() => {
    setWeb3(null)
    setAccount(null)
    setChainId(null)
    // setNetworkId(null);
    setConnected(false)
    setProvider(null)
  }, [])

  const disconnect = useCallback(
    async function () {
      await web3Modal.clearCachedProvider()
      if (provider?.disconnect && typeof provider.disconnect === "function") {
        await provider.disconnect()
      }
      if (provider?.close && typeof provider.close === "function") {
        await provider.close()
      }
      resetWeb3()
    },
    [web3Modal, web3, resetWeb3]
  )

  const connect = useCallback(async () => {
    let _provider
    try {
      _provider = await web3Modal.connect()
      setProvider(_provider)
    } catch (e) {
      if (e === "Modal closed by user") return
      toast.warn(
        `Trouble connecting wallet..!! Check if your wallet is unlocked.`,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 4000,
          closeOnClick: true,
        }
      )
      return
    }
    if (_provider === null) return

    // const _web3 = createWeb3(_provider)
    // setWeb3(_web3)
    // console.log("Web3 =: ",web3);
    // console.log("Provider =:", provider);
    // const accounts = await _web3.eth.getAccounts()
    // const _account = accounts[0]
    // console.log("Account: ", _account)
    // const _networkId = await _web3.eth.net.getId();

    //============================================================================================================//
    const providerX = new ethers.providers.Web3Provider(_provider)
    console.log("Provider: ", providerX)
    setWeb3(providerX);
    await providerX.send("eth_requestAccounts", [])
    const _accountX = await providerX.getSigner()
    console.log("AccountX: ", _accountX.getAddress())
    setSigner(_accountX)
    const _account = _accountX.getAddress()
    const _chainId = (await providerX.getNetwork()).chainId
    console.log("ChainIdX: ", _chainId)
    //===========================================================================================================//
    if (_chainId != BSCChainId) {
      toast.warn(`Please connect to BSC Testnet`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 4000,
        closeOnClick: true,
      })
      disconnect()
      return
    }
    setAccount(String(_account))
    setChainId(_chainId)
    setConnected(true)
  }, [web3Modal])

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts: string[]) => {
        // eslint-disable-next-line no-console
        console.log("accountsChanged", accounts)
        chainId === BSCChainId ? setAccount(accounts[0]) : setAccount(null)
      }

      const handleChainChanged = async (_hexChainId: string) => {
        setChainId(parseInt(_hexChainId, 16))
        if (parseInt(_hexChainId, 16) !== BSCChainId) {
          toast.warn(`Please connect to BSC Testnet`, {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 4000,
            closeOnClick: true,
          })
          setConnected(false)
          disconnect()
          return
        }
        toast.success("Connected to BSC Testnet", {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 4000,
          closeOnClick: true,
        })
      }

      const handleDisconnect = (error: { code: number; message: string }) => {
        // eslint-disable-next-line no-console
        console.log("disconnect", error.message)
        disconnect()
      }

      provider.on("accountsChanged", handleAccountsChanged)
      provider.on("chainChanged", handleChainChanged)
      provider.on("disconnect", handleDisconnect)

      // Subscription Cleanup
      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged)
          provider.removeListener("chainChanged", handleChainChanged)
          provider.removeListener("disconnect", handleDisconnect)
        }
      }
    }
    return () => {}
  }, [provider, disconnect])

  // Auto connect to the cached provider
  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect()
    }
  }, [connect])
  return (
    <Web3ModalContext.Provider
      value={{
        web3,
        signer,
        connect,
        disconnect,
        account,
        // networkId,
        chainId,
        connected,
      }}
    >
      {props.children}
    </Web3ModalContext.Provider>
  )
}

export default Web3ModalProvider
