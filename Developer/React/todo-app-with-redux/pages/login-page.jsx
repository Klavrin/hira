import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, setUsername } from "../reducers/initials-slice";

const LoginPage = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleConfirm = () => {
    localStorage.setItem("isLoggedIn", true);
    dispatch(login(true));
    dispatch(setUsername(message));
  };

  return (
    <form className="w-screen h-screen bg-[#f6f6f6] flex flex-col justify-center items-center" onSubmit={(e) => e.preventDefault()}>
      <h1>Enter your name:</h1>
      <input onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleConfirm}>Confirm</button>
    </form>
  );
};

export default LoginPage;
