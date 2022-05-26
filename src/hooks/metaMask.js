import React, { useState, useEffect, useMemo, useCallback } from "react";
import { ethers } from "ethers";
import { hex } from "../utils";

export const MetaMaskContext = React.createContext(null);

export const MetaMaskProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [transactions, setTransactions] = useState([]);

  const ethereum = window.ethereum;
  // const addressToTest = "0x81b7e08f65bdf5648606c89998a9cc8164397647";
  const APIKey = "QVIJRTQNDI8TIMHUNBJG1ZG3R5HTQT1HY9";

  // Init Loading
  useEffect(() => {
    connect().then((val) => {
      setIsLoading(false);
    });
  }, []);

  /**
   * @name sendTransaction
   * @param {*} transactionParameters
   * @description Make a transaction on Eth Net (test Net)
   * @returns
   */
  const sendTransaction = async (transactionParameters) => {
    try {
      console.log("transactionParameters", transactionParameters);
      const txHash = await ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });
      return txHash;
    } catch (error) {
      console.log("Error Sending a transaction => ", error);
    }
  };

  /**
   * @name getTransactionsByAccount
   * @param string address
   * @description Get transactions of an address
   */
  const getTransactionsByAccount = async (blocks) => {
    if (blocks.result.length > 0) {
      for (let index = 0; index < blocks.result.length; index++) {
        let item = blocks.result[index];
        let hexTag = hex(item.blockNumber);
        // let hexTag = parseInt(item.blockNumber, 16);
        let hexIndex = hex(item.transactionIndex);

        // const transaction = await fetch(
        //   `https://api.etherscan.io/api
        //   ?module=proxy
        //   &action=eth_getTransactionByBlockNumberAndIndex
        //   &tag=${hexTag}
        //   &index=${hexIndex}
        //   &apikey=${APIKey}`,
        //   {
        //     method: "GET",
        //     headers: {},
        //   }
        // );
        // const element = await transaction.json();
      }
    }
  };

  /**
   * @name getBlocksOfTransactionsByAccount
   * @param string address
   * @description Get transactions of an address
   */
  const getBlocksOfTransactionsByAccount = async (address) => {
    const blocks = await fetch(
      `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${APIKey}`,
      {
        method: "GET",
        headers: {},
      }
    );
    const blockElement = await blocks.json();
    // await getTransactionsByAccount(blockElement);
    console.log(blockElement.result);
    setTransactions(blockElement.result);
  };

  /**
   * @name getTransactionCount
   * @param string address
   * @description Get count off the sent transactions
   */
  const getTransactionCount = (address) => {
    ethereum
      .request({
        method: "eth_getTransactionCount",
        params: [address, "latest"],
      })
      .then((transactionsQty) => {
        console.log(
          "cuenta de transaciones",
          ethers.utils.formatEther(transactionsQty)
        );
      })
      .catch((err) => {
        console.error("Error buscando cuenta de transaciones =>", err);
      });
  };

  /**
   * @name getAccountBalance
   * @param string address
   * @description Get the balance of address
   */
  const getAccountBalance = async (address) => {
    try {
      const avaliable = await ethereum.request({
        method: "eth_getBalance",
        params: [address, "latest"],
      });
      return avaliable;
    } catch (error) {
      console.error("Error buscando Info del balance =>", error);
    }
  };

  /**
   * @name getAccountNumbers
   * @description get all accouts of user (with permissions)
   */
  const getAccountNumbers = async () => {
    ethereum
      .request({ method: "eth_accounts" })
      .then((resp) => {
        console.log("Info de la cuenta => ", resp);
      })
      .catch((err) => {
        console.error("Error buscando Info de la cuenta =>", err);
      });
  };

  /**
   * @name connect
   * @description Connect to MetaMask wallet and get account data (balance)
   */
  const connect = async () => {
    console.log("Connecting to MetaMask Wallet");
    try {
      if (typeof window.ethereum !== "undefined") {
        const response = await ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(response);
        getBlocksOfTransactionsByAccount(response[0]);
        // getBlocksOfTransactionsByAccount(addressToTest);
        const avaliable = await getAccountBalance(response[0]);
        setBalance(ethers.utils.formatEther(avaliable));
        // getTransactionCount(response[0]);
        setIsActive(true);
      } else {
        alert("Get MetaMask!");
        return;
      }
    } catch (error) {
      console.log("Error on connecting: ", error);
    }
  };

  // Disconnect from Metamask wallet
  ethereum.on("disconnect", (error) => {
    console.log("Se desconecto");
  });
  const disconnect = async () => {
    console.log("Deactivating...");
    try {
      setIsActive(false);
    } catch (error) {
      console.log("Error on disconnecting: ", error);
    }
  };

  const values = useMemo(
    () => ({
      isActive,
      account,
      isLoading,
      connect,
      disconnect,
      balance,
      sendTransaction,
      transactions,
    }),
    [isActive, isLoading]
  );

  return (
    <MetaMaskContext.Provider value={values}>
      {children}
    </MetaMaskContext.Provider>
  );
};

export default function useMetaMask() {
  const context = React.useContext(MetaMaskContext);

  if (context === undefined) {
    throw new Error(
      "useMetaMask hook must be used with a MetaMaskProvider component"
    );
  }

  return context;
}
