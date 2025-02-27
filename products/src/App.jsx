import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import { lazy, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Home = lazy(() => import('./components/Home/Home'));
const Category = lazy(() => import('./components/Category/Category'));
const ProductDetails = lazy(() =>
  import('./components/ProductDetails/ProductDetails')
);
const Cart = lazy(() => import('./components/Cart/Cart'));
const Register = lazy(() => import('./components/Register/Register'));
const Login = lazy(() => import('./components/Login/Login'));

const queryClient = new QueryClient();

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
              <Suspense>
                <Home />
              </Suspense>
            </ProtectedRoutes>
          ),
        },
        {
          path: 'category',
          element: (
            <ProtectedRoutes>
              <Suspense>
                <Category />
              </Suspense>
            </ProtectedRoutes>
          ),
        },
        {
          path: 'product/:id',
          element: (
            <ProtectedRoutes>
              <Suspense>
                <ProductDetails />
              </Suspense>
            </ProtectedRoutes>
          ),
        },
        {
          path: 'cart',
          element: (
            <ProtectedRoutes>
              <Suspense>
                <Cart />
              </Suspense>
            </ProtectedRoutes>
          ),
        },
        {
          path: 'register',
          element: (
            <Suspense>
              <Register />
            </Suspense>
          ),
        },
        {
          path: 'login',
          element: (
            <Suspense>
              <Login />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes}></RouterProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
