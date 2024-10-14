import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './defaultLayout.jsx';
import Cart from '../components/cart/index.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Cart />,
            },
        ],
    },
]);

export default router;