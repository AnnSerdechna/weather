import { FC, lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from '../components/layout';

const Home = lazy(() => import('./home'));

const NotFound: FC = () => <h1>Not Found</h1>;

const router = createBrowserRouter([
   {
      path: '/',
      element: <Layout />,
      children: [
         {
            index: true,
            element: (
               <Suspense fallback={<div>Loading...</div>}>
                  <Home />
               </Suspense>
            ),
         },
      ],
   },
   {
      path: '*',
      element: <NotFound />,
   },
]);

const Router: FC = () => {
   return <RouterProvider router={router} />;
};

export default Router;