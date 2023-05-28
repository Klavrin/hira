import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoginPage from "../pages/login-page";
import { login, setUsername } from "../reducers/initials-slice";
import MainPage from "../pages/main-page";
import "./app.css";

const App = () => {
  const isLoggedIn = useSelector((state) => state.initials.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const loginData = localStorage.getItem("isLoggedIn");
    const usernameData = localStorage.getItem("username");

    dispatch(login(Boolean(loginData)));
    dispatch(setUsername(usernameData));
  }, [dispatch]);

  return (
    <div className="w-screen h-full  flex justify-center">
      {!isLoggedIn ? <LoginPage /> : <MainPage />}
    </div>
  );
};

export default App;
