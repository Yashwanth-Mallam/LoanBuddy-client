// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/login";
import LoanBuddyLandingpage from "./components/landing";
import LoanBuddyHomePage from "./components/Home";
import SignUpPage from "./components/signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoanBuddyLandingpage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/Home" element={<LoanBuddyHomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
