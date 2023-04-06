import {BrowserRouter as Router, Form, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Woman from "./components/Woman";
import Sell from "./components/Sell";
import NewCollection from "./components/NewCollection";
import SignIn from "./components/SignIn";
import Register from "./components/Register";
// import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import { faCoffee} from "@fortawesome/free-solid-svg-icons";
// import { faUser} from "@fortawesome/free-solid-svg-icons";
import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/woman.scss";
import "./styles/sell.scss";
import "./styles/mediaquery.scss";
import "./styles/NewCollection.scss";
import "./styles/SignIn.scss";
import "./styles/Register.scss";





function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<Home />}/>
        <Route path="/woman" element={<Woman />}/>
        <Route path="/newCollection" element={<NewCollection />}/>
        <Route path="/sell" element={<Sell />}/>
        <Route path="/signIn" element={<SignIn />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
