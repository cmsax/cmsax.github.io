import * as React from "react";
import { PivotItem, Pivot } from "office-ui-fabric-react/lib/Pivot";
import Markdown from "react-markdown";
import Masonry from "react-masonry-css";

import MainContainer from "./MainContainer";
import ProjectItem from "./ProjectItem";
import PhotoItem from "./PhotoItem";
import AuthBox from "./AuthBox";
import ColorCard from "./ColorCard";
import HeroCard from "./HeroCard";
import SimpleCard from "./SimpleCard";
import DarkThemeContext from "../context";

import { Photos, Projects, Games, Urls, Stacks } from "../api";

import Colors from "../data/pantone";

export default class Navbar extends React.Component {
  static contextType = DarkThemeContext;

  breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

  componentDidMount() {
    Photos.then(json => {
      this.setState({
        photoList: json
      });
    });

    Projects.then(json => {
      this.setState({
        projectList: json
      });
    });

    Games.then(json => {
      this.setState({
        games: json
      });
    });

    Stacks.then(json => {
      this.setState({
        stacks: json
      });
    });

    fetch("/about.md")
      .then(res => res.text())
      .then(text => {
        this.setState({ mdSource: text });
      });
  }

  constructor(props) {
    super(props);
    this.state = {
      authBoxHidden: true,
      mdSource: "",
      valid: false,
      games: [],
      stacks: [],
      photoList: [],
      projectList: []
    };
  }

  closeAuthBox = () => {
    this.setState({
      authBoxHidden: true
    });
  };

  confirmAuth = value => {
    this.closeAuthBox();
    Urls(value).then(json => {
      if (json && json !== "null" && json.length >= 1) {
        this.setState({
          projectList: json,
          valid: true
        });
      }
    });
  };

  cancelAuth = () => {
    this.closeAuthBox();
  };

  onProjectClick = currentProject => {
    if (currentProject.requireAuth && currentProject.token !== true) {
      this.setState({
        authBoxHidden: false
      });
    } else {
      let tab = window.open(currentProject.url, "_blank");
      tab.focus();
    }
  };

  render() {
    return (
      <div>
        <Pivot className={this.context ? "theme-dark" : "theme-light"}>
          <PivotItem headerText="PHOTOGRAPHY" key="photo">
            <MainContainer>
              <Masonry
                breakpointCols={this.breakpointColumnsObj}
                className="my-masonry-grid photo-gallery"
                columnClassName="my-masonry-grid_column"
              >
                {this.state.photoList.map((ele, index) => (
                  <PhotoItem
                    key={index}
                    src={ele.src}
                    date={ele.date}
                    title={ele.title}
                    author={ele.author}
                    type={ele.type}
                    description={ele.description}
                  />
                ))}
              </Masonry>
            </MainContainer>
          </PivotItem>
          <PivotItem headerText="RESOURCES" key="projects">
            <AuthBox
              hidden={this.state.authBoxHidden}
              onCloseDialogue={this.closeAuthBox}
              onConfirm={this.confirmAuth}
              onCancel={this.cancelAuth}
              valid={this.state.valid}
            />
            <MainContainer maxWidth={1000}>
              <div style={{ padding: "0 13px" }}>
                <div className="resource-section">
                  <h2>Tech-Stack I use</h2>
                  <div className="resource-box">
                    {this.state.stacks.map((e, index) => (
                      <SimpleCard title={e} key={index} />
                    ))}
                  </div>
                </div>
                <div className="resource-section">
                  <h2>Games I play</h2>
                  <div className="resource-box">
                    {this.state.games.map((e, index) => (
                      <HeroCard imgSrc={e} key={index} />
                    ))}
                  </div>
                </div>
                <div className="resource-section">
                  <h2>Apps I prefer</h2>
                  <div className="resource-box">
                    {this.state.projectList.map((element, index) => (
                      <ProjectItem
                        title={element.title}
                        description={element.description}
                        url={element.url}
                        token={element.token}
                        key={index}
                        requireAuth={element.requireAuth}
                        onProjectClick={() => {
                          this.onProjectClick(element);
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </MainContainer>
          </PivotItem>
          <PivotItem headerText="ABOUT" key="about">
            <MainContainer maxWidth={1000}>
              <div
                style={{
                  textAlign: "left",
                  display: "block",
                  padding: "0 30px"
                }}
              >
                <Markdown source={this.state.mdSource}></Markdown>
              </div>
            </MainContainer>
          </PivotItem>
          <PivotItem headerText="COLORS" key="tool">
            <MainContainer>
              {Colors.names.map((ele, index) => (
                <ColorCard
                  hex={Colors.values[Colors.names.indexOf(ele)]}
                  name={ele}
                  key={index}
                />
              ))}
            </MainContainer>
          </PivotItem>
        </Pivot>
      </div>
    );
  }
}
