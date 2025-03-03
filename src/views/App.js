import logo from "./logo.svg";
import "./App.scss";
import ListToDo from "./ListToDo/ListToDo";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/**
 * 2 components: class Components / function components
 *  JSX
 *
 */

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>ToDo App with React</p>
        <ListToDo />
        {/* <MyComponents /> */}
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </div>
  );
};

export default App;
