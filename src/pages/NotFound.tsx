import { Link } from 'react-router-dom'
import './not-found.css'

const NotFoundPage = () => (
  <div className="not-found">
    <div className="not-found__frame">
      <p className="not-found__eyebrow">404</p>
      <h1 className="not-found__title">未找到该菜单</h1>
      <p className="not-found__desc">请返回菜单列表选择可用菜单。</p>
      <Link className="not-found__link" to="/">
        返回菜单列表
      </Link>
    </div>
  </div>
)

export default NotFoundPage
