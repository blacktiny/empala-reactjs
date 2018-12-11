import React from "react";

import "./PricingPage.scss";

class PricingPage extends React.Component {
  render() {
    return (
      <div className="pricing_page-main">
        <div className="desc-section">
          <div className="desc-section-title">
            <div className="mark">
              <img
                className="mark-img"
                src={require("../../assets/images/mark.png")}
                alt=""
              />
            </div>
            <h3 className="title-text color-black">Beware Of Hidden Costs</h3>
            <h4 className="color-green">"Free" is not always free</h4>
            <h4 className="color-dark">
              Some of our competitors offer "free" trading, but beware of hidden
              costs!
            </h4>
          </div>
        </div>
        <div className="circle circle-large back-color-green" />
        <div className="circle circle-small back-color-green" />
        <div className="offer-section">
          <div className="window-section">
            <div className="window-section-header">
              Empala offers the best value in the industry
            </div>
            <div className="window-section-content">
              <p>
                For a small fee of 0.25% on assets, our members can enjoy
                unlimited use of our platform. This includes access to our
                community tools, content, deal flow, P2P transactions &
                investing across all asset classes.
              </p>
            </div>
          </div>
        </div>
        <div className="ask-desc-section">
          ASK YOURSELF THESE QUESTIONS AND THEN DECIDE IF YOU WOULD BE BETTER
          OFF STAYING WITH YOUR EXISTING BROKER OR DOING BUSINESS WITH A FIRM
          THAT TRULY PUTS ITS CUSTOMERS FIRST
        </div>
        <div className="ask-section">
          <div className="ask-section-header">
            <div className="header-content">
              THE ONLY NEGATIVE TRADING COST AVAILABLE
            </div>
          </div>
          <div className="ask-section-content">
            <div className="content-upper">
              <div className="card">
                <div className="card-header color-green">
                  Does your broker charge you <br />a commission to trade?
                </div>
                <div className="card-content">
                  <p>
                    Thanks to advances in technology, the costs for investors to
                    trade are lower than ever across the industry. However, most
                    firms still charge trade commissions.
                  </p>
                  <div className="spacing-text" />
                  <p className="color-green">
                    Empala charges negative net commissions to trade. We do not
                    make any money on commissions.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-header color-green">
                  What do you earn on your <br />
                  uninvested cash?
                </div>
                <div className="card-content">
                  <p>
                    Many firms that offer low-cost or free trading do not pay
                    interest on cash balances. Interest is earned on your cash
                    but kept by the brokerage firm.
                  </p>
                  <div className="spacing-text" />
                  <p className="color-green">
                    Empala will always pay you interest based on prevailing
                    market rates. We do not make any money on interest.
                  </p>
                </div>
              </div>
            </div>
            <div className="content-lower">
              <div className="card">
                <div className="card-header color-green">
                  Does your broker charge you excessively for margin borrowing?
                </div>
                <div className="card-content">
                  <p>
                    Margin lending is a lucrative source of profits for
                    brokerage firms.
                  </p>
                  <div className="spacing-text" />
                  <p className="color-green">
                    Empala charges a flat margin rate that is one of the lowest
                    in the industry. We do not make any money on margin.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-header color-green">
                  Does your broker keep all of the revenue it receives from your
                  orders?
                </div>
                <div className="card-content">
                  <p>
                    The vast majority of brokerage firms send customer orders to
                    market markers for execution and receive payments in return.
                    While this practice is permitted, firms are not transparent
                    about it and almost never share that revenue with their
                    clients.
                  </p>
                  <div className="spacing-text" />
                  <p className="color-green">
                    Empala will pass along to you revenue net of clearing costs
                    that we receive from your orders. We do not make any money
                    on order flow.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ask-section-footer">
            <div className="footer-upper">
              Empala nets your order flow revenue against your clearing costs
              and covers any difference needed to ensure your trading costs are
              always less than zero (excluding regulatory fees).
            </div>
            <div className="footer-lower">
              <div className="card">
                <div className="card-header color-green">
                  Do you own shares of stock in a margin account, or do you
                  participate in a fully - paid lending program? Does your
                  broker give you all of the revenue it receives from lending
                  out your shares?
                </div>
                <div className="card-content">
                  <p>
                    Under these arrangements, firms usually keep a portion or
                    even all of the revenue that is earned though loaning your
                    shares to other parties.
                  </p>
                  <div className="spacing-text" />
                  <p className="color-green">
                    Empala will pass along to you revenue that we receive for
                    lending out your shares. We do not make any money on
                    securities lending.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PricingPage;
