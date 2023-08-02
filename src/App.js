import Input from "./components/Input";
import Greeting from "./components/Greeting";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Input />} />
        <Route path='/greet' element={<Greeting />} />
      </Routes>
    </Router>
  );
}

export default App;
