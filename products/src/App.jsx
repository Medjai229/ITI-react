import Navbar from './components/Navbar/Navbar';
import Category from './components/Category/Category';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails';

function App() {
  const routes = createBrowserRouter([
    {
      path: '',
      element: <Layout />,
      children: [
        { path: 'home', element: <Home /> },
        { path: 'category', element: <Category /> },
        { path: 'register', element: <Register /> },
        { path: 'login', element: <Login /> },
        { path: 'product/:id', element: <ProductDetails /> },
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
