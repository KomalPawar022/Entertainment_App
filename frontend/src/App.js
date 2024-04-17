import "./App.css";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import { Routes, Route } from "react-router-dom";
//import Header from "./components/header";

function App() {
  return (
    <main>
      {/* <Header /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </main>
  );
}

export default App;
