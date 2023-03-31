import { Link, useNavigate, useRouteError } from "react-router-dom"


const NotFound = () => {
  const error = useRouteError()
  const navigate = useNavigate()
  
  return (
    <div className="error">
      <h1>Uh oh! Seems you have encountered an error</h1>
      <p>{error.message || error.statusText}</p>

      <div className="flex-md">
        <button className="btn btn--dark" onClick={() => navigate(-1)}>Go Back</button>
        <Link to='/' className="btn btn--dark">Go Home</Link>
      </div>

    </div>
  )
}

export default NotFound