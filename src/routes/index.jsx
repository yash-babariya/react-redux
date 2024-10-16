import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './defaultLayout.jsx';
import Cart from '../components/cart/index.jsx';
import AddToCart from '../components/cart/addToCart.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Cart />,
            },
            {
                path: '/cart',
                element: <AddToCart />,
            },
        ],
    },
]);

export default router;