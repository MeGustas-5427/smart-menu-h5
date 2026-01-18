import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getMenuBySlug } from '../menus/registry'
import NotFoundPage from './NotFound'

const MenuHostPage = () => {
  const { slug } = useParams()
  const menu = useMemo(() => (slug ? getMenuBySlug(slug) : null), [slug])

  if (!menu) {
    return <NotFoundPage />
  }

  const MenuComponent = menu.component
  return <MenuComponent />
}

export default MenuHostPage
