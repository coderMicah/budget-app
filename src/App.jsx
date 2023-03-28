import {createBrowserRouter, RouterProvider} from 'react-router-dom'

//components
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';


//loader
import { dashboardLoader } from './pages/Dashboard'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
    loader: dashboardLoader,
    errorElement: <NotFound/>
  },
 
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
