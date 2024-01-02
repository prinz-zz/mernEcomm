
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailsPage from './pages/ProductDetailsPage';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home/>),
  },
  {
    path: "/login",
    element: (<LoginPage/>),
  },
  {
    path: "/signup",
    element: (<SignupPage/>),
  },
  {
    path: "/cart",
    element: (<CartPage/>),
  },
  {
    path: "/checkout",
    element: (<Checkout/>),
  },
  {
    path: "/product-details/:id",
    element: (<ProductDetailsPage/>),
  },
]);



function App() {
  

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
