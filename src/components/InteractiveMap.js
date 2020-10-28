import React, { Component } from "react";

export class InteractiveMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconHistoryHovered: false,
      iconLegendsHovered: false,
      iconPresentHovered: false,
      videoContainerOpen: false,
    };
    //  this.videoRef = React.createRef();
  }
  mouseEnterHistoryHandler = () => {
    this.setState({
      iconHistoryHovered: true,
    });
  };
  mouseLeaveHistoryHandler = () => {
    this.setState({
      iconHistoryHovered: false,
    });
  };
  mouseEnterLegendsHandler = () => {
    this.setState({
      iconLegendsHovered: true,
    });
  };
  mouseLeaveLegendsHandler = () => {
    this.setState({
      iconLegendsHovered: false,
    });
  };
  mouseEnterPresentHandler = () => {
    this.setState({
      iconPresentHovered: true,
    });
  };
  mouseLeavePresentHandler = () => {
    this.setState({
      iconPresentHovered: false,
    });
  };

  btnHistoryClicked = () => {
    this.setState({ videoContainerOpen: true });
  };

  videoCloseButtonClicked = () => {
    this.setState({ videoContainerOpen: false });
  };

  render() {
    const logoHistoryClass = this.state.iconHistoryHovered ? "logo-scale-animation" : "";
    const logoLegendsClass = this.state.iconLegendsHovered ? "logo-scale-animation" : "";
    const logoPresentClass = this.state.iconPresentHovered ? "logo-scale-animation" : "";

    const imageNumbers = [1, 2, 3, 4, 1];

    return (
      <div className="interactive-map">
        <div className="categories">
          <div className="text-container">
            <h1>Pasirinkite kategoriją - aprašymą</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet nulla nemo nostrum
              voluptates repellat soluta est quasi deleniti? Vero, excepturi?
            </p>
          </div>
          <div className="buttons-container">
            <div
              className="btn"
              onMouseEnter={this.mouseEnterHistoryHandler}
              onMouseLeave={this.mouseLeaveHistoryHandler}
            >
              <div className="circle"></div>
              <p>Šeduvos istorija</p>
            </div>
            <div
              className="btn"
              onMouseEnter={this.mouseEnterLegendsHandler}
              onMouseLeave={this.mouseLeaveLegendsHandler}
            >
              <div className="circle"></div>
              <p>Šeduvos legendos</p>
            </div>
            <div
              className="btn"
              onMouseEnter={this.mouseEnterPresentHandler}
              onMouseLeave={this.mouseLeavePresentHandler}
            >
              <div className="circle"></div>
              <p>Šeduva dabar</p>
            </div>
          </div>
        </div>
        <div className="map-zone-container">
          <div className="map-image"></div>
          <div className="overlay-buttons">
            <div className="btn btn-history" onClick={this.btnHistoryClicked}>
              <div className={"logo " + logoHistoryClass}></div>
              <div className="circle"></div>
            </div>
            <div className="btn btn-history" onClick={this.btnHistoryClicked}>
              <div className={"logo " + logoHistoryClass}></div>
              <div className="circle"></div>
            </div>
            <div className="btn btn-history" onClick={this.btnHistoryClicked}>
              <div className={"logo " + logoHistoryClass}></div>
              <div className="circle"></div>
            </div>
            <div className="btn btn-legends">
              <div className={"logo " + logoLegendsClass}></div>

              <div className="circle"></div>
            </div>
            <div className="btn btn-legends">
              <div className={"logo " + logoLegendsClass}></div>

              <div className="circle"></div>
            </div>
            <div className="btn btn-legends">
              <div className={"logo " + logoLegendsClass}></div>

              <div className="circle"></div>
            </div>
            <div className="btn btn-present">
              <div className={"logo " + logoPresentClass}></div>

              <div className="circle"></div>
            </div>
            <div className="btn btn-present">
              <div className={"logo " + logoPresentClass}></div>

              <div className="circle"></div>
            </div>
            <div className="btn btn-present">
              <div className={"logo " + logoPresentClass}></div>

              <div className="circle"></div>
            </div>
          </div>
        </div>
        <div
          className="modal-window-container"
          style={{ display: this.state.videoContainerOpen ? "flex" : "none" }}
        >
          <div className="window-content">
            <div className="content-top">
              <h1>Babos audio</h1>
              <div className="btn btn-close" onClick={this.videoCloseButtonClicked}>
                CLOSE
              </div>
            </div>
            <div className="content-bottom">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam officiis veritatis
                perferendis dolores obcaecati. Modi veniam, consequuntur nisi fuga, adipisci nam
                unde fugiat beatae sunt ipsam voluptatem vel saepe quo. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Ullam officiis veritatis perferendis dolores
                obcaecati. Modi veniam, consequuntur nisi fuga, adipisci nam unde fugiat beatae sunt
                ipsam voluptatem vel saepe quo. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Ullam officiis veritatis perferendis dolores obcaecati. Modi veniam,
                consequuntur nisi fuga, adipisci nam unde fugiat beatae sunt ipsam voluptatem vel
                saepe quo.
              </p>
              <div className="video-screen">VIDEO SCREEN</div>
            </div>
          </div>
        </div>
        <div className="modal-window-container window-gallery">
          <div className="window-content">
            <h1>Babos galerija</h1>
            {/* Image carousel start */}
            <div className={`image-container plant-image-container`}>
              <div className="btn btn-previous">PREVIUOS</div>
              <div className="image-carousel-overflow">
                <div className="image-carousel plant-image-carousel">
                  {imageNumbers.map((imageNumber, index) => {
                    let imageUrl = require(`../images/simkunaite/simkunaite${imageNumber}.jpg`);
                    return (
                      <div
                        key={"image" + index}
                        style={{
                          backgroundImage: `url(${imageUrl})`,
                        }}
                        className="image"
                      ></div>
                    );
                  })}
                </div>
              </div>
              <div className="btn btn-previous">NEXT</div>
            </div>
            {/* Image carousel end */}
          </div>
        </div>
      </div>
    );
  }
}

export default InteractiveMap;
