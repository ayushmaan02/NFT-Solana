import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

// Constants
const TWITTER_HANDLE = "ayushmaan_2823";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const Home = () => {
    const wallet = useWallet();
    //Actions 
    const renderNotConnectedConainre = ()=> (
        <div>
            <img src = "https://media.giphy.com/media/Qv7WFppXtkqkM/giphy.gif" alt = "picka"/>

            <div className="button-container">
                <WalletMultiButton className="cta-button connect-wallet-button" />
            </div>
        </div>
    );
    return (
        <div className="App">
            <div className="container">
                <div className="header-container">
                    <p className="header">⚡ Thunder Drop</p>
                    <p className="sub-text">NFT drop machine with fair mint</p>
                    {wallet.publicKey ? "Hiee Public Key Available" : renderNotConnectedConainre()}
                </div>
                <div className="footer-container">
                    <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg"/>
                    <a className="footer-text" href={TWITTER_LINK} target="_blank" rel="noreferrer">{`built on @${TWITTER_HANDLE}`}</a>
                </div>
            </div>
        </div>
    );
};

export default Home;
