import React from 'react'
import  '../style/navbar.css'

export default function Navbar() {
  return (
    <nav>
        <div id="appLogo">
            <a href="/"><h4>Coin market</h4></a>
        </div>
        <div id="navBtn">
          <ul>
            <li><a href="/" id="homeBtn">Home</a></li>
            <li><a href="/" id="createTokenBtn">Create Coin</a></li>
            <li><a href="/" id="createNFTBtn">Create NFT</a></li>
            <li><a href="/" id="aboutBtn">About</a></li>
            <li><a href="/" id="documentsBtn">Documents</a></li>
            <li><a href="/" id="helpBtn">Help</a></li>
          </ul>
        </div>
        <div id="connectWallet">
          <p id="connectWalletBtn">Connect Wallet</p>
        </div>
    </nav>
  )
}
