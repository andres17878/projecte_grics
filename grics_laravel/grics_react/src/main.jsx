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

import Projecte from './Components/ProyecteEspecific/ProyecteEspecific';
import Login from './Components/Login/Login';
import Dashboard from './Components/Login/Dashboard';
import Linies from './Components/NovaLinia/LiniaInvestigacio';
import PublicacionsForm from './Components/PublicacionsForm/PublicacionsForm';

import Form_M from './Components/FormMembres/FormMembres';


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
  {
    path: '/projecte/:id',
    element: <Projecte />,
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/dashboard',
    element: <Dashboard/>,
  },
  {
    path: '/dashboard/linies/add',
    element: <Linies/>,
  },
  {
    path: '/dashboard/publicacions/add',
    element: <PublicacionsForm/>
  },
  {
    path:'/Publicacions/:id',
    element: <PublicacionsForm/>
  },
  









  {
    path: '/dashboard/Membres/form_Membres',
    element: <Form_M/>,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
    
