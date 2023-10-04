import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Top from "./components/Pages/Top";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/portfolio-js" element={<Top />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
