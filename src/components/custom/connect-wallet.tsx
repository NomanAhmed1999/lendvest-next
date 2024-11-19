'use client'
import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers';
import { convertToUSD } from '@/lib/helper'
import axios from 'axios';
import { LENDERS_API } from '@/lib/api';
import { PoolABI, PoolAddress } from '@/lib';
import { Button } from '../ui/button';
// import { MetaMaskInpageProvider } from "@metamask/providers";



function ConnectWallet() {


    // const location = useLocation();
    // const navigate = useNavigate();
    const [address, setAddress] = useState('');
    // const [balance, setBalance] = useState('');
    const [amountWethToUSD, setAmountWethToUSD] = useState('');
    const [amountWSTethToUSD, setAmountWWSTethToUSD] = useState('');

    // const [poolAddress, setPoolAddress] = useState('');
    // const [collateralAddress, setCollateralAddress] = useState('');
    // const [quoteTokenAddress, setQuoteTokenAddress] = useState('');

    // const [quoteTokenAmount, setQuoteTokenAmount] = useState('0');
    // const [askForBorrowAmount, setAskForBorrowAmount] = useState('0');
    // const [withdrawQuoteTokenAmount, setWithdrawQuoteTokenAmount] = useState('0');
    // const [depositColletralAmount, setDepositColletralAmount] = useState('0');
    // const [withdrawColletralAmount, setWithdrawColletralAmount] = useState('0');
    // const [borrowAmount, setborrowAmount] = useState('0');
    // const [borrowColletralAmount, setBorrowColletralAmount] = useState('0');
    // const [repayColletralAmount, setRepayColletralAmount] = useState('0');
    // const [repayQuoteAmount, setRepayQuoteAmount] = useState('0');

    // const [borrowerAddressForAvoidLiquidation, setBorrowerAddressForAvoidLiquidation] = useState('');

    // // Accounting states in usd
    // const [totalAmountOfQuoteToken, settotalAmountOfQuoteToken] = useState('0.00');
    // const [totalAmountOfCollateral, settotalAmountOfCollateral] = useState('0.00');
    // const [totalAmountOfBorrowed, settotalAmountOfBorrowed] = useState('0.00');
    // const [totalHelpingCollateral, settotalHelpingCollateral] = useState('0.00');
    // const [totalAmountOnAave, settotalAmountOnAave] = useState('0.00');

    // const [supplierToAmount, setsupplierToAmount] = useState('0.00');
    // const [interestEarnedByUser, setinterestEarnedByUser] = useState('0.00');
    // const [borrowerToCollateralAmount, setborrowerToCollateralAmount] = useState('0.00');
    // const [borrowerToBorrowAmount, setborrowerToBorrowAmount] = useState('0.00');
    // const [borrowerToAtoken, setborrowerToAtoken] = useState('0.00');
    // const [collateralProviderToSuppliedAmount, setcollateralProviderToSuppliedAmount] = useState('0.00');
    // const [collateralProviderToCrossColletralAmount, setcollateralProviderToCrossColletralAmount] = useState('0.00');
    // const [balanceOfCollateralNotUsed, setbalanceOfCollateralNotUsed] = useState('0.00');
    // const [InterestPaidForCollateral, setInterestPaidForCollateral] = useState('0.00');
    // const [epochStatus, setepochStatus] = useState('No');

    // Server Utilization
    // const [totalBorrowAsk, setTotalBorrowAsk] = useState('0.00');
    // const [totalBorrowAskUSD, setTotalBorrowAskUSD] = useState('0.00');
    // const [totalLend, setTotalLend] = useState('0.00');
    // const [totalLendUSD, setTotalLendUSD] = useState('0.00');
    // const [lenders, setLenders] = useState([])


    // Accounting states in actual values
    // const [totalAmountOfQuoteTokenActual, settotalAmountOfQuoteTokenActual] = useState('0.000000');
    // const [totalAmountOfCollateralActual, settotalAmountOfCollateralActual] = useState('0.00');
    // const [totalAmountOfBorrowedActual, settotalAmountOfBorrowedActual] = useState('0.000000');
    // const [totalHelpingCollateralActual, settotalHelpingCollateralActual] = useState('0.00');
    // const [totalAmountOnAaveActual, settotalAmountOnAaveActual] = useState('0.000000');

    // const [supplierToAmountActual, setsupplierToAmountActual] = useState('0.000000');
    // const [interestEarnedByUserActual, setinterestEarnedByUserActual] = useState('0.000000');
    // const [borrowerToCollateralAmountActual, setborrowerToCollateralAmountActual] = useState('0.000000');
    // const [borrowerToBorrowAmountActual, setborrowerToBorrowAmountActual] = useState('0.00');
    // const [borrowerToAtokenActual, setborrowerToAtokenActual] = useState('0.00');
    // const [collateralProviderToSuppliedAmountActual, setcollateralProviderToSuppliedAmountActual] = useState('0.00');
    // const [collateralProviderToCrossColletralAmountActual, setcollateralProviderToCrossColletralAmountActual] = useState('0.000000');
    // const [balanceOfCollateralNotUsedActual, setbalanceOfCollateralNotUsedActual] = useState('0.00');
    // const [InterestPaidForCollateralActual, setInterestPaidForCollateralActual] = useState('0.000000');


    // address for supplierToAmount

    // const [supplierToAmountAddress, setsupplierToAmountAddress] = useState('');
    // const [interestEarnedByUserAddress, setinterestEarnedByUserAddress] = useState('');
    // const [borrowerToCollateralAmountAddress, setborrowerToCollateralAmountAddress] = useState('');
    // const [borrowerToBorrowAmountAddress, setborrowerToBorrowAmountAddress] = useState('');
    // const [borrowerToAtokenAddress, setborrowerToAtokenAddress] = useState('');
    // const [collateralProviderToSuppliedAmountAddress, setcollateralProviderToSuppliedAmountAddress] = useState('');
    // const [collateralProviderToCrossColletralAmountAddress, setcollateralProviderToCrossColletralAmountAddress] = useState('');
    // const [balanceOfCollateralNotUsedAddress, setbalanceOfCollateralNotUsedAddress] = useState('');

    // const [minutes, setMinutes] = useState(15);

    // const [signer, setSigner]: any = useState();
    // const [contract, setContract]: any = useState();
    // const [WSTContract, setWSTContract]: any = useState();
    // const [WethContract, setWethContract]: any = useState();
    // const [poolInfoContract, setPoolInfoContract]: any = useState();
    const [poolContract, setPoolContract]: any = useState();


    // const [duration, setDuration] = useState(0); // Set initial duration in seconds (5 minutes)
    // const [deadline, setDeadline] = useState(0);
    // const [isActive, setIsActive] = useState(false);



    // Pool States
    // const [collateralPledge, setCollateralPledge]: any = useState(0); // Set initial duration in seconds (5 minutes)
    // const [depositSize, setDepositSize]: any = useState(0);
    // const [curentDebt, setCurentDebt]: any = useState(0);

    // const handleStart = () => {
    //     setDuration(minutes * 60)
    //     setDeadline(Date.now() + 1000 * minutes * 60);
    //     setIsActive(true);
    // };


    // const notifySuccess = (message: any) => {
    //     console.log('msg', message);
        
    //     // toast.success(message);
    // }

    // const notifyError = (message: any) => {
    //     console.log('msg', message);
    //     // toast.error(message);
    // }


    // const handleReset = () => {
    //     setIsActive(false);
    //     // setDuration(5 * 60); // Reset to 5 minutes
    // };


    const connectWallet = async () => {
        try {
            if (window.ethereum) {
                // Request wallet connection
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const sig = provider.getSigner();
                const address = await sig.getAddress();
                // const balance = await provider.getBalance(address);
                // const contract: any = new ethers.Contract(LendvestAjnaAddress, LendvestAjnaABI, sig);
                // const Wethcont: any = new ethers.Contract(WethAddress, WethABI, sig);
                // const WStethcont: any = new ethers.Contract(WSTethAddress, WethABI, sig);
                // const poolInfo: any = new ethers.Contract(poolInfoAddress, poolInfoABI, sig);
                const pool: any = new ethers.Contract(PoolAddress, PoolABI, sig);

                // setContract(contract)
                // setSigner(sig);
                // setWethContract(Wethcont);
                // setWSTContract(WStethcont);
                // setPoolInfoContract(poolInfo)
                setPoolContract(pool);
                // Update state
                setAddress(address);
                // setBalance(ethers.utils.formatEther(balance));
                console.log('Wallet connected successfully');
            } else {
                console.error('MetaMask is not installed. Please install MetaMask.');
            }
        } catch (error) {
            console.error('Error connecting to wallet:', error);
            console.error('Failed to connect to wallet');
        }
    };

    // Accounting Functions
    const getInterestPaidForCollateral = async () => {
        // const amount: any = await contract.getInterestPaidByBorrowerToGetFullCollateral(ethers.utils.parseEther(borrowerToBorrowAmountActual));
        // const amount_usd = convertInUSD(ethers.utils.formatEther(amount), amountWethToUSD);
        // setInterestPaidForCollateral(amount_usd);
        // setInterestPaidForCollateralActual(ethers.utils.formatEther(amount));
    };

    const gettotalAmountOfQuoteToken = async () => {
        console.log("getting totalAmountOfQuoteToken")
        // const amount = await contract.totalAmountOfQuoteToken();
        // console.log(amount)
        // const amount_usd = convertInUSD(ethers.utils.formatEther(amount), amountWethToUSD);
        // settotalAmountOfQuoteToken(amount_usd);
        // settotalAmountOfQuoteTokenActual(ethers.utils.formatEther(amount));

    };


    const gettotalAmountOfCollateral = async () => {
        console.log("getting ttotalAmountOfCollateral")
        // const amount: any = await contract.totalAmountOfCollateral();
        // const amount_usd: any = convertInUSD(ethers.utils.formatEther(amount), amountWSTethToUSD);
        // settotalAmountOfCollateral(amount_usd)
        // settotalAmountOfCollateralActual(ethers.utils.formatEther(amount))

    };


    const gettotalAmountOnAave = async () => {
        console.log("getting totalAmountOnAave")
        // const amount = await contract.totalAmountOnAave();
        // const amount_usd = convertInUSD(ethers.utils.formatEther(amount), amountWethToUSD);
        // settotalAmountOnAave(amount_usd)
        // settotalAmountOnAaveActual(ethers.utils.formatEther(amount))

    };

    const gettotalAmountOfBorrowed = async () => {
        console.log("getting totalAmountOfBorrowed")
        // const amount = await contract.totalAmountOfBorrowed();
        // const amount_usd = convertInUSD(ethers.utils.formatEther(amount), amountWethToUSD);
        // settotalAmountOfBorrowed(amount_usd)
        // settotalAmountOfBorrowedActual(ethers.utils.formatEther(amount))

    };


    // Internal Accounting Functions
    const getsupplierToAmount = async () => {
        console.log("getting supplierToAmount")
        // const amount = await contract.supplierToAmount(address);
        // const amount_usd = convertInUSD(ethers.utils.formatEther(amount), amountWethToUSD);
        // setsupplierToAmount(amount_usd)
        // setsupplierToAmountActual(ethers.utils.formatEther(amount))

    };


    const getinterestEarnedByUser = async () => {
        console.log("getting interestEarnedByUser")
        // const amount = await contract.interestEarnedByUser(address);
        // const amount_usd = convertInUSD(ethers.utils.formatEther(amount), amountWethToUSD);
        // setinterestEarnedByUser(amount_usd)
        // setinterestEarnedByUserActual(ethers.utils.formatEther(amount))

    };


    const getborrowerToCollateralAmount = async () => {
        console.log("getting borrowerToCollateralAmount")
        // const amount = await contract.borrowerToCollateralAmount(address);
        // const amount_usd = convertInUSD(ethers.utils.formatEther(amount), amountWSTethToUSD);
        // setborrowerToCollateralAmountActual(ethers.utils.formatEther(amount))
    };

    const getborrowerToBorrowAmount = async () => {
        console.log("getting borrowerToBorrowAmount")
        // const amount = await contract.borrowerToBorrowAmount(address);
        // const amount_usd = convertInUSD(ethers.utils.formatEther(amount), amountWethToUSD);
        // setborrowerToBorrowAmount(amount_usd)
        // setborrowerToBorrowAmountActual(ethers.utils.formatEther(amount))

    };

    const getborrowerToAtoken = async () => {
        console.log("getting borrowerToAtoken")
        // const amount = await contract.borrowerToAtoken(address);
        // const amount_usd = convertInUSD(ethers.utils.formatEther(amount), amountWSTethToUSD);
        // setborrowerToAtoken(amount_usd)
        // setborrowerToAtokenActual(ethers.utils.formatEther(amount))

    };


    const getcollateralProviderToSuppliedAmount = async () => {
        console.log("getting collateralProviderToSuppliedAmount")
        // const amount = await contract.collateralProviderToSuppliedAmount(address);
        // const amount_usd = convertInUSD(ethers.utils.formatEther(amount), amountWSTethToUSD);
        // setcollateralProviderToSuppliedAmount(amount_usd)
        // setcollateralProviderToSuppliedAmountActual(ethers.utils.formatEther(amount))

    };


    const getcollateralProviderToCrossColletralAmount = async () => {
        console.log("getting collateralProviderToCrossColletralAmount")
        // const amount = await contract.collateralProviderToCrossColletralAmount(address);
        // const amount_usd = convertInUSD(ethers.utils.formatEther(amount), amountWSTethToUSD);
        // setcollateralProviderToCrossColletralAmount(amount_usd);
        // setcollateralProviderToCrossColletralAmountActual(ethers.utils.formatEther(amount));

    };

    const getEpochStauts = async () => {
        // const es = await contract.epochStarted();
        // es ? setepochStatus("Yes") : setepochStatus("No")

    };


    const getTotalBorrowAmountAsk = async () => {
        // const totalBorrowAskAmount = await axios.get(total_borrow_ask, {
        //     headers: {
        //       'Content-Type': 'application/json',
        //       'Accept': 'application/json'
        //     }
        //   });
        // const totalBorrowAskAmountUSD = convertInUSD(totalBorrowAskAmount?.data?.total_borrow_ask, amountWethToUSD)
        // // setTotalBorrowAsk(totalBorrowAskAmount?.data?.total_borrow_ask)
        // // setTotalBorrowAskUSD(totalBorrowAskAmountUSD)

        // const totalLendAmount = await axios.get(total_lend, {
        //     headers: {
        //       'Content-Type': 'application/json',
        //       'Accept': 'application/json'
        //     }
        //   });
        // const totalLendAmountUSD = convertInUSD(totalLendAmount?.data?.total_lend_amount, amountWethToUSD)


        // setTotalLend(totalLendAmount?.data?.total_lend_amount)
        // setTotalLendUSD(totalLendAmountUSD)

        const lendersData = await axios.get(LENDERS_API, {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          });
        console.log(">>>>", lendersData)
        // setLenders(lendersData?.data)

    };


    const getCollateralPledge = async () => {
        // setCollateralPledge(ethers.utils.formatEther(await poolContract.pledgedCollateral()));
    }


    const getCurrentDebtOfPool = async () => {
        const debt = await poolContract.debtInfo();
        console.log(debt);
        // setCurentDebt(ethers.utils.formatEther(debt[0]));
    }

    // total Lendings
    const getDepositSize = async () => {
        // setDepositSize(ethers.utils.formatEther(await poolContract.depositSize()));
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


    // const ApproveLendQuoteToken = async () => {
    //     try {
    //         const approvTx = await WethContract.approve(LendvestAjnaAddress, ethers.utils.parseEther(`${quoteTokenAmount}`))
    //         await approvTx.wait();
    //         console.log("Approve Tx Suucessful..", approvTx)
    //         notifySuccess("Approve Tx Successful.")
    //         getAllAcounting()

    //     } catch (error) {
    //         notifyError("Approve Tx Failed.")
    //         console.error("Approve Tx Failed..", error)
    //     }

    // }

    // const LendQuoteToken = async () => {

    //     var flag = true;

    //     try {
    //         const tx = await contract.lendQuoteToken(ethers.utils.parseEther(`${quoteTokenAmount}`), { gasLimit: 3000000 });
    //         await tx.wait();



    //         console.log("Lend Quote Token Tx Successful..", tx)
    //         notifySuccess("Lend Quote Token Tx Successful.")
    //     } catch (error) {
    //         notifyError("Lend Quote Tokens Tx Failed.")
    //         flag = false;
    //         console.log(error)
    //     }

    //     if (flag) {
    //         await axios.post(lend_upsert, {
    //             address: address,
    //             lend_amount: quoteTokenAmount
    //         }, {
    //             headers: {
    //               'Content-Type': 'application/json',
    //               'Accept': 'application/json'
    //             }
    //           })
    //     }

    // }

    // const test = () => {
    //     try {
    //         // const approvTx = await WethContract.approve(LendvestAjnaAddress, ethers.utils.parseEther(`${quoteTokenAmount}`))
    //         console.log(ethers.utils.parseEther(`${quoteTokenAmount}`))
    //         // await approvTx.wait();
    //         // console.log("Approve Tx Suucessful..", approvTx)
    //         notifySuccess("Approve Tx Successful.")
    //         // getAllAcounting()

    //     } catch (error) {
    //         notifyError("Approve Tx Failed.")
    //         console.error("Approve Tx Failed..", error)
    //     }

    // }


    // const AskForBorrow = async () => {
    //     try {

    //         if (address) {


    //             const bfr = ethers.utils.formatEther(await poolInfoContract.borrowFeeRate(await contract.pool()))
    //             const dfr = ethers.utils.formatEther(await poolInfoContract.depositFeeRate(await contract.pool()))
    //             console.log("dffrr", dfr)
    //             const utilization_rate = 0.96;
    //             const depositCollateral = (((1 / 1.173) * Number(askForBorrowAmount)) + ((1 / 1.173) * Number(askForBorrowAmount)) * 0.1).toFixed(12)
    //             // const depositQuoteToken = (((Number(askForBorrowAmount) + Number(askForBorrowAmount) * 0.0005) / 0.96) / (1 + 0.00000008383561643836)).toFixed(12)
    //             const depositQuoteToken: any = (Number(askForBorrowAmount) + Number(askForBorrowAmount) * Number(dfr) + (Number(askForBorrowAmount) / utilization_rate) - Number(askForBorrowAmount)).toFixed(12)
    //             // const depositQuoteToken = (Number(askForBorrowAmount) + Number(askForBorrowAmount) * Number(dfr) ).toFixed(18)


    //             const repaycollateral = (Number(depositCollateral) - Number(depositCollateral) * Number(bfr)).toFixed(12)
    //             const withdraw = (depositQuoteToken - Number(depositQuoteToken) * Number(dfr)).toFixed(12)




    //             // const url = `${AUTOFILL_API}?afb=${askForBorrowAmount}`
    //             // const res = await axios.get(url)
    //             // const { depositCollateral, depositQuoteToken, repaycollateral, withdraw } = res?.data?.cal
    //             setQuoteTokenAmount(depositQuoteToken);
    //             setborrowAmount(askForBorrowAmount);
    //             setBorrowColletralAmount(depositCollateral);
    //             setRepayColletralAmount(repaycollateral);
    //             setRepayQuoteAmount(askForBorrowAmount);
    //             setWithdrawQuoteTokenAmount(withdraw);


    //             try {

    //                 axios.post(borrow_upsert, {
    //                     address: address,
    //                     borrow_ask: askForBorrowAmount,
    //                 }, {
    //                     headers: {
    //                       'Content-Type': 'application/json',
    //                       'Accept': 'application/json'
    //                     }
    //                   })
    //                 notifySuccess("borrow amount saved")
    //             } catch (error) {
    //                 notifyError("borrow amount not saved")
    //                 console.error("server error", error)
    //             }


    //         }



    //     } catch (error) {
    //         notifyError("AutoFill Failed.")
    //         console.error("AutoFill Failed.", error)
    //     }



    // };


    // // const testCalculations =  () => {
    // //   const askForBorrowAmount = "0.000001"
    // //   const dfr = "0.000013698630136986"
    // //   const depositQuoteToken = (Number(askForBorrowAmount) + Number(askForBorrowAmount) * Number(dfr) ).toFixed(18)
    // //   const 

    // // }

    // const start_epoch = async () => {
    //     try {
    //         const valueInWei = ethers.BigNumber.from(minutes);
    //         const tx = await contract.start_epoch(valueInWei, { gasLimit: 3000000 });
    //         await tx.wait();
    //         console.log("start epoch Tx Successful..", tx)
    //         notifySuccess("Start Epoch Tx Successful.")

    //         handleStart()
    //         getAllAcounting()
    //     } catch (error) {
    //         notifyError("Start Epoch Tx Failed.")
    //         console.log(error)
    //     }


    // };

    // const end_epoch = async () => {
    //     try {

    //         const tx = await contract.end_epoch({ gasLimit: 3000000 });
    //         await tx.wait();
    //         console.log("end epoch Tx Successful..", tx)
    //         notifySuccess("End Epoch Tx Successful.")
    //         getAllAcounting()
    //     } catch (error) {
    //         notifyError("End Epoch Tx Failed.")
    //     }


    // };

    // const withdrawQuoteToken = async () => {
    //     try {
    //         // const a = await convertFROMUSD(withdrawQuoteTokenAmount, "WETH")
    //         const tx = await contract.withdrawQuoteToken(ethers.utils.parseEther(`${withdrawQuoteTokenAmount}`), { gasLimit: 3000000 });
    //         await tx.wait();
    //         console.log("withdrawQuoteToken Tx Successful..", tx)
    //         notifySuccess("Withdraw Quote Token Tx Successful.")
    //         getAllAcounting()
    //     } catch (error) {
    //         notifyError("Withdraw Quote Token Tx Failed.")
    //     }

    // };



    // const approveBorrow = async () => {
    //     try {
    //         const approvTx = await WSTContract.approve(LendvestAjnaAddress, ethers.utils.parseEther(`${borrowColletralAmount}`), { gasLimit: 3000000 })
    //         await approvTx.wait();
    //         console.log("Approve Tx Successful..", approvTx)
    //         notifySuccess("Approve Tx Successful.")
    //     } catch (error) {
    //         notifyError("Approve Tx Failed.")
    //     }


    // };



    // const borrow = async () => {

    //     try {
    //         const tx = await contract.borrow(ethers.utils.parseEther(`${borrowAmount}`), ethers.utils.parseEther(`${borrowColletralAmount}`), { gasLimit: 3000000 });
    //         await tx.wait();
    //         console.log("Borrow Tx Successful..", tx)
    //         notifySuccess("Borrow Tx Successful.")
    //         getAllAcounting()
    //     } catch (error) {
    //         notifyError("Borrow Tx Failed.")
    //     }

    // };




    // const repay = async () => {
    //     console.log("repayColletralAmountrepayColletralAmount", repayColletralAmount)
    //     console.log(ethers.utils.parseEther(`${repayColletralAmount}`))
    //     try {
    //         const tx = await contract.repay(ethers.utils.parseEther(`${repayColletralAmount}`), { gasLimit: 3000000 });
    //         // const tx = await contract.repayTest(ethers.utils.parseEther(`${0.000001}`),ethers.utils.parseEther(`${repayColletralAmount}`) ,{ gasLimit: 3000000 });

    //         await tx.wait();
    //         console.log("Repay Tx Successful..", tx)
    //         getAllAcounting()
    //         notifySuccess("Repay Tx Successful.")
    //     } catch (error) {
    //         console.log(error);
    //         notifyError("Repay Tx Failed.")
    //     }
    // }



    // const approveDepositColletralForLiquidation = async () => {
    //     try {
    //         const approvTx = await WSTContract.approve(LendvestAjnaAddress, ethers.utils.parseEther(`${depositColletralAmount}`), { gasLimit: 3000000 })
    //         await approvTx.wait();
    //         console.log("Approve Tx Successful..", approvTx)
    //         notifySuccess("Approve Tx Successful.")
    //     } catch (error) {
    //         notifyError("Approve Tx Failed.")
    //     }
    // };


    // const depositColletralForLiquidation = async () => {
    //     try {
    //         const tx = await contract.depositCollateralForLiquidation(ethers.utils.parseEther(`${depositColletralAmount}`), { gasLimit: 3000000 });
    //         await tx.wait();
    //         console.log("depositColletralForLiquidation Tx Successful..", tx)
    //         getAllAcounting()
    //         notifySuccess("Deposit Collateral Tx Successful.")
    //     } catch (error) {
    //         notifyError("Deposit Collateral Tx Failed.")
    //     }
    // };

    // const withdrawColletralofLiquidation = async () => {

    //     // const b = await convertFROMUSD(withdrawColletralAmount, "WSTETH")
    //     try {
    //         const tx = await contract.withdrawCollateralForLiquidation(ethers.utils.parseEther(`${withdrawColletralAmount}`), { gasLimit: 3000000 });
    //         await tx.wait();
    //         console.log("withdrawColletralofLiquidation Tx Successful..", tx)
    //         getAllAcounting()
    //         notifySuccess("Withdraw Collateral Tx Successful.")
    //     } catch (error) {
    //         notifyError("Withdraw Collateral Tx Failed.")
    //     }

    // };


    // const balanceColletralRatio = async () => {
    //     const tx = await contract.balanceColletralRatio(borrowerAddressForAvoidLiquidation, { gasLimit: 3000000 });
    //     await tx.wait();
    //     console.log("balanceColletralRatio Tx Successful..", tx)
    //     getAllAcounting()

    // };


    // const getQuoteTokenAddress = async () => {
    //     console.log("Hello QuoteToken Address ")
    //     const address = await contract.getQuoteTokenAddress();
    //     // setQuoteTokenAddress(address)

    // };


    // const getCollateralAddress = async () => {
    //     console.log("Hello Colletral Address")
    //     const address = await contract.getCollateralAddress();
    //     // setCollateralAddress(address)
    // };


    // const getPoolAddress = async () => {
    //     const address = await contract.getPoolAddress();
    //     setPoolAddress(address);
    //     // window.open(`https://ajnafi.com/polygon/pools/${address}`, '_blank').focus();
    //     document.location.href = `https://ajnafi.com/polygon/pools/${address}`

    // };



    // const gotoLendvestVault = () => {
    //     // window.open(`https://polygonscan.com/address/${LendvestAjnaAddress}#code`, '_blank').focus();
    //     document.location.href = `https://polygonscan.com/address/${LendvestAjnaAddress}#code`
    // };

    const getAmounts = async () => {
        setAmountWethToUSD(await convertToUSD("WETH"));
        setAmountWWSTethToUSD(await convertToUSD("WSTETH"));
    }
    const pollForUpdates = async () => {
        try {
            // const response = await axios.get(UPDATES_API, { timeout: 30000 }); // 30 seconds timeout
            // const response = await axios.get(UPDATES_API, { timeout: 30000 }); // 30 seconds timeout
            // if (response.status === 200) {
            //     setTotalBorrowAsk(response.data.totalBorrow)
            //     setTotalBorrowAskUSD(convertInUSD(response.data.totalBorrow, amountWethToUSD))
            //     setTotalLend(response.data.totalLend)
            //     setTotalLendUSD(convertInUSD(response.data.totalLend, amountWethToUSD))
            //     setLenders(response?.data?.lenders)

            // } else if (response.status === 204) {
            //     // No content, indicating no updates
            //     console.log('No updates available.');
            // }
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
        getAmounts()
        const interval = setInterval(pollForUpdates, 5000); // Poll every 5 seconds
        pollForUpdates()
        return () => clearInterval(interval); // Clean up on unmount

    }, []);









    
  return (
    <div>
        <Button onClick={connectWallet} variant={'themeColor'}>{address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Connect Wallet'}</Button>
    </div>
  )
}

export default ConnectWallet