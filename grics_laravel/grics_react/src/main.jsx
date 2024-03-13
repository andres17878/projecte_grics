import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
    
