import * as React from "react";
import "./Footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <foot className="footer">
        Development / Design / Photo by Mingshi Cai &copy;
        {new Date().getFullYear()} UNOIOU.COM. All rights reserved.
      </foot>
    );
  }
}
