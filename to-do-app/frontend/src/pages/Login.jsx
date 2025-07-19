import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );
      login(res.data); // save user + token in context/localStorage
      navigate("/"); // go to dashboard
    } catch (err) {
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 p-6 max-w-md mx-auto mt-20 border rounded-lg shadow"
    >
      <h2 className="text-2xl font-bold text-center">Login</h2>

      <input
        placeholder="Email"
        type="email"
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="p-2 border rounded"
      />

      <input
        placeholder="Password"
        type="password"
        required
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="p-2 border rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 text-black py-2 px-4 rounded hover:bg-blue-700"
      >
        Login
      </button>
      <a
        href="http://localhost:5000/api/auth/google"
        className="google-login text-black px-4 py-2 rounded"
      >
        Login with Google
      </a>
      <p className="text-center text-sm dont-have-acc-link">
        Don&apos;t have an account?{" "}
        <Link to="/register" className="text-blue-500 underline">
          Register here
        </Link>
      </p>
    </form>
  );
}
