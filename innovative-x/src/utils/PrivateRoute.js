import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoutes = () => {
  let user = localStorage.getItem('username')
return (
    user ? <Outlet/> : <Navigate to='/login'/>
  )
}
export default PrivateRoutes