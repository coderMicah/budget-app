//rrd imports
import { Outlet, useLoaderData } from "react-router-dom";

//components
import Nav from "../components/Nav";
import { fetchData } from "../utilis/helpers";


export const mainLoader = () => {
    const userName = fetchData("userName")
    return{userName}
}


const Main = () => {
    
const {userName} = useLoaderData()
  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
