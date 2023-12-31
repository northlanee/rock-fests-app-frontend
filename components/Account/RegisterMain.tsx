import { FaUser } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { FaImage } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import styles from "./AuthForm.module.scss";
import { FormEvent, useContext, useEffect, useState } from "react";
import AuthContext from "@/context/AuthContext";

const RegisterMain = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { register, error } = useContext(AuthContext);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      toast.error("Passwords do not match");
      return;
    }

    register({ email, username, password });
  };

  return (
    <div className={styles.auth}>
      <h1>
        <FaUser /> Register
      </h1>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="passwordConfirm">Confirm Password</label>
          <input
            type="password"
            id="passwordConfirm"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
        <input type="submit" value="Register" className="btn" />
      </form>
      <p>
        Already have an account? <Link href="/account/login">Login</Link>
      </p>
    </div>
  );
};

export default RegisterMain;
