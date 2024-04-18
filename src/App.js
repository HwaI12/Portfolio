import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Top from "./components/Pages/Top";
import Koijan from "./components/Work/koijan";
import Moneyrecords from "./components/Work/moneyrecords";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path= "/portfolio" element={<Top />} />
          <Route path="/portfolio/koi-jan" element={<Koijan />} />
          <Route path="/portfolio/money-records" element={<Moneyrecords />} />
          
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
