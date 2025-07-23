import { useSignIn } from "@clerk/clerk-react";
import { useState } from "react";

export default function SignInPage() {
  const { signIn, setActive } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });
      await setActive({ session: result.createdSessionId });
      window.location.href = "/dashboard";
    } catch (error) {
      setErr(error.errors[0]?.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="input"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="input"
      />
      <button type="submit" className="btn">
        Sign In
      </button>
      {err && <p className="text-red-500">{err}</p>}
    </form>
  );
}
