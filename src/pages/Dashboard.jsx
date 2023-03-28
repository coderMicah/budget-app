//rrd imports
import { useLoaderData } from "react-router-dom"

//helpers
import { fetchData } from "../utilis/helpers"

const Dashboard = () => {
  const {userName} = useLoaderData() 
  return (
    <div>Username is :{userName}</div>
  )
}

export default Dashboard

//loader
export const dashboardLoader =() => {
   const userName = fetchData('userName')
   return {userName}
}