import React from 'react'
import heroimg from '../assets/hero-img.png'
import { services } from '../data/services'
import SingleServiceCard from '../components/SingleServiceCard'
import { Link } from 'react-router-dom'

export default function Home() {
  console.log(heroimg);
  return (
    <div className='home'>
      <div className="hero">
        <div className="hero-container">
          <div className="hero-first">
            <h2 > 
              Manual Blockchain Rectification
            </h2>
            <p>
              Every blockchain network is encrypted, unique and open source.
            </p>
            <p>
              This blockchain integration decentralized protocol is responsible for resolving API key errors, JSON RPC errors, RPC endpoint issues and a blanketof issues plaguing DeFi protocols.
            </p>
            <p>
              The blockchain integration server uses a topof the line cryptographic multilayer security system that ensures a secure integration of any non custodial wallet to all DeFi protocols without human interference
            </p>
            <div className="btn-con">
              <button className="btn connect-btn">
              <Link className='Link' to={'/wallets'}>
                Connect Wallet
                </Link>
              </button>
              <select className='select-chain' name="" id="">
                <option value="">Select chain</option>
              </select>
            </div>
          </div>
          <div className="hero-second">
            <img src={heroimg} alt="" />
          </div>
        </div>
      </div>
      <div className="services">
        <h2 className="services-head">
          Make Your Selection Below
        </h2>
        <div className="services-container">
          {
            services.map((service) => (
              <SingleServiceCard data={service} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
