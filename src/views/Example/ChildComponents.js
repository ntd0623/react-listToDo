import React from "react";
import "./Child.scss";
class Child extends React.Component {
  state = {
    isShow: false,
  };

  handleOnShowHide = () => {
    console.log("Check show: ", this.state.isShow);
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  handleOnDelete = (item) => {
    this.props.deleteJob(item);
  };

  render() {
    console.log("Check props: ", this.props);
    let { arrJobs } = this.props;
    let { isShow } = this.state;
    //console.log("isShow: ", this.state.isShow);
    return (
      <React.Fragment>
        {!isShow ? (
          <div>
            <button
              className="btn-show"
              onClick={() => this.handleOnShowHide()}
            >
              Show
            </button>
          </div>
        ) : (
          <React.Fragment>
            <div className="job-list">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary}${" "}
                    <>
                      {" "}
                      <></>{" "}
                    </>{" "}
                    <button
                      onClick={() => {
                        this.handleOnDelete(item);
                      }}
                    >
                      X
                    </button>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleOnShowHide()}>Hide</button>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
export default Child;
