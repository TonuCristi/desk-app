import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProtectedRoute from "./components/common/ProtectedRoute";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import GlobalProvider from "./contexts/GlobalContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "/products", element: <ProductsPage /> },
      { path: "/about", element: <div>About</div> },
      { path: "/contact", element: <div>Contact</div> },
      { path: "/profile", element: <div>Profile</div> },
      { path: "/favourites", element: <div>Favourites</div> },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/forgotPassword",
        element: <ForgotPasswordPage />,
      },
      {
        path: "/resetPassword",
        element: <ResetPasswordPage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  );
}
