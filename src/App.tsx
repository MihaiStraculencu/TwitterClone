import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import CreateTweet from "./pages/CreateTweet";

import { Home } from "./screens/Homepage";

const App = () => (
  <div className="bg-gradient-to-r from-blue-800 to-indigo-900 space-y-10">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/create" element={<CreateTweet />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
