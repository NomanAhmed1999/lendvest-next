'use client';
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { LendvestAjnaAddress, LendvestAjnaABI, WethAddress, WSTethAddress, WethABI, poolInfoAddress, poolInfoABI, PoolABI, PoolAddress } from "@/lib/index"
import { calculateLendSubmission, convertFROMUSD, convertInUSD, convertToUSD, cryptoToID } from '@/lib/helper'


import axios from 'axios';
import { AUTOFILL_API, borrow_upsert, lend_upsert, LENDERS_API, total_borrow_ask, total_lend, UPDATES_API } from '@/lib/api';
import { toast } from '@/hooks/use-toast';
import Header from '@/components/custom/header';
import CardWithTwoBtns from '@/components/custom/card-with-two-btns';
import CardWithTwoBtnsTwoInputs from '@/components/custom/card-with-two-btns-inputs';
import JustBtn from '@/components/custom/just-btn';
import Market from '@/components/custom/market';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Loader from '@/components/custom/loader';



function Beta() {

  const [loader, setLoader] = useState(false)
  const [count, setCount] = useState(0)
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState('');
  const [amountWethToUSD, setAmountWethToUSD] = useState('');
  const [amountWSTethToUSD, setAmountWWSTethToUSD] = useState('');

  const [poolAddress, setPoolAddress] = useState('');
  const [collateralAddress, setCollateralAddress] = useState('');
  const [quoteTokenAddress, setQuoteTokenAddress] = useState('');

  const [quoteTokenAmount, setQuoteTokenAmount] = useState('0');
  const [askForBorrowAmount, setAskForBorrowAmount] = useState('0');
  const [withdrawQuoteTokenAmount, setWithdrawQuoteTokenAmount] = useState('0');
  const [depositColletralAmount, setDepositColletralAmount] = useState('0');
  const [withdrawColletralAmount, setWithdrawColletralAmount] = useState('0');
  const [borrowAmount, setborrowAmount] = useState('0');
  const [borrowColletralAmount, setBorrowColletralAmount] = useState('0');
  const [repayColletralAmount, setRepayColletralAmount] = useState('0');
  const [repayQuoteAmount, setRepayQuoteAmount] = useState('0');

  const [borrowerAddressForAvoidLiquidation, setBorrowerAddressForAvoidLiquidation] = useState('');

  // Accounting states in usd
  const [totalAmountOfQuoteToken, settotalAmountOfQuoteToken] = useState('0.00');
  const [totalAmountOfCollateral, settotalAmountOfCollateral] = useState('0.00');
  const [totalAmountOfBorrowed, settotalAmountOfBorrowed] = useState('0.00');
  const [totalHelpingCollateral, settotalHelpingCollateral] = useState('0.00');
  const [totalAmountOnAave, settotalAmountOnAave] = useState('0.00');

  const [supplierToAmount, setsupplierToAmount] = useState('0.00');
  const [interestEarnedByUser, setinterestEarnedByUser] = useState('0.00');
  const [borrowerToCollateralAmount, setborrowerToCollateralAmount] = useState('0.00');
  const [borrowerToBorrowAmount, setborrowerToBorrowAmount] = useState('0.00');
  const [borrowerToAtoken, setborrowerToAtoken] = useState('0.00');
  const [collateralProviderToSuppliedAmount, setcollateralProviderToSuppliedAmount] = useState('0.00');
  const [collateralProviderToCrossColletralAmount, setcollateralProviderToCrossColletralAmount] = useState('0.00');
  const [balanceOfCollateralNotUsed, setbalanceOfCollateralNotUsed] = useState('0.00');
  const [InterestPaidForCollateral, setInterestPaidForCollateral] = useState('0.00');
  const [epochStatus, setepochStatus] = useState('OFF');

  // Server Utilization
  const [totalBorrowAsk, setTotalBorrowAsk] = useState<any>('0.00');
  const [totalBorrowAskUSD, setTotalBorrowAskUSD] = useState('0.00');
  const [totalLend, setTotalLend] = useState<any>('0.00');
  const [totalLendUSD, setTotalLendUSD] = useState('0.00');
  const [lenders, setLenders] = useState([])


  // Accounting states in actual values
  const [totalAmountOfQuoteTokenActual, settotalAmountOfQuoteTokenActual] = useState('0.000000');
  const [totalAmountOfCollateralActual, settotalAmountOfCollateralActual] = useState('0.00');
  const [totalAmountOfBorrowedActual, settotalAmountOfBorrowedActual] = useState('0.000000');
  const [totalHelpingCollateralActual, settotalHelpingCollateralActual] = useState('0.00');
  const [totalAmountOnAaveActual, settotalAmountOnAaveActual] = useState('0.000000');

  const [supplierToAmountActual, setsupplierToAmountActual] = useState('0.000000');
  const [interestEarnedByUserActual, setinterestEarnedByUserActual] = useState('0.000000');
  const [borrowerToCollateralAmountActual, setborrowerToCollateralAmountActual] = useState('0.000000');
  const [borrowerToBorrowAmountActual, setborrowerToBorrowAmountActual] = useState('0.00');
  const [borrowerToAtokenActual, setborrowerToAtokenActual] = useState('0.00');
  const [collateralProviderToSuppliedAmountActual, setcollateralProviderToSuppliedAmountActual] = useState('0.00');
  const [collateralProviderToCrossColletralAmountActual, setcollateralProviderToCrossColletralAmountActual] = useState('0.000000');
  const [balanceOfCollateralNotUsedActual, setbalanceOfCollateralNotUsedActual] = useState('0.00');
  const [InterestPaidForCollateralActual, setInterestPaidForCollateralActual] = useState('0.000000');


  // address for supplierToAmount

  const [supplierToAmountAddress, setsupplierToAmountAddress] = useState('');
  const [interestEarnedByUserAddress, setinterestEarnedByUserAddress] = useState('');
  const [borrowerToCollateralAmountAddress, setborrowerToCollateralAmountAddress] = useState('');
  const [borrowerToBorrowAmountAddress, setborrowerToBorrowAmountAddress] = useState('');
  const [borrowerToAtokenAddress, setborrowerToAtokenAddress] = useState('');
  const [collateralProviderToSuppliedAmountAddress, setcollateralProviderToSuppliedAmountAddress] = useState('');
  const [collateralProviderToCrossColletralAmountAddress, setcollateralProviderToCrossColletralAmountAddress] = useState('');
  const [balanceOfCollateralNotUsedAddress, setbalanceOfCollateralNotUsedAddress] = useState('');

  const [minutes, setMinutes] = useState(15);

  const [signer, setSigner] = useState();
  const [contract, setContract] = useState<any>();
  const [WSTContract, setWSTContract] = useState<any>();
  const [WethContract, setWethContract] = useState<any>();
  const [poolInfoContract, setPoolInfoContract] = useState<any>();
  const [poolContract, setPoolContract] = useState<any>();


  const [duration, setDuration] = useState(0); // Set initial duration in seconds (5 minutes)
  const [deadline, setDeadline] = useState(0);
  const [isActive, setIsActive] = useState(false);



  // Pool States
  const [collateralPledge, setCollateralPledge] = useState<any>(0); // Set initial duration in seconds (5 minutes)
  const [depositSize, setDepositSize] = useState<any>(0);
  const [curentDebt, setCurentDebt] = useState<any>(0);

  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    })
  }, [])

  const handleStart = () => {
    setDuration(minutes * 60)
    setDeadline(Date.now() + 1000 * minutes * 60);
    setIsActive(true);
  };


  const notifySuccess = (message: any) => {
    // toast.success(message);
    toast({
      title: "Success",
      description: message,
    })
  }

  const notifyError = (message: any) => {
    toast({
      title: "Error",
      description: message,
      variant: 'error'
    })
  }


  const handleReset = () => {
    setIsActive(false);
    // setDuration(5 * 60); // Reset to 5 minutes
  };


  const connectWallet = async () => {
    setLoader(true)
    try {
      if (window.ethereum) {
        // Request wallet connection
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider: any = new ethers.providers.Web3Provider(window.ethereum);
        const sig: any = await provider.getSigner();
        const address: any = await sig.getAddress();
        const balance: any = await provider.getBalance(address);
        const contract: any = new ethers.Contract(LendvestAjnaAddress, LendvestAjnaABI, sig);
        const Wethcont: any = new ethers.Contract(WethAddress, WethABI, sig);
        const WStethcont: any = new ethers.Contract(WSTethAddress, WethABI, sig);
        const poolInfo: any = new ethers.Contract(poolInfoAddress, poolInfoABI, sig);
        const pool: any = new ethers.Contract(PoolAddress, PoolABI, sig);

        setContract(contract)
        setSigner(sig);
        setWethContract(Wethcont);
        setWSTContract(WStethcont);
        setPoolInfoContract(poolInfo)
        setPoolContract(pool);
        // Update state
        setAddress(address);
        setBalance(ethers.utils.formatEther(balance));
        console.log('Wallet connected successfully');
        setLoader(false)
      } else {
        console.error('MetaMask is not installed. Please install MetaMask.');
        setLoader(false)
      }
    } catch (error) {
      console.error('Error connecting to wallet:', error);
      console.error('Failed to connect to wallet');
      setLoader(false)
    }
  };

  // Accounting Functions
  const getInterestPaidForCollateral = async () => {
      const amount = await contract.getInterestPaidByBorrowerToGetFullCollateral(ethers.utils.parseEther(borrowerToBorrowAmountActual));
    const amount_usd = convertInUSD(ethers.utils.formatEther(amount), amountWethToUSD);
    setInterestPaidForCollateral(amount_usd);
    setInterestPaidForCollateralActual(ethers.utils.formatEther(amount));
  };

const gettotalAmountOfQuoteToken = async () => {
    console.log("getting totalAmountOfQuoteToken")
    const amount = await contract.totalAmountOfQuoteToken();
    // console.log(amount)
    const amount_usd = convertInUSD(ethers.utils.formatEther(amount), amountWethToUSD);
    settotalAmountOfQuoteToken(amount_usd);
    settotalAmountOfQuoteTokenActual(ethers.utils.formatEther(amount));

  };


  const gettotalAmountOfCollateral = async () => {
    console.log("getting ttotalAmountOfCollateral")
    const amount = await contract.totalAmountOfCollateral();
    const amount_usd = convertInUSD(ethers.utils.formatEther(amount), amountWSTethToUSD);
    settotalAmountOfCollateral(amount_usd)
    settotalAmountOfCollateralActual(ethers.utils.formatEther(amount))

  };


  const gettotalAmountOnAave = async () => {
    console.log("getting totalAmountOnAave")
    const amount = await contract.totalAmountOnAave();
    const amount_usd = convertInUSD(ethers.utils.formatEther(amount), amountWethToUSD);
    settotalAmountOnAave(amount_usd)
    settotalAmountOnAaveActual(ethers.utils.formatEther(amount))

  };

  const gettotalAmountOfBorrowed = async () => {
    console.log("getting totalAmountOfBorrowed")
    const amount = await contract.totalAmountOfBorrowed();
    const amount_usd = convertInUSD(ethers.utils.formatEther(amount), amountWethToUSD);
    settotalAmountOfBorrowed(amount_usd)
    settotalAmountOfBorrowedActual(ethers.utils.formatEther(amount))

  };


  // Internal Accounting Functions
  const getsupplierToAmount = async () => {
    console.log("getting supplierToAmount")
    const amount = await contract.supplierToAmount(address);
    const amount_usd = convertInUSD(ethers.utils.formatEther(amount), amountWethToUSD);
    setsupplierToAmount(amount_usd)
    setsupplierToAmountActual(ethers.utils.formatEther(amount))

  };


  const getinterestEarnedByUser = async () => {
    console.log("getting interestEarnedByUser")
    const amount = await contract.interestEarnedByUser(address);
    const amount_usd = convertInUSD(ethers.utils.formatEther(amount), amountWethToUSD);
    setinterestEarnedByUser(amount_usd)
    setinterestEarnedByUserActual(ethers.utils.formatEther(amount))

  };


  const getborrowerToCollateralAmount = async () => {
    console.log("getting borrowerToCollateralAmount")
    const amount = await contract.borrowerToCollateralAmount(address);
    const amount_usd = convertInUSD(ethers.utils.formatEther(amount), amountWSTethToUSD);
    setborrowerToCollateralAmountActual(ethers.utils.formatEther(amount))
  };

  const getborrowerToBorrowAmount = async () => {
    console.log("getting borrowerToBorrowAmount")
    const amount = await contract.borrowerToBorrowAmount(address);
    const amount_usd = convertInUSD(ethers.utils.formatEther(amount), amountWethToUSD);
    setborrowerToBorrowAmount(amount_usd)
    setborrowerToBorrowAmountActual(ethers.utils.formatEther(amount))

  };

  const getborrowerToAtoken = async () => {
    console.log("getting borrowerToAtoken")
    const amount = await contract.borrowerToAtoken(address);
    const amount_usd = convertInUSD(ethers.utils.formatEther(amount), amountWSTethToUSD);
    setborrowerToAtoken(amount_usd)
    setborrowerToAtokenActual(ethers.utils.formatEther(amount))

  };


  const getcollateralProviderToSuppliedAmount = async () => {
    console.log("getting collateralProviderToSuppliedAmount")
    const amount = await contract.collateralProviderToSuppliedAmount(address);
    const amount_usd = convertInUSD(ethers.utils.formatEther(amount), amountWSTethToUSD);
    setcollateralProviderToSuppliedAmount(amount_usd)
    setcollateralProviderToSuppliedAmountActual(ethers.utils.formatEther(amount))

  };


  const getcollateralProviderToCrossColletralAmount = async () => {
    console.log("getting collateralProviderToCrossColletralAmount")
    const amount = await contract.collateralProviderToCrossColletralAmount(address);
    const amount_usd = convertInUSD(ethers.utils.formatEther(amount), amountWSTethToUSD);
    setcollateralProviderToCrossColletralAmount(amount_usd);
    setcollateralProviderToCrossColletralAmountActual(ethers.utils.formatEther(amount));

  };

  const getEpochStauts = async () => {
    const es = await contract.epochStarted();
    es ? setepochStatus("ON") : setepochStatus("OFF")

  };


  const getTotalBorrowAmountAsk = async () => {
    const totalBorrowAskAmount = await axios.get(total_borrow_ask);
    const totalBorrowAskAmountUSD = convertInUSD(totalBorrowAskAmount?.data?.total_borrow_ask, amountWethToUSD)
    setTotalBorrowAsk(totalBorrowAskAmount?.data?.total_borrow_ask)
    setTotalBorrowAskUSD(totalBorrowAskAmountUSD)

    const totalLendAmount = await axios.get(total_lend);
    const totalLendAmountUSD = convertInUSD(totalLendAmount?.data?.total_lend_amount, amountWethToUSD)


    setTotalLend(totalLendAmount?.data?.total_lend_amount)
    setTotalLendUSD(totalLendAmountUSD)

    const lendersData = await axios.get(LENDERS_API);
    console.log(">>>>", lendersData)
    setLenders(lendersData?.data)

  };


  const getCollateralPledge = async() =>{
    setCollateralPledge(ethers.utils.formatEther(await poolContract.pledgedCollateral()));
  }


  const getCurrentDebtOfPool = async() =>{
  const debt = await poolContract.debtInfo();
  console.log(debt);
  setCurentDebt(ethers.utils.formatEther(debt[0]));
  }

// total Lendings
  const getDepositSize = async() =>{
    setDepositSize(ethers.utils.formatEther(await  poolContract.depositSize()));
  }



  const getAllAcounting = () => {
    gettotalAmountOfQuoteToken()
    gettotalAmountOfCollateral()
    gettotalAmountOfBorrowed()
    gettotalAmountOnAave()
    getsupplierToAmount()
    getinterestEarnedByUser()
    getborrowerToCollateralAmount()
    getborrowerToBorrowAmount()
    getborrowerToAtoken()
    getcollateralProviderToSuppliedAmount()
    getcollateralProviderToCrossColletralAmount()
    getEpochStauts()
    getInterestPaidForCollateral()
    getTotalBorrowAmountAsk()
    getCollateralPledge()
    getCurrentDebtOfPool()
    getDepositSize()

  }


  const ApproveLendQuoteToken = async () => {
    setLoader(true)
    try {
      const approvTx = await WethContract.approve(LendvestAjnaAddress, ethers.utils.parseEther(`${quoteTokenAmount}`))
      await approvTx.wait();
      console.log("Approve Tx Suucessful..", approvTx)
      notifySuccess("Approve Tx Successful.")
      getAllAcounting()
      setLoader(false)
      
    } catch (error) {
      notifyError("Approve Tx Failed.")
      console.error("Approve Tx Failed..", error)
      setLoader(false)
    }

  }

  const LendQuoteToken = async () => {

    let flag = true;

    try {
      const tx = await contract.lendQuoteToken(ethers.utils.parseEther(`${quoteTokenAmount}`), { gasLimit: 3000000 });
      await tx.wait();



      console.log("Lend Quote Token Tx Successful..", tx)
      notifySuccess("Lend Quote Token Tx Successful.")
    } catch (error) {
      notifyError("Lend Quote Tokens Tx Failed.")
      flag = false;
      console.log(error)
    }

    // if (flag) {
    //   await axios.post(lend_upsert, {
    //     address: address,
    //     lend_amount: quoteTokenAmount
    //   })
    // }

  }

  const test = () => {
    try {
      // const approvTx = await WethContract.approve(LendvestAjnaAddress, ethers.utils.parseEther(`${quoteTokenAmount}`))
      console.log(ethers.utils.parseEther(`${quoteTokenAmount}`))
      // await approvTx.wait();
      // console.log("Approve Tx Suucessful..", approvTx)
      notifySuccess("Approve Tx Successful.")
      // getAllAcounting()

    } catch (error) {
      notifyError("Approve Tx Failed.")
      console.error("Approve Tx Failed..", error)
    }

  }


  const AskForBorrow = async () => {
    
    try {

      if (address) {


        const bfr = ethers.utils.formatEther(await poolInfoContract.borrowFeeRate(await contract.pool()))
        const dfr = ethers.utils.formatEther(await poolInfoContract.depositFeeRate(await contract.pool()))
        console.log("dffrr",dfr)
        const utilization_rate = 0.96;
        const depositCollateral = (((1 / 1.173) * Number(askForBorrowAmount)) + ((1 / 1.173) * Number(askForBorrowAmount)) * 0.1).toFixed(12)
        // const depositQuoteToken = (((Number(askForBorrowAmount) + Number(askForBorrowAmount) * 0.0005) / 0.96) / (1 + 0.00000008383561643836)).toFixed(12)
        const depositQuoteToken: any = (Number(askForBorrowAmount) + Number(askForBorrowAmount) * Number(dfr) +  (Number(askForBorrowAmount) / utilization_rate) - Number(askForBorrowAmount) ).toFixed(12)
        // const depositQuoteToken = (Number(askForBorrowAmount) + Number(askForBorrowAmount) * Number(dfr) ).toFixed(18)

        
        const repaycollateral = (Number(depositCollateral) - Number(depositCollateral) * Number(bfr)).toFixed(12)
        const withdraw = (depositQuoteToken -  Number(depositQuoteToken) * Number(dfr)).toFixed(12)




        // const url = `${AUTOFILL_API}?afb=${askForBorrowAmount}`
        // const res = await axios.get(url)
        // const { depositCollateral, depositQuoteToken, repaycollateral, withdraw } = res?.data?.cal
        setQuoteTokenAmount(depositQuoteToken);
        setborrowAmount(askForBorrowAmount);
        setBorrowColletralAmount(depositCollateral);
        setRepayColletralAmount(repaycollateral);
        setRepayQuoteAmount(askForBorrowAmount);
        setWithdrawQuoteTokenAmount(withdraw);


        try {

          axios.post(borrow_upsert, {
            address: address,
            borrow_ask: askForBorrowAmount,
          })
          notifySuccess("borrow amount saved")
        } catch (error) {
          notifyError("borrow amount not saved")
          console.error("server error", error)
        }


      }



    } catch (error) {
      notifyError("AutoFill Failed.")
      console.error("AutoFill Failed.", error)
    }



  };


// const testCalculations =  () => {
//   const askForBorrowAmount = "0.000001"
//   const dfr = "0.000013698630136986"
//   const depositQuoteToken = (Number(askForBorrowAmount) + Number(askForBorrowAmount) * Number(dfr) ).toFixed(18)
//   const 

// }

  const start_epoch = async () => {
    try {
      const valueInWei = ethers.BigNumber.from(minutes);
      const tx = await contract.start_epoch(valueInWei, { gasLimit: 3000000 });
      await tx.wait();
      console.log("start epoch Tx Successful..", tx)
      notifySuccess("Start Epoch Tx Successful.")

      handleStart()
      getAllAcounting()
    } catch (error) {
      notifyError("Start Epoch Tx Failed.")
      console.log(error)
    }


  };

  const end_epoch = async () => {
    try {

      const tx = await contract.end_epoch({ gasLimit: 3000000 });
      await tx.wait();
      console.log("end epoch Tx Successful..", tx)
      notifySuccess("End Epoch Tx Successful.")
      getAllAcounting()
    } catch (error) {
      notifyError("End Epoch Tx Failed.")
    }


  };

  const withdrawQuoteToken = async () => {
    try {
      // const a = await convertFROMUSD(withdrawQuoteTokenAmount, "WETH")
      const tx = await contract.withdrawQuoteToken(ethers.utils.parseEther(`${withdrawQuoteTokenAmount}`), { gasLimit: 3000000 });
      await tx.wait();
      console.log("withdrawQuoteToken Tx Successful..", tx)
      notifySuccess("Withdraw Quote Token Tx Successful.")
      getAllAcounting()
    } catch (error) {
      notifyError("Withdraw Quote Token Tx Failed.")
    }

  };



  const approveBorrow = async () => {
    try {
      const approvTx = await WSTContract.approve(LendvestAjnaAddress, ethers.utils.parseEther(`${borrowColletralAmount}`), { gasLimit: 3000000 })
      await approvTx.wait();
      console.log("Approve Tx Successful..", approvTx)
      notifySuccess("Approve Tx Successful.")
    } catch (error) {
      notifyError("Approve Tx Failed.")
    }


  };



  const borrow = async () => {

    try {
      const tx = await contract.borrow(ethers.utils.parseEther(`${borrowAmount}`), ethers.utils.parseEther(`${borrowColletralAmount}`), { gasLimit: 3000000 });
      await tx.wait();
      console.log("Borrow Tx Successful..", tx)
      notifySuccess("Borrow Tx Successful.")
      getAllAcounting()
    } catch (error) {
      notifyError("Borrow Tx Failed.")
    }

  };




  const repay = async () => {
    console.log("repayColletralAmountrepayColletralAmount", repayColletralAmount)
    console.log(ethers.utils.parseEther(`${repayColletralAmount}`))
    try {
      const tx = await contract.repay(ethers.utils.parseEther(`${repayColletralAmount}`), { gasLimit: 3000000 });
      // const tx = await contract.repayTest(ethers.utils.parseEther(`${0.000001}`),ethers.utils.parseEther(`${repayColletralAmount}`) ,{ gasLimit: 3000000 });
      
      await tx.wait();
      console.log("Repay Tx Successful..", tx)
      getAllAcounting()
      notifySuccess("Repay Tx Successful.")
    } catch (error) {
      console.log(error);
      notifyError("Repay Tx Failed.")
    }
}



  const approveDepositColletralForLiquidation = async () => {
    try {
      const approvTx = await WSTContract.approve(LendvestAjnaAddress, ethers.utils.parseEther(`${depositColletralAmount}`), { gasLimit: 3000000 })
      await approvTx.wait();
      console.log("Approve Tx Successful..", approvTx)
      notifySuccess("Approve Tx Successful.")
    } catch (error) {
      notifyError("Approve Tx Failed.")
    }
};


  const depositColletralForLiquidation = async () => {
    try {
      const tx = await contract.depositCollateralForLiquidation(ethers.utils.parseEther(`${depositColletralAmount}`), { gasLimit: 3000000 });
      await tx.wait();
      console.log("depositColletralForLiquidation Tx Successful..", tx)
      getAllAcounting()
      notifySuccess("Deposit Collateral Tx Successful.")
    } catch (error) {
      notifyError("Deposit Collateral Tx Failed.")
    }
  };

  const withdrawColletralofLiquidation = async () => {

    // const b = await convertFROMUSD(withdrawColletralAmount, "WSTETH")
    try {
      const tx = await contract.withdrawCollateralForLiquidation(ethers.utils.parseEther(`${withdrawColletralAmount}`), { gasLimit: 3000000 });
      await tx.wait();
      console.log("withdrawColletralofLiquidation Tx Successful..", tx)
      getAllAcounting()
      notifySuccess("Withdraw Collateral Tx Successful.")
    } catch (error) {
      notifyError("Withdraw Collateral Tx Failed.")
    }

  };


  const balanceColletralRatio = async () => {
    const tx = await contract.balanceColletralRatio(borrowerAddressForAvoidLiquidation, { gasLimit: 3000000 });
    await tx.wait();
    console.log("balanceColletralRatio Tx Successful..", tx)
    getAllAcounting()

  };


  const getQuoteTokenAddress = async () => {
    console.log("Hello QuoteToken Address ")
    const address = await contract.getQuoteTokenAddress();
    setQuoteTokenAddress(address)

  };


  const getCollateralAddress = async () => {
    console.log("Hello Colletral Address")
    const address = await contract.getCollateralAddress();
    setCollateralAddress(address)
  };


   const getPoolAddress = async () => {
    const address = await contract.getPoolAddress();
    setPoolAddress(address);
    window.open(`https://ajnafi.com/polygon/pools/${address}`, '_blank')?.focus();

  };


  
  const gotoLendvestVault =  () => {
    window.open(`https://polygonscan.com/address/${LendvestAjnaAddress}#code`, '_blank')?.focus();

  };

  const getAmounts = async () => {
    setAmountWethToUSD(await convertToUSD("WETH"));
    setAmountWWSTethToUSD(await convertToUSD("WSTETH"));
  }
  const pollForUpdates = async () => {
    try {
    const response = await axios.get(UPDATES_API, { timeout: 30000 }); // 30 seconds timeout
    if (response.status === 200) {
      setTotalBorrowAsk(response.data.totalBorrow)
      setTotalBorrowAskUSD(convertInUSD(response.data.totalBorrow, amountWethToUSD))
      setTotalLend(response.data.totalLend)
      setTotalLendUSD(convertInUSD(response.data.totalLend, amountWethToUSD))
      setLenders(response?.data?.lenders)
    
    } else if (response.status === 204) {
      // No content, indicating no updates
      console.log('No updates available.');
    }
  } catch (err: any) {
    if (err.code === 'ECONNABORTED') {
      // Handle timeout error
      console.error('Polling request timed out:', err);
    } else {
      // Handle other errors
      console.error('Error fetching updates:', err);
    }
 
  }
};


  useEffect(() => {
    if (address && amountWethToUSD && amountWSTethToUSD) {
      getAllAcounting();
    }
    address && getAllAcounting();
  }, [address])

  useEffect(() => {
    // getAmounts()
    const interval = setInterval(pollForUpdates, 5000); // Poll every 5 seconds
    pollForUpdates()
    return () => clearInterval(interval); // Clean up on unmount

  }, []);



  return (
    <div>
      {
        loader && <Loader />
      }
      <Header epochStatus={epochStatus} onBtnClick={connectWallet} wallet={address} duration={duration} isActive={isActive} setDuration={setDuration} deadline={deadline} handleReset={handleReset} />
      {/* <Timer /> */}
      <div className='flex justify-center items-center flex-col mt-36 bg-white dark:bg-black'>
        <div className='w-[75%] flex justify-between flex-wrap'>
          <CardWithTwoBtns text='WETH' crypto={true} btn1='Approve' btn2='Lend' value={quoteTokenAmount} label="amount" isDouble={true} isApprove={true} onBtnClick={ApproveLendQuoteToken} onSecBtnClick={LendQuoteToken} amountInUSD={amountWethToUSD} setFunc={setQuoteTokenAmount} />
          <CardWithTwoBtns text='minutes' btn1='Begin Term Loan' btn2='' label="no. of minutes" isApprove={false} onBtnClick={start_epoch} value={minutes} setFunc={setMinutes} valueText={''} isDouble={false} />
          </div>
          
          
        <div className='w-[75%] flex justify-center flex-wrap'>
          <CardWithTwoBtns text='WETH' btn1='Ask For Borrow' btn2='' isDouble={false} isApprove={false} onBtnClick={AskForBorrow} crypto={true} amountInUSD={amountWethToUSD} label="amount" value={askForBorrowAmount} setFunc={setAskForBorrowAmount} />
        </div>
          
          
          
        <div className='w-[75%] flex justify-between flex-wrap'>
          <CardWithTwoBtnsTwoInputs text='WSTETH' text2='WETH' btn1='Approve' btn2='Borrow WETH' isDouble={true} isApprove={true} apprveFunc={approveBorrow} onBtnClick={borrow} amountWethToUSD={amountWethToUSD} amountWSTethToUSD={amountWSTethToUSD} value1={borrowColletralAmount} setFunc1={setBorrowColletralAmount} value2={borrowAmount} setFunc2={setborrowAmount} />
          <CardWithTwoBtns text='WSTETH' btn1='Repay' btn2='' isDouble={false} isApprove={false} onBtnClick={repay} crypto={true} amountInUSD={amountWSTethToUSD} label="amount" value={repayColletralAmount} setFunc={setRepayColletralAmount} />
          <CardWithTwoBtns text='WSTETH' btn1='Approve' btn2='Deposit Collateral' isDouble={true} isApprove={true} onBtnClick={approveDepositColletralForLiquidation} onSecBtnClick={depositColletralForLiquidation} crypto={true} amountInUSD={amountWSTethToUSD} label="amount" value={depositColletralAmount} setFunc={setDepositColletralAmount} />
          <CardWithTwoBtns text='WETH' btn1='Withdraw WETH' btn2='' isDouble={false} isApprove={false} onBtnClick={withdrawQuoteToken} crypto="WETH" amountInUSD={amountWethToUSD} label="amount" value={withdrawQuoteTokenAmount} setFunc={setWithdrawQuoteTokenAmount} />
          <CardWithTwoBtns text='WSTETH' btn1='Withdraw Collateral' btn2='' isDouble={false} isApprove={false} onBtnClick={withdrawColletralofLiquidation} crypto="WSTETH" amountInUSD={amountWSTethToUSD} text2="withdrawCollateralofLiquidation" label="amount" value={withdrawColletralAmount} setFunc={setWithdrawColletralAmount} />

        </div>

        
        <div className='w-[75%] flex justify-between flex-wrap'>
          <JustBtn onBtnClick={end_epoch} text='End Term Loan' />
          <JustBtn onBtnClick={getQuoteTokenAddress} text='Add WETH Address to Wallet' tokenAddress={quoteTokenAddress} />
          <JustBtn onBtnClick={getQuoteTokenAddress} text='Add WSTETH Address to Wallet' tokenAddress={collateralAddress} />
          <JustBtn onBtnClick={getPoolAddress} text="Go To Lendvest&apos;s Ajna Pool" tokenAddress={poolAddress} />
          </div>
          
        <div className='w-[75%] flex justify-center flex-wrap'>
          <JustBtn onBtnClick={gotoLendvestVault} text="Go To Lendvest&apos;s Ajna Vault" />
        </div>

        <Market />


        <div className='w-[80%] flex justify-around flex-wrap'>
          <Card data-aos="fade-up" data-aos-delay="100" className='w-[400px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
            <CardHeader>
              <CardTitle className='text-center text-xl'>Pool Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-center text-xl'>Deposit Size {depositSize} WETH</p>
              <p className='text-center text-xl'>Collateral Pledge {collateralPledge} WETH</p>
              <p className='text-center text-xl'>Current Debt {curentDebt} WETH</p>
            </CardContent>
          </Card>

          <Card data-aos="fade-up" data-aos-delay="100" className='flex justify-center items-center flex-col w-[400px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
            <CardHeader>
              <CardTitle className='text-center text-xl'>WETH In Lendvest&apos;s Contract</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-center text-xl'>WETH {totalAmountOfQuoteTokenActual}</p>
              <p className='text-center text-xl'>US ${totalAmountOfQuoteToken}</p>
            </CardContent>
          </Card>

          <Card data-aos="fade-up" data-aos-delay="100" className='flex justify-center items-center flex-col w-[400px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
            <CardHeader>
              <CardTitle className='text-center text-xl'>Borrower&apos;s Interest Owed in WETH</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-center text-xl'>WETH {InterestPaidForCollateralActual}</p>
              <p className='text-center text-xl'>US ${InterestPaidForCollateral}</p>
            </CardContent>
          </Card>

          <Card data-aos="fade-up" data-aos-delay="100" className='w-[400px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
            <CardHeader>
              <CardTitle className='text-center text-xl'>Total Borrow Ask</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-center text-xl'>WETH {totalBorrowAsk}</p>
              <p className='text-center text-xl'>US ${totalBorrowAskUSD}</p>
              <p className='text-center text-xl'>Total Lend</p>
              <p className='text-center text-xl'>WETH {totalLend}</p>
              <p className='text-center text-xl'>US ${totalLendUSD}</p>
              <p className='text-center text-xl'>Lenders Submit {calculateLendSubmission(totalLend, totalBorrowAsk)}% of Max Lend</p>
              <p className='text-center text-xl'>Remaining Utilization {calculateLendSubmission(totalBorrowAsk - totalLend, totalBorrowAsk)}% of Max Lend</p>
            </CardContent>
          </Card>

          
        </div>


        {/* <div className='w-[100%] flex justify-center'>
          <CardWithTwoBtns text='WETH' btn1='Ask For Borrow' btn2='' value={0} valueText={''} isDouble={false} />
        </div> */}

        {/* <div className='w-[80%] grid gap-4 sm:grid-cols-1 lg:grid-cols-2'>
          <CardWithTwoBtnsTwoInputs text='WETH' btn1='Approve' btn2='Borrow WETH' value={''} valueText={'$0.00'} isDouble={true} />
          <CardWithTwoBtns text='WSTETH' btn1='Repay' btn2='' value={0} valueText={'$0.00'} isDouble={false} />
          <CardWithTwoBtns text='WSTETH' btn1='Approve' btn2='Deposit Collateral' value={''} valueText={'$0.00'} isDouble={true} />
          <CardWithTwoBtns text='WETH' btn1='Withdraw WETH' btn2='' value={0} valueText={'$0.00'} isDouble={false} />
        </div> */}

        {/* <div className='w-[80%] grid gap-4 sm:grid-cols-1 lg:grid-cols-2'>
          <CardWithTwoBtns text='WSTETH' btn1='Withdraw Collateral' btn2='' value={0} valueText={'$0.00'} isDouble={false} />
        </div> */}


        <div className='w-[80%] flex justify-around flex-wrap'>
          <Card data-aos="fade-up" data-aos-delay="100" className='w-[400px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
            <CardHeader>
              <CardTitle className='text-center text-xl'>WSTETH In Lendvest&apos;s Contract</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-center text-xl'>WSTETH {totalAmountOfQuoteTokenActual}</p>
              <p className='text-center text-xl'>US ${totalAmountOfQuoteToken}</p>
            </CardContent>
          </Card>


          
          <Card data-aos="fade-up" data-aos-delay="100" className='w-[400px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
            <CardHeader>
              <CardTitle className='text-center text-xl'>Amount Lent on Aave</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-center text-xl'>WETH {totalAmountOfBorrowedActual}</p>
              <p className='text-center text-xl'>US ${totalAmountOfBorrowed}</p>
            </CardContent>
          </Card>


          <Card data-aos="fade-up" data-aos-delay="100" className='w-[400px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
            <CardHeader>
              <CardTitle className='text-center text-xl'>Cross Collateralization in Reserve</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-center text-xl'>WETH {totalAmountOnAaveActual}</p>
              <p className='text-center text-xl'>US ${totalAmountOnAave}</p>
            </CardContent>
          </Card>


          <Card data-aos="fade-up" data-aos-delay="100" className='w-[400px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
            <CardHeader>
              <CardTitle className='text-center text-xl'>Lender&apos;s Amount in WETH</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-center text-xl'>WETH {supplierToAmountActual}</p>
              <p className='text-center text-xl'>US ${supplierToAmount}</p>
            </CardContent>
          </Card>


          <Card data-aos="fade-up" data-aos-delay="100" className='w-[400px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
            <CardHeader>
              <CardTitle className='text-center text-xl'>Lender&apos;s Interest Earned in WETH</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-center text-xl'>WETH {interestEarnedByUserActual}</p>
              <p className='text-center text-xl'>US ${interestEarnedByUser}</p>
            </CardContent>
          </Card>


          <Card data-aos="fade-up" data-aos-delay="100" className='w-[400px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
            <CardHeader>
              <CardTitle className='text-center text-xl'>Borrower&apos;s Collateral in WSTETH</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-center text-xl'>WSTETH {borrowerToCollateralAmountActual}</p>
              <p className='text-center text-xl'>US ${borrowerToCollateralAmount}</p>
            </CardContent>
          </Card>


          <Card data-aos="fade-up" data-aos-delay="100" className='w-[400px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
            <CardHeader>
              <CardTitle className='text-center text-xl'>Collateral Lender&apos;s Amount Deposited in WSTETH</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-center text-xl'>WSTETH 0.000000</p>
              <p className='text-center text-xl'>US $0.00</p>
            </CardContent>
          </Card>


          <Card data-aos="fade-up" data-aos-delay="100" className='w-[400px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
            <CardHeader>
              <CardTitle className='text-center text-xl'>Collateral Lender&apos;s Amount Lent in WSTETH</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-center text-xl'>WSTETH {collateralProviderToCrossColletralAmountActual}</p>
              <p className='text-center text-xl'>US ${collateralProviderToCrossColletralAmount}</p>
            </CardContent>
          </Card>



        </div>
      </div>
    </div>
  )
}

export default Beta;