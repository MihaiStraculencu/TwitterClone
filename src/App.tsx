import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CreateTweet from "./pages/CreateTweet";
import EditTweet from "./pages/EditTweet";
import Tweets from "./pages/Tweets";

const App = () => (
  <div className="bg-gradient-to-r from-blue-800 to-indigo-900">
    <div className="min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/edit/:tweetId" element={<EditTweet />} />
          <Route path="/create" element={<CreateTweet />} />
          <Route path="/" element={<Tweets />} />
        </Routes>
      </BrowserRouter>
    </div>
    <Footer />
  </div>
);

export default App;
