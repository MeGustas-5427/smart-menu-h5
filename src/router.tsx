import { createBrowserRouter } from 'react-router-dom'
import MenuHostPage from './pages/MenuHost'
import MenuListPage from './pages/MenuList'
import NotFoundPage from './pages/NotFound'

export const router = createBrowserRouter([
  { path: '/', element: <MenuListPage /> },
  { path: '/menu/:slug', element: <MenuHostPage /> },
  { path: '*', element: <NotFoundPage /> },
])
