import { Link } from 'react-router-dom'
import { menuRegistry } from '../menus/registry'
import './menu-list.css'

const MenuListPage = () => (
  <div className="menu-list">
    <header className="menu-list__hero">
      <span className="menu-list__badge">MENU ARCHIVE</span>
      <h1 className="menu-list__title">电子菜单总览</h1>
      <p className="menu-list__subtitle">
        请选择一个菜单进入查看。每个菜单都有独立的版式与呈现方式。
      </p>
    </header>

    <section className="menu-list__grid">
      {menuRegistry.map((menu, index) => (
        <Link
          key={menu.slug}
          to={`/menu/${menu.slug}`}
          className="menu-card"
          style={{ ['--delay' as string]: `${index * 0.08}s` }}
        >
          <div className="menu-card__frame" aria-hidden="true" />
          <div className="menu-card__content">
            <span className="menu-card__slug">/menu/{menu.slug}</span>
            <h2 className="menu-card__title">{menu.name}</h2>
            <p className="menu-card__desc">{menu.description}</p>
            <span className="menu-card__cta">查看菜单</span>
          </div>
        </Link>
      ))}
    </section>

    <footer className="menu-list__footer">
      南湖 • 和筵｜静态电子菜单展示
    </footer>
  </div>
)

export default MenuListPage
