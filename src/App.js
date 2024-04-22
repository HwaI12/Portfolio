import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AtherHeader from "./components/AtherHeader";
import Footer from "./components/Footer";
import Top from "./components/Pages/Top/Top";
import Koijan from "./components/Pages/Work/koijan";
import Moneyrecords from "./components/Pages/Work/moneyrecords";

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderSelector />

        <Routes>
          <Route path="portfolio/" element={<Top />} />
          <Route path="portfolio/work/koi-jan" element={<Koijan />} />
          <Route path="portfolio/work/money-records" element={<Moneyrecords />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

function HeaderSelector() {
  const location = useLocation();
  const isPortfolioPage = location.pathname.startsWith("/portfolio/");
  return isPortfolioPage ? <AtherHeader /> : <Header />;
}

export default App;
