import * as React from "react";
import { GridItem } from "react-masonry-grid";

export default class PhotoItem extends React.Component {
  render() {
    return (
      <GridItem className="photo-item" key={this.props.key}>
        <img
          src={this.props.src}
          alt={this.props.title}
          style={{ width: "100%" }}
        />
        {/* <span>{this.props.date}</span> */}
      </GridItem>
    );
  }
}
