import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import Membres from './Components/Membres/Membres';
import Recerca from './Components/Recerca/Recerca';
import Publicacions from './Components/Publicacions/Publicacions';
import Actualitat from './Components/Actualitat/Actualitat';
import Contacte from './Components/Contacte/Contacte';

import NoticiaGran from './Components/NoticiaGran/NoticiaGran';



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/membres',
    element: <Membres />,
  },
  {
    path: '/recerca',
    element: <Recerca />,
  },
  {
    path: '/publicacions',
    element: <Publicacions />,
  },
  {
    path: '/actualitat',
    element: <Actualitat />,
  },
  {
    path: '/contacte',
    element: <Contacte />,
  },






  {
    path: '/noticia/:id',
    element: <NoticiaGran  />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
    
