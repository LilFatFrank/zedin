import "./App.css";
import Header from "./header";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "./home";
import Products from "./products";
import Footer from "./footer";

function App() {
  return (
    <>
      <Header />
      <div className="page-content">
        <BrowserRouter>
          <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<Home />} />
          </Switch>
        </BrowserRouter>
      </div>
      <Footer />
      <a
        href="https://wa.me/+918007359942"
        style={{
          backgroundImage: "url(/assets/images/whatsapp-logo.png)",
          backgroundSize: "contain",
        }}
        className="wa-button"
        target="_blank"
        rel="noreferrer noopener"
      />
    </>
  );
}

export default App;
