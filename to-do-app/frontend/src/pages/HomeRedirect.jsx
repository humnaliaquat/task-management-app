import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

export default function HomeRedirect() {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      console.log("isSignedIn:", isSignedIn);
      console.log("Navigating to:", "/dashboard");
      try {
        navigate("/dashboard");
      } catch (err) {
        console.error("❌ Navigate failed", err);
      }
    } else {
      console.log("Navigating to:", "/sign-in");
      navigate("/sign-in");
    }
  }, [isSignedIn, navigate]);

  return null;
}
