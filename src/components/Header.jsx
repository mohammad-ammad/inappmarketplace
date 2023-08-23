import React from 'react'
import { ethers } from "ethers";
import ABI from '../utils/ABI.json';
import {contract_address} from '../constants';

const Header = () => {
    // * STATES
    const [account, setAccount] = React.useState('');
    const [contract, setContract] = React.useState(null);
    const [provider, setProvider] = React.useState(null);
    const [signer, setSigner] = React.useState(null);
    // ! This will call the connect handler function
    // * Web 3 handler ethereum wallet
    const connectHandler = async () => {
        if(window.ethereum)
        {
            const _provider = new ethers.BrowserProvider(window.ethereum);

            setProvider(_provider);

            const _signer = await _provider.getSigner();

            setSigner(_signer);

            const address = await _signer.getAddress();

            // const balance = await provider.getBalance(address)

            const _contract = new ethers.Contract(contract_address, ABI, _provider);

            setContract(_contract);
            
            // window.ethereum.request({method: 'eth_requestAccounts'})
            // .then((accounts) => {
            //     setAccount(accounts[0])
            //     console.log(accounts[0])
            // })
            // .catch((err) => {
            //     console.log(err)
            // })
        }
    }

    const isHandler = async () => {
        const contractWithSigner = contract.connect(signer);
        const tx = await contractWithSigner.modifyBaseUri("google.com");
        await tx.wait();
        
    }
  return (
    <div className='bg-black h-[76px] w-full flex justify-between items-center px-10'>
        <div className='text-white font-bold text-lg'>My Nft MarketPlace</div>
        <button onClick={connectHandler} className='bg-red-500 text-white w-28 h-10 text-lg'>
            {
                account === '' ? 'Connect' : account.slice(0, 6) + '...'
            }
        </button>
        <button onClick={isHandler} className='bg-red-500 text-white w-28 h-10 text-lg'>Change BaseUri</button>
    </div>
  )
}

export default Header