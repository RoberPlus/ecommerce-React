import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import router from './router/Router';

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
