import React, { useState } from 'react'
import WalletModal from '../components/WalletsModal'
import ConnectModal from '../components/ConnectModal'
import { wallets } from '../data/wallets';

export default function Wallets() {
  const [open, setOpen] = useState(false);
  const [openConnect, setOpenConnect] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState('');
  return (
    <div className='wallets'>
      <WalletModal
        open={open}
        setOpen={setOpen}
        setOpenConnect={setOpenConnect}
      />
      <ConnectModal
        open={openConnect}
        setOpen={setOpenConnect}
        selectedWallet={selectedWallet}
      />

      <div className="wallets-container">
        <div className="hallets-head">
          <span>W</span>
          <h1>Wallets</h1>
        </div>
        <div className="wallet-list-container">
          {
            wallets.map((wallet, index) => {
              // const imageUrl = new URL(`${wallet.logo}`, import.meta.url).href
              // console.log(imageUrl);
              return (
                <div onClick={() => {
                  setSelectedWallet(wallet.name);
                  setOpen(true)
                }}
                  key={index} className="wallet-list-item">
                  <img src={wallet.logo} alt="wallet" />
                  <h3 className="wallet-name">
                    {wallet.name}
                  </h3>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
