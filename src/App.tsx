import { BrowserRouter, redirect, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import CreateTweet from "./pages/CreateTweet";
import EditTweet from "./pages/EditTweet";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Signup } from "./pages/Signup";
import Tweets from "./pages/Tweets";

const App = () => (
  <div className="bg-gradient-to-r from-cyan-700 to-indigo-500">
    <div className="min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Tweets />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create" element={<CreateTweet />} />
          <Route path="/edit/:tweetId" element={<EditTweet />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
    <Footer />
  </div>
);

export default App;
