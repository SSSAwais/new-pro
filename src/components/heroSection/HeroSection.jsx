import React, { useState } from "react";
import "./HeroSection.css";
import arrow from "../../assets/images/verified.png";
import cirle from "../../assets/images/purplesun.png";
import rates from "../../assets/images/rates.png";
import sustain from "../../assets/images/sustain.png";
import reward from "../../assets/images/rewards.png";
import contract from "../../assets/images/contract.png";
import blance from "../../assets/images/contract.png";
import startmin from "../../assets/images/startmin.png";
import instruction from "../../assets/images/insturc222222.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const HeroSection = () => {
  const [amount, setAmount] = useState("");
  return (
    <section className="landingpage_wrapper">
      {/* hero section starts here */}

      <section className="hero_section_bg">
        <div className="container-xxl">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10 col-sm-10">
              <div className="hero_content">
                <h2>
                  Work Smarter <br /> not harder
                </h2>
                <p>
                  The most advanced ETH Miner, based of ETHEREUM Blockchain.
                  Enjoy up to 8% daily rewards and 2,920% ROI.
                </p>
                <div className="hero_button">
                  <button>Miner</button>
                  <button>Contract</button>
                  <button>Telegram</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero section ends here */}

      {/* cards section starts here */}
      <section className="cards_section">
        <div className="circle__img">
          <img src={cirle} alt="" className="img-fluid" />
        </div>
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card_one_wrapper">
                <div className="inner_detail">
                  <div className="card_img">
                    <img src={arrow} alt="icon" />
                  </div>
                  <div className="card_detail">
                    <h4>Verified Public Contract</h4>

                    <p>
                      The ETHonomics contract is public, verified and can be
                      viewed here on Etherscan.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center cards_icons">
                  <p className="view_etherscan">View on Etherscan </p>
                  <ArrowForwardIcon />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card_one_wrapper">
                <div className="inner_detail">
                  <div className="card_img">
                    <img src={rates} alt="icon" />
                  </div>
                  <div className="card_detail">
                    <h4>Miner Rates</h4>
                    <p>
                      ETHonomics pays 8% daily, according to the current mining
                      efficiency rate. The mining efficiency rate rises and
                      falls as players hire miners, compound earnings and pocket
                      BNB.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center cards_icons">
                  <p className="view_etherscan">Play </p>
                  <ArrowForwardIcon />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card_one_wrapper">
                <div className="inner_detail">
                  <div className="card_img">
                    <img src={sustain} alt="icon" />
                  </div>
                  <div className="card_detail">
                    <h4>Sustainability</h4>
                    <p>
                      ETHonomics pays a modest 8% daily, allowing investors to
                      rest easy knowing that their investments have unlimited
                      growth potential and a maximum, improbable risk of less
                      than 8%.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center cards_icons">
                  <p className="view_etherscan">Join telegram</p>
                  <ArrowForwardIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* cards section ends here */}

      {/*  mining section starts here*/}
      <section className="mining_section">
        <div className="container-xxl">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="mining_heading">
                <h4>Mining</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="mining_form_wrapper">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="left_mining_section">
                      <div className="rewards">
                        <img src={reward} alt="" className="img-fluid" />
                        <div className="rewards_dip">
                          <p>My Rewards: 3.345 ETH My ETH miners: 293</p>
                        </div>
                      </div>
                      <div className="rewards">
                        <img src={reward} alt="" className="img-fluid" />
                        <div className="rewards_dip2">
                          <p>
                            Contract Balance:
                            <br />
                            283.345 ETH
                          </p>
                        </div>
                      </div>
                      <div className="mining_amount_section">
                        <div className="enter_amount">
                          {/* <div className="mining_inner_input_wrapper">
                            <input
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                              className="w-100"
                              placeholder="ETH AMOUNT"
                            />
                          </div> */}
                          <div className="refereal--link">
                            <input
                              className="w-100"
                              placeholder="REFERAL LINK"
                            />
                          </div>
                          <p>ENTER ETH AMOUNT & CLICK HIRE BELOW</p>
                        </div>
                        <div className="mining_button">
                          <button className="hire_ETH">Hire ETH MIners</button>
                          <div className="d-flex miner_double_btn">
                            <button>Compound Miner</button>
                            <button className="pcoket_btn">
                              Pocket Your ETH
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="mining_right_section">
                      <div className="rewards">
                        <img src={contract} alt="" className="img-fluid " />
                        <div className="rewards_dip2">
                          <p>
                            Contract Balance: <br /> 283.345 ETH
                          </p>
                        </div>
                      </div>
                      <div className="miner_rules">
                        <h5>Miner Rules</h5>
                        <div className="rules">
                          <h6>1</h6>
                          <p>"HIRE MINERS" USING ETH TOKENS"</p>
                        </div>
                        <div className="rules">
                          <h6>2</h6>
                          <p>
                            YOUR MINERS WILL START DIGGING, PLACING THE TOKENS
                            THEY FIND INTO YOUR BARREL
                          </p>
                        </div>
                        <div className="rules">
                          <h6>3</h6>
                          <p>
                            YOU CAN COMPOUND YOUR EARNINGS USING THE "COMPOUND"
                            BUTTON
                          </p>
                        </div>
                        <div className="rules">
                          <h6>4</h6>
                          <p>
                            YOU CAN WITHDRAW THE TOKENS INTO YOUR BARREL USING
                            THE "POCKET YOUR BNB" BUTTON
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* mining section ends heres */}

      {/* referal program starts here*/}
      <section className="referal_section">
        <div className="container-xxl">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-8 col-sm-12">
              <div className="referal_content">
                <h6>Referral Program</h6>
                <p>
                  You Can Earn BNB Tokens for inviting new users to join
                  ETHonomics. The ETHonomics contract has a direct, one-level
                  referral system That Rewards Referrer when invited users
                  deposit their tokens. Promote your referral link and Earn 12%
                  Referral Rewards.
                </p>
                <div className="refereal--link">
                  <input className="w-100" placeholder="REFERAL LINK" />
                </div>
              </div>
            </div>
          </div>
          <div className="row Start_Mining">
            <div className="col-lg-12">
              <div className="start_mining">
                <h6>How to start Mining</h6>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 shilde_img">
              <img src={startmin} alt="" className="img-fluid orange_shield" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="mine_steps_wrapper">
                <div className="simplee_steps">
                  <h5>Complete 5 simple steps</h5>
                </div>
                <div className="mine_detail_steps">
                  <h5>1</h5>
                  <p>ENTER BNB AMOUNT</p>
                  <h5>2</h5>
                  <p>CLICK "HIRE MINERS"</p>
                  <h5>3</h5>
                  <p>MINERS FIND TOKENS</p>
                  <h5>4</h5>
                  <p>COMPOUND DAILY</p>
                  <h5>5</h5>
                  <p>WITHDRAW PROFIT!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* referal program end here*/}

      {/*instruction section starts here  */}
      <section className="instruction_section">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="instruction_wrapper">
                <div className="instruction_">
                  <h5>Instruction</h5>
                </div>
                <div className="instruction_detail_steps">
                  <ul>
                    <li>
                      Send ETH To Metamask/Trustwallet wallet on Ethereum
                      Network (ETH).
                    </li>
                    <li>
                      In Metamask/Trustwallet Browser Connect and swap to ETH
                    </li>
                    <li>
                      At ETHonomics.io site:
                      <ul>
                        <li>Enter the ETH amount to Hire Miners.</li>
                        <li>Click Hire miners.</li>
                        <li>
                          Compound Daily to hire more miners to increase your
                          profit.
                        </li>
                        <li>
                          Withdraw Profit using the "Pocket Your ETH" button.
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    The Object Of The Game is hiring more miners, sooner and
                    more often than other players. This in turn earns you more
                    BNB faster. Hiring more miners using your daily BNB earnings
                    will 3x your miners within 30 days or less.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 post-iiclass">
              <img src={instruction} alt="instruction" className="img-fluid" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="warning">
                <h6>Warning</h6>
                <p>
                  ETHonomics is subject to high risk. Please make your
                  investment cautiously. Smart Miner and BeanMachine will not be
                  responsible for your investment losses. Crypto markets and
                  Blockchain technology are high risk! Always do your own due
                  diligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
