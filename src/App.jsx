import { BrowserRouter, Routes, Route } from "react-router-dom";
import OfferBar from "./Component/Offerbar";
import Home from "./Component/Home";
import ProductDetails from "./Component/ProductDetails";


function App() {
  return (
    <BrowserRouter>
      <OfferBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
