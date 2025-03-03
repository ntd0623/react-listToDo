import React from "react";
import "./ListToDos.scss";
import "./AddToDo";
import AddToDo from "./AddToDo";
import { toast } from "react-toastify";
class ListToDo extends React.Component {
  state = {
    listToDo: [
      {
        id: 1,
        title: "Doing homework",
      },
      {
        id: 2,
        title: "Play piano",
      },
      {
        id: 3,
        title: "Listen to music",
      },
    ],
    editToDo: {},
  };

  handleEditToDo = (todo) => {
    let { editToDo, listToDo } = this.state;
    let isEmptyObj = Object.keys(editToDo).length === 0;
    if (!isEmptyObj && todo.id === editToDo.id) {
      let listToDoCoppy = [...listToDo];
      let objIndex = listToDoCoppy.findIndex((item) => item.id == todo.id);
      listToDoCoppy[objIndex].title = editToDo.title;
      this.setState({
        listToDo: listToDoCoppy,
        editToDo: {},
      });
      toast.success("Update todo success");
      return;
    }
    this.setState({
      editToDo: todo,
    });
  };

  addNewToDo = (todo) => {
    this.setState({
      listToDo: [...this.state.listToDo, todo],
    });
  };

  handleDelete = (todo) => {
    this.setState({
      listToDo: [...this.state.listToDo].filter((item, index) => {
        return item.id !== todo.id;
      }),
    });
    toast.success("Delete success");
  };

  handleOnChangeEditToDo = (event) => {
    let editToDoCoppy = { ...this.state.editToDo };
    editToDoCoppy.title = event.target.value;
    this.setState({
      editToDo: editToDoCoppy,
    });
  };

  render() {
    let { listToDo, editToDo } = this.state;
    let isEmptyObj = Object.keys(editToDo).length === 0;
    return (
      <div className="list-todo-container">
        <AddToDo addNewToDo={this.addNewToDo} />
        <div className="list-todo-content">
          {listToDo &&
            listToDo.length > 0 &&
            listToDo.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  <>
                    {isEmptyObj === true ? (
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <>
                        {item.id === editToDo.id ? (
                          <span>
                            {index + 1} -{" "}
                            <input
                              type="text"
                              value={editToDo.title}
                              onChange={(event) =>
                                this.handleOnChangeEditToDo(event)
                              }
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}{" "}
                          </span>
                        )}
                      </>
                    )}
                  </>
                  <button
                    className="edit"
                    onClick={() => this.handleEditToDo(item)}
                  >
                    <>
                      {isEmptyObj === false && item.id === editToDo.id
                        ? "Save"
                        : "Edit"}
                    </>
                  </button>
                  <button
                    className="delete"
                    onClick={() => this.handleDelete(item)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default ListToDo;
