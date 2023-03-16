import { BrowserRouter, redirect, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import CreateTweet from './pages/CreateTweet'
import EditTweet from './pages/EditTweet'
import { Login } from './pages/Login'
import { Profile } from './pages/Profile'
import { Signup } from './pages/Signup'
import Tweets from './pages/Tweets'

const App = () => (
  <div className="bg-gradient-to-r from-blue-800 to-indigo-900">
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
        </Routes>
      </BrowserRouter>
    </div>
    <Footer />
  </div>
)

export default App
