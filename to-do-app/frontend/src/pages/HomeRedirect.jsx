import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

export default function HomeRedirect() {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard");
    } else {
      navigate("/sign-in");
    }
  }, [isSignedIn, navigate]);

  return null;
}
