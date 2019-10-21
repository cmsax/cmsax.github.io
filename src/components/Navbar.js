import * as React from "react";
import { PivotItem, Pivot } from "office-ui-fabric-react/lib/Pivot";
import Markdown from "react-markdown";
import { Grid } from "react-masonry-grid";

import MainContainer from "./MainContainer";
import ProjectItem from "./ProjectItem";
import PhotoItem from "./PhotoItem";
import AuthBox from "./AuthBox";

const a = [
  "https://latina-1253549750.cos.ap-shanghai.myqcloud.com/essay/imgs/20191019200425.png",
  "https://latina-1253549750.cos.ap-shanghai.myqcloud.com/essay/imgs/20191021190926.jpg",
  "https://latina-1253549750.cos.ap-shanghai.myqcloud.com/essay/imgs/20191019213723.png",
  "https://latina-1253549750.cos.ap-shanghai.myqcloud.com/essay/imgs/20191021190924.jpg",
  "https://latina-1253549750.cos.ap-shanghai.myqcloud.com/essay/imgs/20191021190925.jpg",
  "https://latina-1253549750.cos.ap-shanghai.myqcloud.com/essay/imgs/20191021190922.jpg",
  "https://latina-1253549750.cos.ap-shanghai.myqcloud.com/essay/imgs/20191021190923.jpg",
  "https://latina-1253549750.cos.ap-shanghai.myqcloud.com/essay/imgs/20191021190921.jpg"
];

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authBoxHidden: true,
      photoList: a.map(e => {
        return {
          src: e,
          date: "2019-02-02",
          title: "demo"
        };
      }),
      projectList: [
        {
          title: "GitHub",
          description: "My GitHub profile.",
          requireAuth: false,
          url: "https://github.com/cmsax"
        },
        {
          title: "Wiki",
          description: "Personal Wiki system.",
          requireAuth: true,
          url: null,
          token: "wiki"
        },
        {
          title: "Files",
          description: "Personal cloud file ystem.",
          requireAuth: true,
          url: null,
          token: "wiki"
        },
        {
          title: "Articles",
          description: "Public blog system.",
          requireAuth: false,
          url: "https://www.unoiou.com/articles"
        }
      ]
    };
  }

  closeAuthBox = () => {
    this.setState({
      authBoxHidden: true
    });
  };

  confirmAuth = value => {
    this.closeAuthBox();
    console.log("confirmed.", value);
  };

  cancelAuth = () => {
    this.closeAuthBox();
    console.log("canceled");
  };

  onProjectClick = () => {
    this.setState({
      authBoxHidden: false
    });
  };

  render() {
    return (
      <div>
        <Pivot>
          <PivotItem headerText="PHOTOGRAPH">
            <div className="photo-gallery">
              <Grid
                gutter={10}
                columnWidth={400}
                rowHeight={10}
                className="photo-gallery"
              >
                {this.state.photoList.map((ele, index) => (
                  <PhotoItem
                    key={"key" + index}
                    src={ele.src}
                    date={ele.date + index}
                    title={ele.title}
                  />
                ))}
              </Grid>
            </div>
          </PivotItem>
          <PivotItem headerText="RESOURCES">
            <div className="project-container ms-motion-slideLeftIn">
              {this.state.projectList.map(element => (
                <ProjectItem
                  title={element.title}
                  description={element.description}
                  url={element.url}
                  token={element.token}
                  requireAuth={element.requireAuth}
                  onProjectClick={this.onProjectClick}
                  key={element.title}
                />
              ))}
            </div>
            <AuthBox
              hidden={this.state.authBoxHidden}
              onCloseDialogue={this.closeAuthBox}
              onConfirm={this.confirmAuth}
              onCancel={this.cancelAuth}
            />
          </PivotItem>
          <PivotItem headerText="ABOUT">
            <MainContainer>
              <Markdown source="# Test" />
            </MainContainer>
          </PivotItem>
        </Pivot>
      </div>
    );
  }
}
