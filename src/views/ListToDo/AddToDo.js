import { toast } from "react-toastify";
import React from "react";
class AddToDo extends React.Component {
  state = {
    title: "",
  };

  handleOnChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleOnClick = () => {
    if (!this.state.title) {
      toast.error("Missing parameter !");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 10001),
      title: this.state.title,
    };
    this.props.addNewToDo(todo);
    this.setState({
      title: "",
    });
    toast.success("Wow So Easy ");
  };

  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input
          type="text"
          value={title}
          onChange={(event) => this.handleOnChange(event)}
        />
        <button
          className="add"
          type="button"
          onClick={() => this.handleOnClick()}
        >
          {" "}
          Add
        </button>
      </div>
    );
  }
}
export default AddToDo;
