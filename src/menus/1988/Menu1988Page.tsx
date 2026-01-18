import { useLayoutEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import './menu1988.css'
import { coverContent, dishPages } from './data/menu1988-content'
import { imageMap, pageSize } from './data/menu1988'

const imageModules = import.meta.glob('./assets/**/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const imageSrcByName = Object.fromEntries(
  Object.entries(imageModules).map(([path, src]) => [
    path.split('/').pop() ?? path,
    src,
  ]),
)

const getPageImages = (pageNumber: number) => {
  const page = imageMap.find((item) => item.page === pageNumber)
  if (!page) {
    return []
  }

  return [...page.images]
    .map((image) => ({
      ...image,
      src: imageSrcByName[image.name] ?? '',
      ratio: image.w / image.h,
    }))
    .sort((a, b) => (a.y === b.y ? a.x - b.x : a.y - b.y))
}

const usePageScale = (root: React.RefObject<HTMLDivElement | null>) => {
  useLayoutEffect(() => {
    const target = root.current
    if (!target) {
      return
    }

    target.style.setProperty('--page-width', `${pageSize.width}px`)
    target.style.setProperty('--page-height', `${pageSize.height}px`)

    const updateScale = () => {
      const scale = Math.min(
        document.documentElement.clientWidth / pageSize.width,
        1,
      )
      target.style.setProperty('--page-scale', scale.toFixed(4))
    }

    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [root])
}

type DishCardProps = {
  name: string
  desc: string
  image?: { src: string; ratio: number }
}

const DishCard = ({ name, desc, image }: DishCardProps) => {
  const isWide = (image?.ratio ?? 0) > 1.3
  const hasImage = Boolean(image?.src)

  return (
    <div className={`dish-card ${isWide ? 'dish-card--wide' : ''}`}>
      <div
        className={`dish-image ${hasImage ? '' : 'dish-image--empty'}`}
        aria-hidden={!hasImage}
      >
        {hasImage ? <img src={image?.src} alt={name} /> : null}
      </div>
      <div className="dish-name">{name}</div>
      <div className="dish-desc">{desc}</div>
    </div>
  )
}

const PageFrame = () => (
  <div className="page-frame" aria-hidden="true">
    <div className="watermark">和 筵</div>
    <div className="corner corner--tl">
      <span className="corner-inner" />
      <span className="corner-line corner-line--h" />
      <span className="corner-line corner-line--v" />
      <span className="corner-diamond" />
    </div>
    <div className="corner corner--tr">
      <span className="corner-inner" />
      <span className="corner-line corner-line--h" />
      <span className="corner-line corner-line--v" />
      <span className="corner-diamond" />
    </div>
    <div className="corner corner--br">
      <span className="corner-inner" />
      <span className="corner-line corner-line--h" />
      <span className="corner-line corner-line--v" />
      <span className="corner-diamond" />
    </div>
    <div className="corner corner--bl">
      <span className="corner-inner" />
      <span className="corner-line corner-line--h" />
      <span className="corner-line corner-line--v" />
      <span className="corner-diamond" />
    </div>
  </div>
)

const PageShell = ({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) => (
  <div className="page-shell">
    <section className={`page ${className}`.trim()}>
      <PageFrame />
      <div className="page-content">{children}</div>
    </section>
  </div>
)

const CoverPage = () => (
  <PageShell className="page--cover">
    <div className="cover-stack">
      <div className="cover-title-box">
        <div className="cover-brand">{coverContent.brand}</div>
        <div className="cover-title">{coverContent.title}</div>
        <div className="cover-subtitle">{coverContent.subtitle}</div>
      </div>
      <div className="cover-menu-label">{coverContent.menuLabel}</div>
      <div className="cover-menu-box">
        {coverContent.sections.map((section) => (
          <div className="cover-section" key={section.title}>
            <div className="cover-section-title">{section.title}</div>
            {section.lines.map((line) => (
              <div className="cover-section-line" key={line}>
                {line}
              </div>
            ))}
          </div>
        ))}
        <div className="cover-price">
          <span>{coverContent.price}</span>
          <span className="cover-price-note">{coverContent.priceNote}</span>
        </div>
      </div>
    </div>
    <div className="cover-footer">{coverContent.footer}</div>
  </PageShell>
)

const DishPage = ({
  page,
  title,
  layout,
  dishes,
  footer,
}: {
  page: number
  title: string
  layout: string
  dishes: { name: string; desc: string }[]
  footer?: string
}) => {
  const images = getPageImages(page)
  const items = dishes.map((dish, index) => ({
    ...dish,
    image: images[index],
  }))

  return (
    <PageShell className={`page--dish page--${layout}`}>
      <div className="page-title">{title}</div>
      <div className={`dish-grid dish-grid--${layout}`}>
        {items.map((dish) => (
          <DishCard
            key={dish.name}
            name={dish.name}
            desc={dish.desc}
            image={dish.image}
          />
        ))}
      </div>
      {footer ? <div className="page-footer">{footer}</div> : null}
    </PageShell>
  )
}

const Menu1988Page = () => {
  const menuRef = useRef<HTMLDivElement>(null)
  usePageScale(menuRef)

  return (
    <div className="menu1988" ref={menuRef}>
      <main className="menu-root">
        <CoverPage />
        {dishPages.map((page) => (
          <DishPage
            key={page.page}
            page={page.page}
            title={page.title}
            layout={page.layout}
            dishes={page.dishes}
            footer={page.footer}
          />
        ))}
      </main>
    </div>
  )
}

export default Menu1988Page
