import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateTweet from "./pages/CreateTweet";

import { Home } from "./screens/Homepage";

const App = () => (
  <div className="bg-white py-10">
    <BrowserRouter>
      <Routes>
        <Route path="/create" element={<CreateTweet />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
