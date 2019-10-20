import * as React from "react";

export default class PhotoItem extends React.Component {
  render() {
    return (
      <div className="photo-item">
        <img src={this.props.src} alt={this.props.title} />
        <span>{this.props.date}</span>
      </div>
    );
  }
}
