import { Route, Routes } from "react-router-dom";
import "./styles/dist/styles.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Coin from "./pages/Coin";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
