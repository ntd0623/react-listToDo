import React from "react";
class CreateNewComponents extends React.Component {
  state = {
    title: "",
    salary: "",
  };

  handleChangeTitleJobs = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.state.title || !this.state.salary) {
      alert("Missing parameter !");
      this.setState({
        title: "",
        salary: "",
      });
      return;
    }

    this.props.addNewJob({
      id: Math.floor(Math.random() * 1000000),
      title: this.state.title,
      salary: this.state.salary,
    });

    this.setState({
      title: "",
      salary: "",
    });
  };

  render() {
    return (
      <form>
        <label htmlFor="fname">Jobs Title:</label>
        <br />
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.handleChangeTitleJobs(event)}
        />
        <br />
        <label htmlFor="lname">Salary :</label>
        <br />
        <input
          type="text"
          value={this.state.salary}
          onChange={(event) => this.handleChangeSalary(event)}
        />
        <br />
        <br />
        <input type="submit" onClick={(event) => this.handleSubmit(event)} />
      </form>
    );
  }
}
export default CreateNewComponents;
