import React from "react";
import AddComponents from "./AddComponents";
import ChildComponents from "./ChildComponents";
class MyComponents extends React.Component {
  state = {
    arrJobs: [
      {
        id: 1,
        title: "dev",
        salary: 3000,
      },
      {
        id: 2,
        title: "doctor",
        salary: 3000,
      },
      {
        id: 3,
        title: "designer",
        salary: 2000,
      },
    ],
  };

  addNewJob = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  componentDidUpdate(prevProps, preState) {
    console.log("prev state: ", preState, "current state: ", this.state);
  }

  componentDidMount() {
    console.log("run components: ");
  }

  deleteJob = (job) => {
    this.setState({
      arrJobs: this.state.arrJobs.filter((item, index) => {
        return item.id !== job.id;
      }),
    });
  };

  render() {
    console.log("check state: ", this.state);

    return (
      <>
        <AddComponents addNewJob={this.addNewJob} />
        <ChildComponents
          arrJobs={this.state.arrJobs}
          deleteJob={this.deleteJob}
        />
      </>
    );
  }
}
export default MyComponents;
