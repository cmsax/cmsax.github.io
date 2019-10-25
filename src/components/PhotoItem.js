import * as React from "react";
import DarkThemeContext from "../context";
import { Label } from "office-ui-fabric-react/lib/Label";

export default class PhotoItem extends React.Component {
  static contextType = DarkThemeContext;
  constructor(props) {
    super(props);
    this.state = {
      fitWidth: 0,
      fitHeight: 0,
      showDetail: false
    };
    this.photoRef = React.createRef();
  }
  onPhotoClick = () => {
    if (this.state.showDetail) {
      this.setState({
        showDetail: false
      });
    } else {
      let node = this.photoRef.current;
      console.log(node.clientHeight, node.clientWidth);
      this.setState({
        // fitWidth: node.clientWidth,
        // fitHeight: node.clientHeight,
        showDetail: true
      });
    }
  };
  render() {
    return (
      <div
        className={"photo-wrapper" + (this.state.showDetail ? " detail" : "")}
      >
        <div
          className={
            "photo-item " + (this.context ? "theme-dark" : "theme-light")
          }
          key={this.props.key}
          onClick={this.onPhotoClick}
        >
          <div>
            <img
              src={this.props.src}
              alt={this.props.title}
              style={{ width: "100%" }}
              ref={this.photoRef}
            />
            {this.state.showDetail ? (
              <div>
                <div className="detail-info">
                  <div className="info-item">
                    <Label>Date</Label>
                    <span>{this.props.date}</span>
                  </div>
                  <div className="info-item">
                    <Label>Author</Label>
                    <span>{this.props.author}</span>
                  </div>
                  <div className="info-item">
                    <Label>Type</Label>
                    <span>{this.props.type}</span>
                  </div>
                </div>
                <div className="description">{this.props.description}</div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}
