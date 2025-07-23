import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  ClerkLoaded,
} from "@clerk/clerk-react";

import "./App.css";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Settings from "./pages/Settings";
import Projects from "./pages/Projects";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import HomeRedirect from "./pages/HomeRedirect";

function App() {
  return (
    <Router>
      <ClerkLoaded>
        <Routes>
          {/* 🔁 First visit goes here */}
          <Route path="/" element={<HomeRedirect />} />

          {/* 🔑 Auth pages */}
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />

          {/* 🔒 Protected app */}
          <Route
            path="/dashboard"
            element={
              <>
                <SignedIn>
                  <AppLayout />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="settings" element={<Settings />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </ClerkLoaded>
    </Router>
  );
}

export default App;
