import React from 'react'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoutes = ({isLogged}) => {
  return isLogged ? <Outlet /> : <Navigate to='/sign-in' />
}

export default ProtectedRoutes