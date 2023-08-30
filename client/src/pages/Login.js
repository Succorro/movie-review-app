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
          <p>Don't have an account?</p>
          <LoginForm onLogin={onLogin} />
          <button onClick={() => setShowLogin(false)}>Sign Up</button>
        </>
      ) : (
        <>
          <p>Already have an account? </p>
          <SignUpForm onLogin={onLogin} />
          <button onClick={() => setShowLogin(true)}>Login</button>
        </>
      )}
    </div>
  );
}

export default Login;
