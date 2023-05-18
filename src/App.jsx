import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import RedirectPage from "./pages/RedirectPage";
import ProtectedRoutes from "./helper/ProtectedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoutes child={<IndexPage />} />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/url/:code",
    element: <RedirectPage />,
  },
]);

function App() {
  return (
    <main className="App">
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
