import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AtherHeader from "./components/AtherHeader";
import Footer from "./components/Footer";
import Top from "./components/Pages/Top/Top";
import Koijan from "./components/Pages/Work/koijan";
import Moneyrecords from "./components/Pages/Work/moneyrecords";
import MrhmdLFL from "./components/Pages/Work/mrhmdLFL";
import OrderStream from "./components/Pages/Work/orderstream";
import ChicSight from "./components/Pages/Work/chicsight";

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderSelector />

        <Routes>
          <Route path="/portfolio" element={<Top />} />
          <Route path="/portfolio/work/mrhmdLFL" element={<MrhmdLFL />} />
          <Route path="/portfolio/work/koi-jan" element={<Koijan />} />
          <Route path="/portfolio/work/money-records" element={<Moneyrecords />} />
          <Route path="/portfolio/work/order-stream" element={<OrderStream />} />
          <Route path="/portfolio/work/chic-sight" element={<ChicSight />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

function HeaderSelector() {
  const location = useLocation();
  const isPortfolioPage = location.pathname.startsWith("/portfolio/work/");
  return isPortfolioPage ? <AtherHeader /> : <Header />;
}

export default App;