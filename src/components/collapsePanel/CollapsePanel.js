import React from 'react';
import Collapsible from "react-collapsible";

import './CollapsePanel.scss';

class CollapsePanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header_text: this.props.header_text,
      content_text: this.props.content_text,
      is_open: this.props.is_open,
      height: "92px",
      fontSize: "23px",
      letterSpacing: "3px",
      paddingLeft: "40px",
      paddingRight: "55px"
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    if (window.innerWidth <= 576) {
      this.setState({height: "80px", fontSize: "18px", letterSpacing: "0px", paddingLeft: "20px", paddingRight: "25px"});
    } else {
      this.setState({height: "92px", fontSize: "23px", letterSpacing: "3px", paddingLeft: "40px", paddingRight: "45px"});
    }
    if (window.innerWidth <= 420) {
      this.setState({fontSize: "18px", letterSpacing: "0px"});
    } else {
      this.setState({fontSize: "23px", letterSpacing: "3px"});
    }
  }

  render() {
    const { header_text, content_text, is_open, height, fontSize, letterSpacing, paddingLeft, paddingRight } = this.state;

    let triggerContent = (
      <div className="trigger-content">
        <span>{header_text}</span>
        <div className="btn-section" />
      </div>
    );

    const triggerStyle = {
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: height,
      fontSize: fontSize,
      letterSpacing: letterSpacing,
      margin: "auto",
      paddingLeft: paddingLeft,
      paddingRight: paddingRight,
      borderRadius: "5px 5px 0 0"
    };

    return (
    <div className="collapse-panel">
      <Collapsible
        trigger={triggerContent}
        triggerTagName="div"
        triggerStyle={triggerStyle}
        contentOuterClassName="content"
        open={is_open}
      >
        <span className="content">
          {content_text}
        </span>
      </Collapsible>
    </div>
    );
  }
}

export default CollapsePanel;
