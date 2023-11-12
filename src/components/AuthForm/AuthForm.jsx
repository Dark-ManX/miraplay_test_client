import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import reqAddresses from "../../additional/API";
import Button from "../Button/Button";
import { useUserSignInMutation } from "../../redux/authAPI";

const { REQUEST_ADDRESS } = reqAddresses;

const AuthForm = () => {
  const [exist, setExist] = useState(false);
  const [shown, setShown] = useState(false);
  const [confirmShown, setConfirmShown] = useState(false);
  const [error, setError] = useState("");

  const [userSignIn] = useUserSignInMutation();

  const navigate = useNavigate();

  const data = {
    email: "",
    password: "",
    confirm: "",
  };

  const [credentials, setCredentials] = useState(data);

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      if (!exist && data.password !== data.confirm) {
        setError("password isn't equal with confirmation password");
        return;
      }

      if (exist) {
        const res = await userSignIn({
          email: data.email,
          password: data.password,
        });

        if (res?.data.code === 200) {
          navigate("/games");
        }
      } else {
        const res = await axios.post(
          `${REQUEST_ADDRESS}/users/${exist ? "signIn" : "signUp"}`,
          {
            body: {
              email: data.email,
              password: data.password,
            },
          }
        );

        if (res?.status === 201) setExist(true);
      }

      // if (res?.status === 201) {
      //   setExist(true);
      // } else if (res?.status === 200) {
      //   console.log("object");
      //   navigate("/games");
      // }
      reset();
    } catch (err) {
      setError(err.message);
    }
  }

  function reset() {
    data.email = "";
    data.password = "";
    data.confirm = "";
  }

  function handleInput(e) {
    const { name, value } = e.target;
    data[name] = value;
  }

  return (
    <div className={`relative`}>
      <p className={`text-[40px] uppercase font-bold text-[54px]`}>
        User registration
      </p>
      <form
        onSubmit={handleSubmit}
        className={`relative w-[40%] p-[30px] border-[0.5px] border-gray-500 rounded-2xl bg-[#1c1c1c] text-[14px]`}
      >
        <label className={`block`}>
          Email
          <input
            name="email"
            type="email"
            onInput={handleInput}
            autoComplete="off"
            className={`block h-[40px] w-full mb-[20px] bg-gray-600 rounded-lg px-[15px] focus:border-green-600 focus:border-[3px] focus:outline-none`}
          ></input>
        </label>

        <label>
          Password
          <input
            name="password"
            type={!shown ? "password" : "text"}
            onInput={handleInput}
            autoComplete="off"
            className={`block h-[40px] w-full mb-[20px] bg-gray-600 rounded-lg px-[15px] focus:border-green-600 focus:border-[3px] focus:outline-none`}
          ></input>
        </label>

        {!exist && (
          <label>
            Confirm password
            <input
              name="confirm"
              type={!confirmShown ? "password" : "text"}
              onInput={handleInput}
              autoComplete="off"
              className={`block h-[40px] w-full mb-[20px] bg-gray-600 rounded-lg px-[15px] focus:border-green-600 focus:border-[3px] focus:outline-none`}
            ></input>
          </label>
        )}
        <Button
          text={!exist ? "Sign Up" : "Sign In"}
          type="submit"
          className={`block bg-[rgba(63,156,20,.5)] border-[1px] border-[#3f9c14] rounded-[10px] px-[10px] uppercase  hover:bg-[#3f9c14] h-[30px]`}
        />
      </form>

      <Button
        text={
          !shown ? (
            <ImEye className={`w-[20px] h-[20px]`} />
          ) : (
            <ImEyeBlocked className={`w-[20px] h-[20px]`} />
          )
        }
        type="button"
        onClick={() => setShown(!shown)}
        className={`absolute top-[225px] left-[460px]`}
      />

      {!exist && (
        <Button
          text={
            !confirmShown ? (
              <ImEye className={`w-[20px] h-[20px]`} />
            ) : (
              <ImEyeBlocked className={`w-[20px] h-[20px]`} />
            )
          }
          type="button"
          onClick={() => setConfirmShown(!confirmShown)}
          className={`absolute top-[305px] left-[460px]`}
        />
      )}

      {error && <p>{error}</p>}
      <p>
        Already have an account{" "}
        <Button
          text="click here"
          type="button"
          onClick={() => setExist(!exist)}
          className={`underline text-green-600`}
        />
      </p>
    </div>
  );
};

export default AuthForm;
