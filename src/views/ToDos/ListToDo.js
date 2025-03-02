import React from "react";
import "./ListToDo.scss";
import AddToDos from "./AddToDos";
import { toast } from "react-toastify";
class ListToDo extends React.Component {
  state = {
    listToDos: [
      {
        id: 1,
        title: "Doing homework",
      },
      {
        id: 2,
        title: "Making video",
      },
      {
        id: 3,
        title: "Fixing bugs",
      },
    ],
    editToDo: {},
  };

  addNewToDos = (todos) => {
    this.setState({
      listToDos: [...this.state.listToDos, todos],
    });
    toast.success("Wow so easy!");
  };

  handleEditToDo = (todo) => {
    let { editToDo, listToDos } = this.state;
    let isEmptyObj = Object.keys(editToDo).length === 0;
    if (!isEmptyObj && editToDo.id === todo.id) {
      let listToDoCoppy = [...listToDos];
      let objIndex = listToDoCoppy.findIndex((item) => item.id === todo.id);
      listToDoCoppy[objIndex].title = editToDo.title;
      this.setState({
        listToDos: listToDoCoppy,
        editToDo: {},
      });
      toast.success("Update todo success");
      return;
    }
    this.setState({
      editToDo: todo,
    });
  };

  handleDeleteToDo = (todo) => {
    this.setState({
      listToDos: this.state.listToDos.filter((item, index) => {
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
    let { listToDos, editToDo } = this.state;
    let isEmptyObj = Object.keys(editToDo).length === 0;
    return (
      <div className="list-todo-container">
        <AddToDos addNewToDos={this.addNewToDos} />
        <div className="list-todo-content">
          {listToDos &&
            listToDos.length > 0 &&
            listToDos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  {isEmptyObj === true ? (
                    <span>
                      {index + 1} - {item.title}{" "}
                    </span>
                  ) : (
                    <>
                      {item.id === editToDo.id ? (
                        <span>
                          {index + 1} -{" "}
                          <input
                            value={editToDo.title}
                            onChange={(event) =>
                              this.handleOnChangeEditToDo(event)
                            }
                          />{" "}
                        </span>
                      ) : (
                        <span>
                          {index + 1} - {item.title}{" "}
                        </span>
                      )}
                    </>
                  )}
                  <button
                    className="edit"
                    onClick={() => this.handleEditToDo(item)}
                  >
                    {isEmptyObj === false && item.id === editToDo.id
                      ? "Save"
                      : "Edit"}
                  </button>
                  <button
                    className="delete"
                    onClick={() => this.handleDeleteToDo(item)}
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
