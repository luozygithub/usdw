import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";

import logo from "../imgs/logo.jpg"
import earth from "../imgs/earth.png"
import bg1 from "../imgs/bg1.jpg"
import bg2 from "../imgs/bg2.jpg"
import bg3 from "../imgs/img_1.png"
import bg4 from "../imgs/bg4.png"
import icon1 from "../imgs/icon1.jpg"
import icon2 from "../imgs/icon2.jpg"
import icon3 from "../imgs/icon3.jpg"
import earth2 from "../imgs/img_2.png"

import link1 from "../imgs/img_3.png"
import link2 from "../imgs/img_4.png"
import link3 from "../imgs/img_5.png"
import link4 from "../imgs/img_6.png"
import link5 from "../imgs/img_7.png"
import link6 from "../imgs/img_8.png"

import leftImg from "../imgs/img_9.png"
import logo2 from "../imgs/logo2.png"
import logo3 from "../imgs/logo3.png"
import binance from "../imgs/img_10.png"
import huobi from "../imgs/img_11.png"
import coinbase from "../imgs/img_12.png"
import kraken from "../imgs/img_13.png"
import crypto from "../imgs/img_14.png"

import Pdf from "../imgs/Pdf.png"

function DaoHome(props) {
    const DaoHome = styled.div`
      header {
        display: flex;
        width: 80%;
        justify-content: space-between;
        margin: 3em auto;

        .left {
          display: flex;
          align-items: center;

          strong {
            font-size: 20px;
          }
        }

        .nav-list {
          display: flex;

          .nav-item {
            margin-left: 3em;
            position: relative;

            a {
              text-decoration: none;
              color: #333;
            }

            &.active:after {
              content: '';
              position: absolute;
              width: 60%;
              height: 3px;
              background: #06c2ff;
              bottom: -1em;
              left: 20%;
            }
          }
        }
      }

      .page-box {
        padding: 0 20%;
        margin: 0 auto;
        height: 100vh;
      }

      .page1 {
        padding-top: 20vh;
        position: relative;

        h3 {
          margin-top: 2em;
          color: #666;
          font-weight: normal;
        }

        .earth {
          position: absolute;
          right: 5em;
          top: 4em;
          width: 30vw;
          height: 26vw;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .get-btn {
          cursor: pointer;
          width: 160px;
          height: 50px;
          border-radius: 30px;
          border: none;
          color: #fff;
          margin-top: 3em;
          font-size: 20px;
          background-image: linear-gradient(to right, #008dff, #b8d1ff);
        }
      }

      .page2 {
        background: url("${bg1}");
        background-size: 100%;
      }

      .page3 {
        padding: 0 10%;
        display: flex;
        align-items: center;

        .content-list {
          display: flex;
          justify-content: space-between;

          .list-item {
            width: 33.3%;
            display: flex;
            flex-direction: column;
            align-items: center;

            img {
              width: 150px;
              height: 150px;
            }

            .title {
              font-size: 18px;
              margin: 2em 0;
              text-align: center;
            }

            .content {
              width: 80%;
              text-align: center;
              font-size: 15px;
              line-height: 24px;
              color: #777;
            }
          }
        }
      }

      .page4 {
        padding: 0;

        .content1 {
          width: 100%;
          height: 80vh;
          text-align: center;

          img {
            width: 80%;
            height: 100%;
          }

        }

        .content2 {
          font-size: 36px;
          color: #666;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 50px;
          text-align: center;

          .value {
            font-size: 22px !important;

          }

          strong {
            font-size: 50px;
            margin-top: -50px;
          }

          .left {
            img {
              width: 60px;
              margin-left: 20px;
            }
          }

          .left div {
            padding: 0 1em;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .right {
            text-align: center;
            padding: 0 1em;
          }
        }
      }

      .page5 {
        padding: 0;
        background: url("${bg3}");
        background-size: 100% 100%;
        height: 80vh;
      }

      .page6 {
        position: relative;

        .bg {
          width: 60vw;
          height: 50vh;
          background: #efefef;
          position: absolute;
          top: 6em;
        }

        .pdf {
          cursor: pointer;
          width: 80px;
          margin-top: 4em;
        }

        .content {
          position: relative;
          z-index: 1;
          padding: 10em 2em;
          display: flex;

          .right {
            display: flex;
            flex-direction: column;
            text-align: center;
            width: 40vw;
            align-items: center;

            h2 {
              padding: 3em 0;
            }

            .view-button {
              cursor: pointer;
              width: 120px;
              height: 44px;
              border-radius: 30px;
              border: none;
              color: #fff;
              margin-top: 3em;
              font-size: 20px;
              background-image: linear-gradient(to right, #008dff, #b8d1ff);
            }
          }
        }
      }

      .page7 {
        padding: 3em 20%;
        background: #f8f7f7;

        h2 {
          text-align: center;
          padding: 2em 0;
          font-size: 30px;
        }

        .info {
          line-height: 36px;
          font-size: 20px;
          color: #666;
          text-align: center;
          width: 80%;
          margin: 0 auto;
        }

        .link-list {
          display: flex;
          justify-content: space-between;
          margin-top: 7em;

          .link {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;

            img {
              width: 60px;
              height: 60px;

            }

            .name {
              margin-top: 2em;
              color: #666;
              font-size: 20px;
            }

            a {
              text-decoration: none;
            }
          }
        }
      }
      .page8{
        padding: 3em 10%;
        h2{
          text-align: center;
          font-size: 36px;
          span{
            font-size: 14px;
            color: #999;
            font-weight: normal;
            margin-left: 2em;
          }
        }
        .content{
          display: flex;
          margin-top: 6em;
          .left-img{
            width: 36vw;
            height: 28vw;
          }
          .right-content{
            margin-left: 3em;
            flex: 1;
            .part1{
              display: flex;
              align-items: center;
              justify-content: space-between;
              .part1content{
                strong{
                  font-size: 16px;
                }
                .info{
                  margin-top: 0.5em;
                  margin-bottom: 1em;
                  font-size: 16px;
                  color: #999;
                }
                span{
                  color: #666;
                  font-size: 14px;
                }
              }
              img{
                width: 100px
              }
              .download-btn{
                cursor: pointer;
                width: 140px;
                height: 50px;
                border-radius: 30px;
                border: none;
                color: #fff;
                font-size: 20px;
                background-image: linear-gradient(to right, #008dff, #b8d1ff);
              }
            }
            .part2{
           
              .link-list {
                display: flex;
                justify-content: space-between;
                margin-top: 7em;

                .link {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  text-align: center;

                  img {
                    width: 60px;
                    height: 60px;

                  }

                  .name {
                    margin-top: 2em;
                    color: #666;
                    font-size: 20px;
                  }

                  a {
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
      }
      .page9{
        padding: 0;
        background: url("${bg4}");
        background-size: 100% 100%;
        height: 90vh;
      }
      .footer-box {
        background: #1e1e1e;
        width: 100%;

        .footer {
          width: 70vw;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          padding: 5em 0;

          .left {
            color: #fff;
            .logo-box{
              display: flex;
              flex-direction: column;
              align-items: center;
              .logo {
                width: 120px;
              }
            }
           

            .pdf{
              display: flex;
              margin-top: 2em;
              align-items: center;
              flex-direction: column;
              img{
                width: 60px;
                cursor: pointer;
              }
              text-align: center;
              strong{
                margin-top: 2em;
              }
              span{
                margin-top: 0.2em;
                font-size: 14px;
              }
            }

      
          }

          .right {
            .link-list-box{
              display: flex;
              .link-list {
                width: 230px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                flex-wrap: wrap;
                strong{
                  color:#fff;
                  font-size: 20px;
                }
                .link-item {
                  width: 230px;
                  font-size: 18px;
                  font-family: PingFangSC-Semibold, PingFang SC, serif;
                  color: #999;
                  line-height: 28px;
                  text-decoration: none;
                  margin-top: 1em;
                }
              }
            }
          }
        }
        .copyright{
          font-size: 14px;
          text-align: center;
          color: #cccccc;
          padding-bottom: 3em;
        }
      }
    `

    return (
        <DaoHome>
            <header>
                <div className="left">
                    <img className="logo" src={logo} alt=""/>
                    <strong>USDW</strong>
                </div>
                <div className="right">

                    <div className="nav-list">
                        <div className="nav-item active">
                            <a href="">Technology</a>
                        </div>
                        <div className="nav-item">
                            <a href="">Community</a>
                        </div>
                        <div className="nav-item">
                            <a href="">Whitepaper</a>
                        </div>
                        <div className="nav-item">
                            <a href="">Contact</a>
                        </div>
                    </div>
                </div>
            </header>
            <div className="page1 page-box">
                <div className="earth">
                    <img src={earth} alt=""/>
                </div>
                <h1>A smarter, efficiency currency</h1>
                <h3>USDW can be used by anyone, anywhere, anytime.</h3>
                <button className="get-btn">
                    Get USDW
                </button>
            </div>
            <div className="page2 page-box">
            </div>
            <div className="page3 page-box">
                <div className="content-list">
                    <div className="list-item">
                        <img src={icon1} alt=""/>
                        <strong className="title">
                            Open Network Protocols
                        </strong>
                        <div className="content">
                            Available for developer contributions
                            globally, the suite includes support for
                            currency transmittal as well as trust and
                            identity decisions, rules for settlement
                            and secure KYC/AML exchange.
                        </div>
                    </div>
                    <div className="list-item">
                        <img src={icon2} alt=""/>
                        <strong className="title">
                            Proven IP
                        </strong>
                        <div className="content">
                            Bootstrapped by contributions from
                            founding member WOWME, these protocols are in production today servicing
                            billions of customers
                        </div>
                    </div>
                    <div className="list-item">
                        <img src={icon3} alt=""/>
                        <strong className="title">
                            Decentralized and Independent
                        </strong>
                        <div className="content">
                            USDW's software implementation is
                            managed by an organization created just
                            for this purpose. It provides the support,
                            governance and ongoing R&D for the
                            project
                        </div>
                    </div>
                </div>
            </div>
            <div className="page4 page-box">
                <div className="content1">
                    <img src={bg2} alt=""/>
                </div>
                <div className="content2">
                    <div className="left">
                        <div>1x <img src={logo} alt=""/></div>
                        <div class="value">USDW</div>
                    </div>
                    <strong>≈</strong>
                    <div className="right">
                        $1
                        <div class="value">USD</div>
                    </div>
                </div>
            </div>
            <div className="page5 page-box">

            </div>
            <div className="page6 page-box">
                <div className="bg"></div>
                <div className="content">
                    <img src={earth2} alt=""/>
                    <div className="right">
                        <h2>A WHITE PAPER</h2>
                        <div className="info">
                            For the world of eden
                        </div>
                        <img class="pdf" src={Pdf} alt=""/>
                        <button className="view-button">
                            View
                        </button>
                    </div>

                </div>

            </div>
            <div className="page7 page-box">
                <h2>
                    Join The Community
                </h2>
                <div className="info">
                    Learn more about Maker, chat with the team, others in the community, and have
                    your say in shaping the future of decentralized finance
                </div>
                <div className="link-list">
                    <div className="link">
                        <a href="">
                            <img src={link1} alt=""/>
                            <div className="name">
                                Facebook
                            </div>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <img src={link2} alt=""/>
                            <div className="name">
                                Twitter
                            </div>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <img src={link3} alt=""/>
                            <div className="name">
                                Youtube
                            </div>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <img src={link4} alt=""/>
                            <div className="name">
                                Discord
                            </div>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <img src={link5} alt=""/>
                            <div className="name">
                                Telegram
                            </div>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <img src={link6} alt=""/>
                            <div className="name">
                                Whatsapp
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="page8 page-box">
                <h2>
                    Grab Your 1st USDW Now
                    <span>From USDW ECO SYSTEM</span>
                </h2>
                <div className="content">
                    <img src={leftImg} className="left-img" alt=""/>
                    <div className="right-content">
                        <div className="part1">
                            <img src={logo2} alt=""/>
                            <div className="part1content">
                                <strong>WOWME APP</strong>
                                <div className="info">
                                    Premium Exchange
                                </div>
                                <span>(Recommended)</span>
                            </div>
                            <button className="download-btn">
                                Download
                            </button>
                        </div>
                        <div className="part2">
                            <div className="link-list">
                                <div className="link">
                                    <a href="">
                                        <img src={binance} alt=""/>
                                        <div className="name">Binance</div>
                                    </a>
                                </div>
                                <div className="link">
                                    <a href="">
                                        <img src={huobi} alt=""/>
                                        <div className="name">Huobi</div>
                                    </a>
                                </div>
                                <div className="link">
                                    <a href="">
                                        <img src={coinbase} alt=""/>
                                        <div className="name">Coinbase</div>
                                    </a>
                                </div>
                                <div className="link">
                                    <a href="">
                                        <img src={kraken} alt=""/>
                                        <div className="name">Kraken</div>
                                    </a>
                                </div>
                                <div className="link">
                                    <a href="">
                                        <img src={crypto} alt=""/>
                                        <div className="name">Crypto.com</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page9 page-box">

            </div>
            <footer>
                <div className="footer-box">
                    <div className="footer">
                        <div className="left">
                            <div className="logo-box">
                                <img className="logo" src={logo3} alt=""/>
                                COIN LOGO
                            </div>

                            <div className="pdf">
                                <img src={Pdf} alt=""/>
                                <strong>USDW</strong>
                                <span>White Paper</span>
                            </div>
                        </div>
                        <div className="right">
                            <div className="link-list-box">
                                <div className="link-list">
                                    <a href="" className="link-item">
                                        <strong>Community</strong>
                                    </a>
                                    <a href="" className="link-item">
                                        Facebook
                                    </a>
                                    <a href="" className="link-item">
                                        Twitter
                                    </a>
                                    <a href="" className="link-item">
                                        Youtube
                                    </a>
                                    <a href="" className="link-item">
                                        Discord
                                    </a>
                                    <a href="" className="link-item">
                                        Telegram
                                    </a>
                                    <a href="" className="link-item">
                                        Whatsapp
                                    </a>

                                </div>
                                <div className="link-list">
                                    <a href="" className="link-item">
                                        <strong>Exchange</strong>
                                    </a>
                                    <a href="" className="link-item">
                                        WOWME APP
                                    </a>
                                    <a href="" className="link-item">
                                        Binance
                                    </a>
                                    <a href="" className="link-item">
                                        Huobi
                                    </a>
                                    <a href="" className="link-item">
                                        Coinbase
                                    </a>
                                    <a href="" className="link-item">
                                        Kraken
                                    </a>
                                    <a href="" className="link-item">
                                        Crypto.com
                                    </a>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        All Right Reserved © 2022 USDW by WOWME COMMUNITY
                    </div>
                </div>
            </footer>
        </DaoHome>

    )
}

export default DaoHome
