import logo from "./logo.svg";
import "./App.scss";
import ListToDo from "./ListToDo/ListToDo";
import MyComponents from "./Example/MyComponents";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavigationComponent from "./Navigation/NavigationComponent";
import Home from "./Example/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router";
/**
 * 2 components: class Components / function components
 *  JSX
 *
 */

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavigationComponent />
          <img src={logo} className="App-logo" alt="logo" />
          {/* <ListToDo /> */}
          {/*  */}
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            {/* Đưa component vào element */}
            <Route path="/todo" element={<ListToDo />} />
            <Route path="/about" element={<MyComponents />} />
          </Routes>
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
    </BrowserRouter>
  );
};

export default App;
