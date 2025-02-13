import Navbar from './components/Navbar/Navbar';
import Category from './components/Category/Category';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';

function App() {
  const routes = createBrowserRouter([
    {
      path: '',
      element: <Layout />,
      children: [
        {
          path: 'home',
          element: (
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          ),
        },
        {
          path: 'category',
          element: (
            <ProtectedRoutes>
              <Category />
            </ProtectedRoutes>
          ),
        },
        {
          path: 'product/:id',
          element: (
            <ProtectedRoutes>
              <ProductDetails />
            </ProtectedRoutes>
          ),
        },
        { path: 'register', element: <Register /> },
        { path: 'login', element: <Login /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
