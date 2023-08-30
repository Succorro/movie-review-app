import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignupForm";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? (
        <>
          {" "}
          <LoginForm onLogin={onLogin} />
          <p>Don't have an account?</p>
          <button onClick={() => setShowLogin(false)}>Sign Up</button>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <p>Already have an account? </p>
          <button onClick={() => setShowLogin(true)}>Login</button>
        </>
      )}
    </div>
  );
}

export default Login;
