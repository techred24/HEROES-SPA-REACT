import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from '../auth'

import { HeroesRoutes } from '../heroes'
import { Navbar } from '../ui'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  return (
    <>
    <Routes>
        {/* <Route path='login/*' element={
        <PublicRoute>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/*' element={<p>Not Found</p>} />
          </Routes>
        </PublicRoute>}/> */}

        <Route path='login' element={<PublicRoute><LoginPage/></PublicRoute>}/>
        <Route path='*' element={<PrivateRoute><HeroesRoutes/></PrivateRoute>}/>
        {/* <Route path='login' element={<LoginPage/>}/> */}
        {/* <Route path='*' element={<HeroesRoutes/>}/> */}
    </Routes>
    </>
  )
}
