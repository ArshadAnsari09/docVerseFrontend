import TextEditor from "./components/TextEditor/TextEditor";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    // <div>
    //   <TextEditor />
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/documents/:id" element={<TextEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
