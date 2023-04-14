import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import Populer from "./components/Populer";
import Series from "./pages/Series";
import Mylist from "./pages/Mylist";
import Movies from "./pages/Movies";

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/populer" element={<Populer />} />
          <Route path="/series" element={<Series />} />
          <Route path="/mylist" element={<Mylist />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}
