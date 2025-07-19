import { useEffect, useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function GoogleAuthSuccess() {
  const [params] = useSearchParams();
  const token = params.get("token");
  const name = params.get("name");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const user = { token, user: { name } };
      login(user);
      navigate("/");
    }
  }, [token, name, login, navigate]);

  return <div className="p-4">Logging in with Google...</div>;
}
