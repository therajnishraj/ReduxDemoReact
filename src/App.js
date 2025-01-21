import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes,HashRouter } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import CustomNavBar from "./layout/CustomNavBar";
import Note from "./component/Note";

function App() {
  return (
    <>
    <CustomNavBar/>
      <HashRouter>
        <Routes>
          <Route path="about" element={<About />} />
          <Route path="home" element={<Home />} />
          <Route path="note" element={<Note />} />
          <Route path="" element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
