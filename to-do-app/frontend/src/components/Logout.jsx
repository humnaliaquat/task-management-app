import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function LogoutBtn() {
  const { logout } = useContext(AuthContext);

  return <button onClick={logout}>Logout</button>;
}
