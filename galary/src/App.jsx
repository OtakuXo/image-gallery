import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/auth/Auth";
import Latout from "./layouts/Latout";
import Upload from "./pages/Upload";
import Search from "./pages/Search";
import Get from "./pages/Get";
import Login from "./pages/auth/Login";
import Profile from "./pages/Profile";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "./store/auth-slice";
import Useruplodes from "./pages/Useruplodes";
import Collection from "./pages/Collection";

function App(props) {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const fetchUser = async () => {
    try {
      await axios
        .get("http://localhost:5000/api/v1/user", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((response) => dispatch(login(response.data)));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    token && fetchUser();
  }, []);

  return (
    <Latout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/brouse" element={<Search />} />
        <Route path="/get/:imageid" element={<Get />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/useruplodes" element={<Useruplodes />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </Latout>
  );
}

export default App;
