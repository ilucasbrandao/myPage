import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Sobre from "./pages/About";
import Projetos from "./pages/Projects";
import Contato from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/sobre", element: <Sobre /> },
      { path: "/projetos", element: <Projetos /> },
      { path: "/contato", element: <Contato /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
