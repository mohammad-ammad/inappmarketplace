import React from 'react'

const Header = () => {
    // * STATES
    const [account, setAccount] = React.useState('');
    // ! This will call the connect handler function
    // * Web 3 handler ethereum wallet
    const connectHandler = () => {
        if(window.ethereum)
        {
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then((accounts) => {
                setAccount(accounts[0])
                console.log(accounts[0])
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
  return (
    <div className='bg-black h-[76px] w-full flex justify-between items-center px-10'>
        <div className='text-white font-bold text-lg'>My Nft MarketPlace</div>
        <button onClick={connectHandler} className='bg-red-500 text-white w-28 h-10 text-lg'>
            {
                account === '' ? 'Connect' : account.slice(0, 6) + '...'
            }
        </button>
    </div>
  )
}

export default Header