import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './defaultLayout.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
    },
]);

export default router;