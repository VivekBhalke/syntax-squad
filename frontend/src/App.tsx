import { Routes, Route, Navigate } from "react-router-dom";
import { SignIn, SignUp, useAuth } from "@clerk/clerk-react";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";

function App() {
  const { isSignedIn } = useAuth();
  console.log(isSignedIn);
  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/login"
        element={isSignedIn ? <Navigate to="/" replace /> : <SignIn />}
      />
      <Route
        path="/signup"
        element={isSignedIn ? <Navigate to="/" replace /> : <SignUp />}
      />

      {/* Protected Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
