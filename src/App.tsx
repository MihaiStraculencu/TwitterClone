import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import CreateTweet from "./pages/CreateTweet";

import { Home } from "./screens/Homepage";

const App = () => (
  <div className="bg-white space-y-10">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/create" element={<CreateTweet />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
