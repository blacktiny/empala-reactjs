import React, { Component } from "react";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";

import logo from "../../assets/images/logo.png";
import "./home.scss";

import CollapsePanel from "../../components/collapsePanel/CollapsePanel";

class Home extends Component {
  render() {
    let leftIcon = <div className="slider-arrow arrow-left" />;

    let rightIcon = <div className="slider-arrow arrow-right" />;

    return (
      <div className="Home-main">
        <div className="slider-section">
          <RBCarousel
            animation={true}
            autoplay={false}
            slideshowSpeed={2000}
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            onSelect={this.onSelect}
            ref={r => (this.slider = r)}
            version={4}
          >
            <div className="slider-content">
              <img
                style={{ width: "100%", height: "100%" }}
                src={require("../../assets/images/slider/slider-1.png")}
                alt=""
              />
              <div className="slider-dot" />
              <div className="carousel-center">
                <div className="center-back" />
                <div className="center-content slider1">Save More</div>
              </div>
              <div className="carousel-caption">
                <div className="caption-content">
                  <div className="green-line" />
                  <div className="text-section">
                    Join the Queue and Take Advantage <br /> of our New Member
                    Offers
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-content">
              <img
                style={{ width: "100%", height: "100%" }}
                src={require("../../assets/images/slider/slider-2.png")}
                alt=""
              />
              <div className="slider-dot" />
              <div className="carousel-center">
                <div className="center-back" />
                <div className="center-content slider2">Get Connected</div>
              </div>
              <div className="carousel-caption">
                <div className="caption-content">
                  <div className="green-line" />
                  <div className="text-section">
                    Join A Golobal Community <br /> That Gets You Access & Insight
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-content">
              <img
                style={{ width: "100%", height: "100%" }}
                src={require("../../assets/images/slider/slider-3.jpg")}
                alt=""
              />
              <div className="slider-dot" />
              <div className="carousel-center">
                <div className="center-back" />
                <div className="center-content slider3">All In One Place</div>
              </div>
              <div className="carousel-caption">
                <div className="caption-content">
                  <div className="green-line" />
                  <div className="text-section">
                    Everything You Need To Succeed
                  </div>
                </div>
              </div>
            </div>
          </RBCarousel>
        </div>
        <div className="logo-desc">
          <div className="logo-desc-logo">
            <img className="logo-desc-img" src={logo} alt="logo" />
          </div>
          <p>
            We believe that individual investors have paid excessive fees to
            financial services institutions for too long. Investor capital is
            fragmented, stripping investors of their negotiating power. Access
            and information are hard to come by and trust is at an all time low.
            We believe there is a better way - one that empowers individual
            investors to achieve greater success. This is why we built Empala.
          </p>
        </div>
        <div id='trust' className="trust-section">
          <div className="mark">
            <img
              className="mark-img"
              src={require("../../assets/images/mark.png")}
              alt=""
            />
          </div>
          <div className="header-content">
            <h3 className="title-text color-green">Trust</h3>
            <h3 className="description-text color-black">
              Is the ultimate measure of our success.
            </h3>
            <p>
              We will continuously earn it in everything we do, and every way we
              do it:
            </p>
          </div>
        </div>
        <div className="fees-section">
          <div className="fees-window">
            <div className="fees-window-header">
              <p className="header-text">
                Over an investor's lifetime just{" "}
                <span className="color-green extra-bold-text">1% </span>
                in excess fees can cost as much as{" "}
                <span className="color-green extra-bold-text">50%</span> in lost
                returns
              </p>
            </div>
            <div className="fees-window-content">
              <p className="title-text">On a $200K account that's $100K!!</p>
              <p className="content-text">
                Fees matter a lot - especially the hidden ones!
              </p>
            </div>
          </div>
        </div>
        <div className="member-section">
          <div className="card">
            <div className="card-header color-green">
              Empowering <br />
              Our Members
            </div>
            <div className="card-content">
              Technology and scale allows us to pass the previously high profit
              margins of incumbents on to our members and to continuously reduce
              their fees and increase their opportunities.
            </div>
          </div>
          <div className="card">
            <div className="card-header color-green">
              PLACING OUR <br />
              MEMBERS FIRST
            </div>
            <div className="card-content">
              We place our investors and their capital at the center of the
              financial ecosystem where they will receive proper value,
              opportunity and control.
            </div>
          </div>
          <div className="card">
            <div className="card-header color-green">
              ALIGNING WITH <br />
              OUR MEMBERS
            </div>
            <div className="card-content">
              We believe in aligning our interests with our members' interests
              and our revenues are fully transparent and fixed. We have nothing
              to sell but our ability to facilitate.
            </div>
          </div>
        </div>
        <div id="join" className="join-section">
          <div className="join-section-header">
            <div className="mark">
              <img
                className="mark-img"
                src={require("../../assets/images/mark.png")}
                alt=""
              />
            </div>
            <div className="header-content">
              <h3 className="title-text color-black">Join Together</h3>
              <h3 className="description-text color-black">
                Invest Together. Succeed Together.
              </h3>
              <p>
                The world's first{" "}
                <b className="color-green">technology - enabled, full stack</b>{" "}
                investor community.
              </p>
            </div>
          </div>
          <div className="image-content">
            <img src={require("../../assets/images/PC.png")} alt="" />
          </div>
          <div className="card-section">
            <div className="card-section-upper">
              <div className="card">
                <div className="card-header color-green">Community</div>
                <div className="card-logo">
                  <img
                    src={require("../../assets/images/community.svg")}
                    alt=""
                  />
                </div>
                <div className="card-title">
                  <p className="color-black">
                    Build a global community of individual investors
                  </p>
                </div>
                <div className="card-content">
                  <p className="color-black">
                    Create a complete investor ecosystem of participants.
                  </p>
                  <p className="color-black">
                    Offer collaborative, proprietary data, algos & analytics
                    tools.
                  </p>
                  <p className="color-black">
                    Quality investment club capabilities at a global scale.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-header color-green">Capital</div>
                <div className="card-logo">
                  <img
                    src={require("../../assets/images/capital.svg")}
                    alt=""
                  />
                </div>
                <div className="card-title">
                  <p className="color-black">
                    Give members market influence & control
                  </p>
                </div>
                <div className="card-content">
                  <p className="color-black">
                    Capital resides on our platform acting as a single
                    negotiating entity.
                  </p>
                  <p className="color-black">
                    This is accomplished through our global interlinked network
                    of broker-dealers, funds, & digital wallets.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-header color-green">Savings</div>
                <div className="card-logo">
                  <img
                    src={require("../../assets/images/savings.svg")}
                    alt=""
                  />
                </div>
                <div className="card-title">
                  <p className="color-black">
                    Deliver our members the best products & services for the
                    lowest cost
                  </p>
                </div>
                <div className="card-content">
                  <p className="color-black">
                    Negative equity trading costs & free private market
                    transactions.
                  </p>
                  <p className="color-black">
                    Leverage our members' critical mass to always negotiate the
                    best possible terms.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-section-lower">
              <div className="card">
                <div className="card-header color-green">Access</div>
                <div className="card-logo">
                  <img
                    src={require("../../assets/images/access.svg")}
                    alt=""
                  />
                </div>
                <div className="card-title">
                  <p className="color-black">
                    Scale platform to provide greater opportunities
                  </p>
                </div>
                <div className="card-content">
                  <p className="color-black">
                    Foster innovative deal origination & collaboration.
                  </p>
                  <p className="color-black">
                    Provide unique P2P transactions opportunities.
                  </p>
                  <p className="color-black">
                    Attract high-quality deal flow.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-header color-green">Operations</div>
                <div className="card-logo">
                  <img
                    src={require("../../assets/images/operations.svg")}
                    alt=""
                  />
                </div>
                <div className="card-title">
                  <p className="color-black">
                    Empower members with technological and regulatory
                    innovation
                  </p>
                </div>
                <div className="card-content">
                  <p className="color-black">
                    Innovative fund structures & global broker-dealer network.
                  </p>
                  <p className="color-black">
                    Fully automated private market investment technologies.
                  </p>
                  <p className="color-black">
                    Digital token transaction rails on distributed ledgers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="legal-section">
          <div className="legal-section-header">
            <div className="mark">
              <img
                className="mark-img"
                src={require("../../assets/images/mark.png")}
                alt=""
              />
            </div>
            <div className="header-content">
              <h3 className="title-text color-black">Legal Disclaimers</h3>
            </div>
          </div>
          <div className="legal-section-content">
            <div className="text-upper">
              Empala Securities is currently registered in the following{" "}
              <span className="color-green">jurisdictions.</span> This is not an
              offer, solicitation of an offer, or advice to buy or sell
              securities, or open a brokerage account in any jurisdiction where
              Empala Securities is not registered. Additional information about
              your broker can be found by clicking{" "}
              <span className="color-green">
                FINRA Public Disclosure Program (BrokerCheck)
              </span>
              .
            </div>
            <div className="text-lower">
              <div className="text-lower-leftside">
                Empala Securities, LLC and Empala Network, LLC are wholly-owned
                subsidiaries of Empala Group, LLC. Equities, options, ETF's,
                Mutual Funds and bonds are offered to self-directed customers by
                Empala Securites. Empala Securities is a member of the Financial
                Industry Regulatory Authority{" "}
                <span className="color-green">(FINRA)</span> and the Securities
                Investor Protection Corporation (SIPC), which protects
                securities customers of its members up to $500,000(including
                $250,000 for claims for cash). Explanatory brochures are
                available upon request or at{" "}
                <span className="color-green">sipc.org</span>
              </div>
              <div className="text-lower-rightside">
                While Empala does not mark up fees or service charges it incurs
                in servicing clients, it does pass those fees through to the
                client. EMPALA CHARGES A FIXED ANNUAL FEE ON EACH CLIENT'S
                ACCOUNT. THE FEE IS COLLECTED ON A MONTHLY BASIS AS ONE TWELFTH
                OF THE ANNUAL FEE APPLIED TO THE AVERAGE DAILY VALUE OF THE
                ACCOUNT IN THE RESPECTIVE MONTH. THE ANNUAL FEE AT THIS TIME CAN
                BE FOUND ON OUR{" "}
                <span className="color-green">
                  Empala Commissions and Fee Schedule
                </span>
                . Relevant <span className="color-green">SEC</span> &{" "}
                <span className="color-green">FINRA</span> fees may also apply.
              </div>
            </div>
          </div>
          <div className="collapsible_list">
            <CollapsePanel
              header_text={"Margin"}
              content_text={
                "Margin trading involves interest charges and risks, including\
                the potential to lose more than deposited or the need to deposit\
                additional collateral in a falling market. Before using margin,\
                customers must determine whether this type of trading strategy\
                is right for them given their specific investment objectives,\
                experience, risk tolerance, and financial situation. For more\
                information please see our Empala Margin Disclosure Statement,\
                Empala Margin Agreement and FINRA Margin Account Risk\
                Information. These disclosures contain information on Empala\
                Securities' lending policies, interest charges, and the risks\
                associated with margin accounts."
              }
              is_open={true}
            />
            <CollapsePanel
              header_text={"ETFS"}
              content_text={"There is no content."}
            />
            <CollapsePanel
              header_text={"Additional Risks & Information"}
              content_text={
                "Investors should be aware that system response, execution price, speed, liquidity, market data, and account access times are affected by many factors, including market volatility, size and type of order, market conditions, system performance, and other factors. \
              All investments involve risk and the past performance of a security, or financial product does not guarantee future results or returns. Keep in mind that while diversification may help spread risk it does not assure a profit, or protect against loss, in a down market. There is always the potential of losing money when you invest in securities, or other financial products. Investors should consider their investment objectives and risks carefully before investing. \
              Third party advertising and information provided for product features, communications, and communications emanating from social media communities, market prices, data and other information available through Empala Group, LLC, Empala Securities, LLC or Empala Network, LLC are meant for informational purposes only and are not intended as an offer or solicitation for the purchase or sale of any financial instrument or as an official confirmation of any transaction. The information provided is not warranted as to completeness or accuracy and is subject to change without notice.  "
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
