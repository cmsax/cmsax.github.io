import * as React from "react";
import { PivotItem, Pivot } from "office-ui-fabric-react/lib/Pivot";
import Markdown from "react-markdown";

import MainContainer from "./MainContainer";
import ProjectItem from "./ProjectItem";
import PhotoItem from "./PhotoItem";
import dmi from "../demo.jpg";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoList: [
        {
          title: "loremo impos jfsdjlj sdjiji",
          date: "2019-03-03",
          src: dmi
        },
        {
          title: "loremo impos jfsdjlj sdjiji",
          date: "2019-03-03",
          src: dmi
        },
        {
          title: "loremo impos jfsdjlj sdjiji",
          date: "2019-03-03",
          src: dmi
        },
        {
          title: "loremo impos jfsdjlj sdjiji",
          date: "2019-03-03",
          src: dmi
        },
        {
          title: "loremo impos jfsdjlj sdjiji",
          date: "2019-03-03",
          src: dmi
        }
      ],
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

  render() {
    return (
      <div>
        <Pivot>
          <PivotItem headerText="Projects" itemIcon="Emoji2">
            <div className="project-container">
              {this.state.projectList.map(element => (
                <ProjectItem
                  title={element.title}
                  description={element.description}
                  url={element.url}
                  token={element.token}
                  requireAuth={element.requireAuth}
                />
              ))}
            </div>
          </PivotItem>
          <PivotItem headerText="Photograph" itemIcon="Recent">
            <MainContainer>
              {this.state.photoList.map(ele => (
                <PhotoItem src={ele.src} date={ele.date} title={ele.title} />
              ))}
            </MainContainer>
          </PivotItem>
          <PivotItem headerText="About" itemIcon="Globe">
            <MainContainer>
              <Markdown source="# Test" />
            </MainContainer>
          </PivotItem>
        </Pivot>
      </div>
    );
  }
}
