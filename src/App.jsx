import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (

    <BrowserRouter>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">

        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route path="/products" element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />

          <Route path="/cart" element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />

          <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;