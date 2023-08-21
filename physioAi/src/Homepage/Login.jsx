import React, { useState } from "react";
import { login } from "../services/api";
import "./loginForm.css";
import { MdEmail, IoMdLock, FaMobileAlt } from "../Registration/IconProps";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("satmis10000");
  const [password, setPassword] = useState("Asdf1234#");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    localStorage.setItem("isLoggedIn", true.toString());
    navigate("/");
    setLoggedIn(true);
    try {
      const response = await login(username, password);
      if (response.error) {
        setError("Invalid credentials. Please try again.");
      } else {
        setLoggedIn(true);
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div style={{}}>
      <div className="login-container">
        <>
          <div className="login-box">
            {/* <h1 className="login-header">GraphFin Login</h1>
          <div className="input-group">
            <label className="input-label">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label className="input-label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="center-button">
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
          </div> */}
            <div className="login_form_box">
              <div className="login-form">
                <div className="login_title">
                  <h2>Welcome back</h2>
                  <p>Please enter your login information.</p>
                </div>

                <form>
                  {/* Conditionally render email or mobile number fields */}
                  <div style={{ textAlign: "left" }}>
                    <label htmlFor="text">Enter Username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <>
                    <div style={{ textAlign: "left" }}>
                      <label htmlFor="password">Enter Password</label>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </>
                  <button type="submit" onClick={handleLogin}>
                    Login
                  </button>
                </form>
              </div>
            </div>
            {error && <p className="error-message">{error}</p>}
          </div>
        </>
      </div>
    </div>
  );
}

export default LoginPage;
