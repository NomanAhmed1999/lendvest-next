import axios from "axios";
import { CONVERT_CRYPTO_API } from "./api";


export const cryptoToID = {
    "WSTETH": "12409",
    "WETH": "2396"
  }


export const convertFROMUSD = (amount: any, priceInUSD: any) => {

    //coin market cap api
    // const coinMarketCapCoinId = cryptoToID[crypto];
    // const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?convert=USD&id=${coinMarketCapCoinId}`
    // const data = await axios.get(url, { headers: { "X-CMC_PRO_API_KEY": '8c31eb0d-30db-400a-9e30-8a496b688770' } })
    // // console.log(data)
    // const price = data.data.data[coinMarketCapCoinId].quote.USD.price
    // console.log(Number(amount) * (1 / price))
    // console.log("amount",amount)
    // console.log("priceFromUSD",priceInUSD)
    return (Number(amount) * (1 / Number(priceInUSD))).toFixed(8);
  }


  export const  convertInUSD =  (amount: any, priceInUSD: any) => {

    //coin market cap api
    // const coinMarketCapCoinId = cryptoToID[crypto];
    // const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?convert=USD&id=${coinMarketCapCoinId}`
    // const data = await axios.get(url, { headers: { "X-CMC_PRO_API_KEY": '8c31eb0d-30db-400a-9e30-8a496b688770' } })
    // console.log(data)
    // const price = data.data.data[coinMarketCapCoinId].quote.USD.price
    // console.log(price)
    // console.log("priceInUSD",priceInUSD)

    return (Number(amount) * Number( priceInUSD)).toFixed(6);
  }


  export const  convertToUSD = async (crypto: any) => {

    // //coin market cap api
    // const coinMarketCapCoinId = cryptoToID[crypto];
    // const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?convert=USD&id=${coinMarketCapCoinId}`
    // const data = await axios.get(url, { headers: { "X-CMC_PRO_API_KEY": '8c31eb0d-30db-400a-9e30-8a496b688770' } })
    // const price = data.data.data[coinMarketCapCoinId].quote.USD.price
    
    
    
    // const coinMarketCapCoinId = cryptoToID[crypto];
    const url = `${CONVERT_CRYPTO_API}?crypto=${crypto}`
    const data = await axios.get(url)
    const price = data?.data?.price
    

    return price
  }


  export const calculateLendSubmission =  (amount: any, totalLend: any) => {
    return (Number(amount) / Number(totalLend)) * 100
  }
