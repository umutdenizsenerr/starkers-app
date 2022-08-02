import "./App.css";
import { BsDiscord } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
function App() {
  return (
    <div className="main-container">
      <div className="first-container">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="header-container">
          <div className="right-header">
            <div className="button-container">Connect Wallet</div>
            <div className="button-container">Mint</div>
            <div className="button-container">Star Naming</div>
            <div className="button-container">About</div>
            <div className="button-container">Community</div>
          </div>
          <div className="left-header">Early STARKers</div>
        </div>
        <div className="ball-container">
          <div className="first-ball">
            <div className="second-ball">
              <div className="third-ball">
                <div className="fourth-ball">
                  <div className="ball-header">Early STARKers</div>
                  <div className="ball-body">
                    1234 Unconquered Stars for <br />
                    1234 Early Adaptors of STARK Ecosystem
                  </div>
                  <div className="ball-button">Click To Connect Wallet</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-container">
          {" "}
          <div className="footer-text">
            EarlySTARKers is an experimental NFT project about token based proof
            for early adaptors of STARK ecosystem.
          </div>
          <div className="footer-icon">
            <div className="icon-container">
              <BsDiscord />{" "}
              <div className="icon-text">Join Discord for Alpha Whitelist</div>
            </div>
            <div className="icon-container">
              <FaTwitterSquare />{" "}
              <div className="icon-text">For Alpha News</div>
            </div>
            <div className="icon-container">
              <GrMail /> <div className="icon-text">For Collaboration</div>
            </div>
          </div>
        </div>
      </div>
      <div className="second-container">
        {" "}
        <div className="mint-date">MINT DATE</div>
        <div className="tba">TBA</div>
        <div className="rules">Rules</div>
        <div className="rules-content">
          Everyone can only claim 1 star. <br />
          Naming cannot be reverted. <br />
          First Come First Deserve. <br />
          Every STAR 0.015 ETH
        </div>
        <div className="main-star-component">
          <div className="medium-star-component">
            <div className="star-component">
              <div className="black-star">950</div>
            </div>
            <div className="step">Step 0</div>
            <div className="hurry">Hurry Up</div>
          </div>
          <div className="medium-star-component">
            <div className="star-component">
              <div className="white-star">950</div>
            </div>
            <div className="step">Step 1</div>
            <div className="hurry">Mint A Star</div>
          </div>
          <div className="medium-star-component">
            <div className="star-component">
              <div className="yellow-star">950</div>
            </div>
            <div className="step">Step 2</div>
            <div className="hurry">
              Name a Star.
              <br /> Be the EA.
            </div>
          </div>
          <div className="medium-star-component">
            <div className="star-component">
              <div className="discord-star">
                <BsDiscord className="dc" />
              </div>
            </div>
            <div className="step">Step 3</div>
            <div className="hurry">
              Join 1234 <br />
              Community
            </div>
          </div>
        </div>
        <div className="nft-creator">ARE YOU AN NFT CREATOR? </div>
        <div className="nft-creator-content">
          Easily give whitelist for Early Starkers Community
        </div>
        <a href="#" className="nft-creator-content">
          Use the Random Star Tool
        </a>
        <div className="starker-journey">STARKER Journey</div>
        <div className="starker-journey-content">0. Start Using Stark</div>
        <div className="starker-journey-content">1. Claim a STAR</div>
        <div className="starker-journey-content">2. Name Your Star</div>
        <div className="starker-journey-content">3. See Your Rank</div>
        <div className="starkonomy">Starkonomy:</div>
        <div className="starkonomy-content">
          1000 Stars For Everyone <br />
          200 Stars For Whitelist
          <br />
          30 Stars For Stark Projects
          <br />4 Stars for team
        </div>
        <div className="community">Communıty</div>
        <div className="community-content">
          <div className="footer-icon-container">
            <FaTwitterSquare /> <div className="icon-text">Twitter</div>
          </div>
          <div className="footer-icon-container">
            <BsDiscord />
            <div className="icon-text">Discord</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
