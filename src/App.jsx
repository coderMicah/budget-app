import { createBrowserRouter, RouterProvider } from "react-router-dom";

//library imports
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

//layouts
import Main, { mainLoader } from "./Layout/Main";

//components
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

//actions
import { logoutAction } from "./actions/logoutAction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action:dashboardAction,
        errorElement: <NotFound />,
      },
      {
        path: "logout",
        action: logoutAction,
      },
      
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer/>
    </div>
  );
}

export default App;
