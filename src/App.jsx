import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./assets/pages/Layout";
import Home from "./assets/pages/Home";
import Introduce from "./assets/pages/Introduce";
import Japan from "./assets/pages/Japan";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/introduce" element={<Introduce />} />
            <Route path="/japan" element={<Japan />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
