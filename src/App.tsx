import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import MobileNavbar from './components/Navbar/MobileNavbar'
import Navbar from './components/Navbar/Navbar'
import About from './pages/About'
import CreateTweet from './pages/CreateTweet'
import EditTweet from './pages/EditTweet'
import { Login } from './pages/Login'
import { Profile } from './pages/Profile'
import { CreateNewUser } from './pages/CreateNewUser'
import Tweets from './pages/Tweets'
import ResetPassword from './pages/ResetPassword'
import { UserProvider } from './contexts/UserProvider'
import DetailsTweet from './pages/DetailsTweet'

const App = () => (
  <div className="bg-[#456ced]">
    <UserProvider>
      <BrowserRouter>
        <Navbar />
        <MobileNavbar />
        <div className="flex justify-center min-h-screen md:pt-32 pt-10 px-4 items-start  ">
          <Routes>
            <Route path="/" element={<Tweets />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createNewUser" element={<CreateNewUser />} />
            <Route path="/tweet/create" element={<CreateTweet />} />
            <Route path="/tweet/edit/:tweetId" element={<EditTweet />} />
            <Route path="/tweet/details/:tweetId" element={<DetailsTweet />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/resetPassword" element={<ResetPassword />} />

            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </UserProvider>
  </div>
)

export default App
