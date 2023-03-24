import { BrowserRouter, redirect, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import CreateTweet from "./pages/CreateTweet";
import EditTweet from "./pages/EditTweet";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { CreateNewUser } from "./pages/CreateNewUser";
import Tweets from "./pages/Tweets";
import ResetPassword from "./pages/ResetPassword";

const App = () => (
  <div className="bg-[#456ced]">
    <BrowserRouter>
      <Navbar />
      <MobileNavbar />
      <div className="flex justify-center min-h-screen md:pt-32 pt-10 px-4 items-start  ">
        <Routes>
          <Route path="/" element={<Tweets />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createNewUser" element={<CreateNewUser />} />
          <Route path="/create" element={<CreateTweet />} />
          <Route path="/edit/:tweetId" element={<EditTweet />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/resetPassword" element={<ResetPassword />} />

          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
    <Footer />
  </div>
);

export default App;
