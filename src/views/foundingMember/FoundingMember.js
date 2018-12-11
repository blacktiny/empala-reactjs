import React from "react";
import { Table } from "reactstrap";
import Popup from "reactjs-popup";

import "./FoundingMember.scss";

import logo from "../../assets/images/logo.png";

class FoundingMember extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bPopupOpen: false,
      nAccountSize: "",
      accountSize: [
        100000000,
        10000000,
        1000000,
        500000,
        250000,
        100000,
        50000,
        25000,
        10000
      ]
    };
  }

  getValueString = number => {
    var valueString = number.toString();
    var sizeString = "";
    var nIndex = Math.floor(valueString.length / 3);
    var nStart = valueString.length % 3;
    if (nStart !== 0) {
      sizeString += valueString.substring(0, nStart);
      if (nIndex !== 0) {
        sizeString += ",";
      }
    }
    for (var i = 1; i <= nIndex; i++) {
      sizeString += valueString.substring(nStart, nStart + 3);
      if (i !== nIndex) {
        sizeString += ",";
      }
      nStart += 3;
    }
    return sizeString;
  };

  getTblContent = () => {
    const accountSize = this.state.accountSize;
    var tblContent = accountSize.map(size => {
      return {
        value: size,
        accountSize: this.getValueString(size),
        equity: this.getValueString(Math.round(size * 0.0025)),
        tokens: this.getValueString(Math.floor(size * 0.005)),
        cash: this.getValueString(Math.floor(size * 0.01))
      };
    });
    return tblContent;
  };

  onTblRowClicked = rowValue => {
    this.setState({ bPopupOpen: true, nAccountSize: rowValue });
  };

  closeModal = () => {
    this.setState({ bPopupOpen: false });
  };

  render() {
    const tblContent = this.getTblContent();
    const { bPopupOpen, nAccountSize } = this.state;
    console.log("bPopupOpen = ", bPopupOpen, "nAccountSize = ", nAccountSize);

    return (
      <div className="founding-main">
        <div className="desc-section">
          <div className="desc-section-title">
            <div className="mark">
              <img
                className="mark-img"
                src={require("../../assets/images/mark.png")}
                alt=""
              />
            </div>
            <h3 className="title-text color-black">
              Founding Member Incentive
            </h3>
          </div>
          <div className="desc-section-content">
            <p>
              Empala is launching its revolutionary investor platform to new
              members in q1 of 2019. In anticipation of our launch we are
              offering over $5 million in new account promotions & incentives*
              to members who join. These rewards include a choice of cash,
              equity or cryptocurrency. It’s easy – chose your new account level
              (how much you will deposit when you open an account)**, then
              select your award type.
            </p>
          </div>
        </div>
        <div className="tbl-section">
          <Table striped responsive hover id="amount_list">
            <thead>
              <tr>
                <th>Account Size</th>
                <th>Equity**</th>
                <th>Cash</th>
                <th>Tokens**</th>
              </tr>
            </thead>
            <tbody>
              {tblContent.map((content, key) => {
                return (
                  <tr
                    key={key}
                    onClick={() => this.onTblRowClicked(content.accountSize)}
                  >
                    <td>
                      <div className="td-content">
                        <span>$</span>
                        <p>{content.accountSize}</p>
                      </div>
                    </td>
                    <td>
                      <div className="td-content">
                        <span>$</span>
                        <p>{content.equity}</p>
                      </div>
                    </td>
                    <td>
                      <div className="td-content">
                        <span>$</span>
                        <p>{content.tokens}</p>
                      </div>
                    </td>
                    <td>
                      <div className="td-content">
                        <span>$</span>
                        <p>{content.cash}</p>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <Popup open={bPopupOpen} closeOnDocumentClick onClose={this.closeModal}>
          <div className="modal">
            <a className="close" onClick={this.closeModal} />
            <div className="modal-header">
              <p>You've chosen &nbsp;<span className="color-green">${nAccountSize}</span></p>
              <p>As your reward</p>
            </div>
            <div className="modal-content">
              <div className="btn-section">
                <button className="btn-confirm">
                  <b>Confirm</b>
                </button>
              </div>
              <div className="another-reward">
                Choose Another Reward
              </div>
            </div>
          </div>
        </Popup>
        <div className="note-section">
          <div className="note-section-header">
            <div className="header-text color-green">
              In order to receive your award you must maintain your initial
              deposit for an entire year
            </div>
            <div className="content-text">
              <p style={{ marginBottom: "25px", fontFamily: "Open Sans Bold" }}>
                Our long term goal is to create the first global, fully enabled
                investor community that allows our memebers to invest in
                everything everywhere for one small fee.
              </p>
              <p>
                We have to start somewhere and have decided to launch with US
                equities on our innovative professional network community.
              </p>
              <p>
                We plan to add new jurisdictions and asset classes as we grow.
              </p>
              <p>
                We feel strongly that our revolutionary, fully transparent
                public equity pricing will turn heads. Join now and in addition
                to the incentives above, you will receive:
              </p>
            </div>
          </div>
          <div className="note-section-content">
            <div className="upper-section">
              <div className="upper-section-item">
                Free Three Month Trial Period (where you are not charged the
                Empala Annual Membership fee of 0.25% on your assets)
              </div>
              <div className="upper-section-item">
                All net revenue derived from member assets passed through to
                members (interest, securities lending, payment, for order flow,
                etc.)
              </div>
            </div>
            <div className="lower-section">
              <div className="lower-section-item">
                Negative trading costs (per equity trade, excluding regulatory
                fees)
              </div>
              <div className="lower-section-item">
                Innovative investor networking & collaboration community (with
                information feedback loop)
              </div>
              <div className="lower-section-item">
                SIPC account insurance up to $500K which includes up to $250k in
                claims for cash
              </div>
            </div>
          </div>
          <div className="note-section-footer">
            <div className="footer-card">
              <div className="footer-card-header color-green">Act Quickly</div>
              <div className="footer-card-content">
                <p>• Incentives are limited</p>
                <p>• First come, first served</p>
                <p>• Good until March 31, 2019</p>
              </div>
            </div>
            <div className="footer-card">
              <div className="footer-card-header color-green">
                Product Roadmap
              </div>
              <div className="footer-card-content">
                <p>• US Private Real Estate</p>
                <div className="group-p-section">
                  <p>• US Infrastructure & Energy</p>
                  <p>• US Equity options</p>
                </div>
                <p>• Global expansion (Canada, then the UK & Australia...)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-logo-desc">
          <div className="footer-logo-desc-logo">
            <img className="footer-logo-desc-img" src={logo} alt="logo" />
          </div>
          <p>
            *Space and awards are limited - adding yourself to the queue does
            not guarantee availability of awards, however you will be notified
            prior to deciding to open your account. If award is not available,
            you will have the option to choose an alternate award, if available,
            or to decide not to open an account. <br /> ** Must be an{" "}
            <span>accredited investor</span> as defined by SEC regulations to
            receive tokens or equity rewards; Cryptocurrency tokens have a $0.10
            face value & equity value is based on a $20m company valuation.
          </p>
        </div>
      </div>
    );
  }
}

export default FoundingMember;
