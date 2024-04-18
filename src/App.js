import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AtherHeader from "./components/AtherHeader";
import Footer from "./components/Footer";
import Top from "./components/Pages/Top";
import Koijan from "./components/Pages/Work/koijan";
import Moneyrecords from "./components/Pages/Work/moneyrecords";

function App() {
  const isPortfolioPage = window.location.pathname.startsWith("/portfolio");
  const HeaderToUse = isPortfolioPage ? AtherHeader : Header;

  return (
    <Router>
      <div className="App">
        <HeaderToUse />

        <Routes>
          <Route path="portfolio/" element={<Top />} />
          <Route path="portfolio/koi-jan" element={<Koijan />} />
          <Route path="portfolio/money-records" element={<Moneyrecords />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}


export default App;
