import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/pages/Home';
import Error404 from '../components/pages/Error404';
import Products from '../components/pages/Products';
import PublicPages from '../templates/PublicPages';

// Creamos las rutas de la app
// path: ruta
// element: que renderiza
// children, subrutas
// index: ruta por defecto, se carga al hacer /
// Entonces tenemos, en / es el padre, donde se carga el template que tiene, el navlink y el outlet asi renderiza los children.

const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicPages />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
      },
    ],
  },
]);

export default router;
