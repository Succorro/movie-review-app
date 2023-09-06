import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignupForm";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div
      class="d-flex align-items-center py-4 bg-body-tertiary "
      className="d-flex align-items-center py-4 bg-body-tertiary "
    >
      {showLogin ? (
        <main class="m-auto" className="m-auto">
          {" "}
          <LoginForm onLogin={onLogin} />
          <p class="h3 mb-3 fw-normal" className="h3 mb-3 fw-normal">
            Don't have an account?
          </p>
          <button
            className="btn btn-warning w-50 py-2"
            class="btn btn-warning w-50 py-2"
            onClick={() => setShowLogin(false)}
          >
            Sign Up
          </button>
        </main>
      ) : (
        <main style={{ margin: "10%", marginTop: 0 }}>
          <SignUpForm onLogin={onLogin} />
          <p class="h3 mb-3 fw-normal" className="h3 mb-3 fw-normal">
            Already have an account?{" "}
          </p>

          <button
            class="btn btn-warning w-50 py-2"
            className="btn btn-warning w-50 py-2"
            onClick={() => setShowLogin(true)}
          >
            Login
          </button>
        </main>
      )}
    </div>
  );
}

export default Login;
