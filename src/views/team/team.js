import React from "react";

import "./team.scss";

import logo from "../../assets/images/logo.png";

class Team extends React.Component {
  render() {
    return (
      <div className="team-main">
        <div className="logo-desc">
          <div className="logo-desc-logo">
            <img className="logo-desc-img" src={logo} alt="logo" />
          </div>
          <p>
            Founded by passionate investors who share many of the frustrations
            with the current financial services industry and are committed to
            developing a better alternative.
          </p>
        </div>
        <div className="header-content">
          <div className="mark">
            <img
              className="mark-img"
              src={require("../../assets/images/mark.png")}
              alt=""
            />
          </div>
          <h3 className="title-text color-black">
            Over a century of combined experience in finance, technology and
            building successful companies
          </h3>
        </div>
        <div className="member-section">
          <div className="member-section-upper">
            <div className="card card-align">
              <div className="card-photo">
                <img
                  src={require("../../assets/images/photos/Alan_Grujic.png")}
                  alt=""
                />
              </div>
              <div className="card-name">Alan Grujic</div>
              <div className="card-role color-green">
                Founder & Chief Executive Officer
              </div>
              <div className="card-intro">
                Co-founded largest high-frequency trading firm in Canada, The
                Infinium Group, with over $100 million in profit and global
                footprint. Founded multi-hundred million dollar algorithmic
                trading hedge fund. Built highly profitable structured finance
                division for TD Bank in Asia. Ran trading departments &
                institutional market- making books for TD. Programmed robotics &
                assembly line systems for GM. BS at University of Toronto
                (Electrical Engineering). MBA at University of British Columbia.
              </div>
            </div>
          </div>
          <div className="member-section-lower">
            <div className="card">
              <div className="card-photo">
                <img
                  src={require("../../assets/images/photos/Sam_Skinner.png")}
                  alt=""
                />
              </div>
              <div className="card-name">Sam Skinner</div>
              <div className="card-role color-green">
                Chief Operating Officer
              </div>
              <div className="card-intro">
                Financial services executive with hands-on experience building
                companies, developing successful growth strategies & leading
                high performing teams. Former President, COO or CCO of Woodside
                Capital, Inflection Point Resarch, Moors & Cabot, Dakin
                Securities and Drexel Burnham. Successfully negotiated the sale
                of Dakin to M&C after experiencing 400% growth. <br /> MBA at
                UCLA.
              </div>
            </div>
            <div className="card">
              <div className="card-photo">
                <img
                  src={require("../../assets/images/photos/Iain_Clarke.png")}
                  alt=""
                />
              </div>
              <div className="card-name">Iain Clarke</div>
              <div className="card-role color-green">
                Chief Technology Officer
              </div>
              <div className="card-intro">
                Technology Strategist with vast experience in large global
                business/digital transformations at both Capgemini and Oracle.
                Innovator, product & architecture leadership for many Fortune
                500 global companies in UK, Australia and USA. Accountable for
                global strategy in Cloud Solutions, Cybersecurity, including
                Blockchain technologies. Founder and creator of Zig360 mobile
                app. MBA (Tech) at UNSW, Sydney Australia.
              </div>
            </div>
            <div className="card">
              <div className="card-photo">
                <img
                  src={require("../../assets/images/photos/Nick_Heldfond.png")}
                  alt=""
                />
              </div>
              <div className="card-name">Nick Heldfond</div>
              <div className="card-role color-green">
                Chief Product Officer
              </div>
              <div className="card-intro">
                Seasoned product, marketing & strategy executive with over 20
                years experience in the asset management & technology sectors.
                Former Partner, CMO & COO of several prominent hedge funds.
                Co-founded HomeGain, an online real estate firm, sold in 2006.
                Associate at Equity Office & Shorenstein. Investment Committee
                Member of multi- billion dollar investment office. Seasoned
                FinTech investor with over 40 early stage investments. MBA at UC
                Berkeley.
              </div>
            </div>
            <div className="card">
              <div className="card-photo">
                <img
                  src={require("../../assets/images/photos/Joe_Cline.png")}
                  alt=""
                />
              </div>
              <div className="card-name">Joe Cline</div>
              <div className="card-role color-green">
                Chief Compliance Officer, Empala Securities
              </div>
              <div className="card-intro">
                Career spanning three decades in financial services. Previously
                held management and supervisory roles at Fidelity Investments,
                Morgan Stanley, and Goldman Sachs. Broad industry experience
                including trading, operations, compliance, audit, and risk. BA
                in Finance from the University of Notre Dame and MBA in Finance
                from the University of Southern California.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
