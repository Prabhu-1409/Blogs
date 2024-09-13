import "./App.css";
import "./styles.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import {BrowserRouter , Routes, Route} from "react-router-dom"
import Home from "./Components/Home";
import Postpage from "./Components/Postpage";
import Form from "./Uploads/Form";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/:id" element={<Postpage></Postpage>}></Route>
      <Route path="postpage" element={<Postpage></Postpage>}></Route>
      {/* <Route path="form" element={<Form></Form>}></Route> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
