import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home/>
        }, {
          path: 'about',
          element: <About/>
        }, {
          path: 'services',
          element: <Services/>
        }, {
          path: 'products',
          element: <Products/>
        }, {
          path: 'contact',
          element: <Contact/>
        }
      ]
    },
  ]);
  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
