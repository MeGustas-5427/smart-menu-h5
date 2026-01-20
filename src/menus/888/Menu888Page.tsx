import { useLayoutEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import './menu888.css'
import { coverContent, dishPages } from './data/menu888-content'
import { imageMap, pageSize } from './data/menu888'

const IMG_BASE = import.meta.env.VITE_IMG_BASE ?? 'https://start-menu-h5.oss-cn-wuhan-lr.aliyuncs.com'
const MENU_IMAGE_BASE = IMG_BASE
  ? `${IMG_BASE.replace(/\/$/, '')}/menu-888`
  : ''

const toWebpName = (name: string) =>
  name.replace(/\.(png|jpe?g)$/i, '.webp')

const buildImageSources = (name: string) => {
  if (!MENU_IMAGE_BASE) {
    return { src: '', fallbackSrc: '' }
  }

  const webpName = toWebpName(name)
  if (webpName !== name) {
    return {
      src: `${MENU_IMAGE_BASE}/${encodeURIComponent(webpName)}`,
      fallbackSrc: `${MENU_IMAGE_BASE}/${encodeURIComponent(name)}`,
    }
  }

  return {
    src: `${MENU_IMAGE_BASE}/${encodeURIComponent(name)}`,
    fallbackSrc: '',
  }
}

const getPageImages = (pageNumber: number) => {
  const page = imageMap.find((item) => item.page === pageNumber)
  if (!page) {
    return []
  }

  return [...page.images]
    .map((image) => ({
      ...image,
      ...buildImageSources(image.name),
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
  image?: { src: string; fallbackSrc: string; ratio: number }
}

const DishCard = ({ name, desc, image }: DishCardProps) => {
  const isWide = (image?.ratio ?? 0) > 1.3
  const [currentSrc, setCurrentSrc] = useState(image?.src ?? '')
  const [isMissing, setIsMissing] = useState(!image?.src)
  const fallbackSrc = image?.fallbackSrc ?? ''
  const hasImage = Boolean(currentSrc) && !isMissing

  const handleImageError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc)
      return
    }

    setIsMissing(true)
  }

  return (
    <div className={`dish-card ${isWide ? 'dish-card--wide' : ''}`}>
      <div
        className={`dish-image ${hasImage ? '' : 'dish-image--empty'}`}
        aria-hidden={!hasImage}
      >
        {hasImage ? (
          <img
            src={currentSrc}
            alt={name}
            loading="lazy"
            decoding="async"
            onError={handleImageError}
          />
        ) : null}
      </div>
      <div className="dish-name">{name}</div>
      <div className="dish-desc">{desc}</div>
    </div>
  )
}

const PageFrame = () => (
  <div className="page-frame" aria-hidden="true">
    <div className="watermark">和 筵</div>
    {[0, 1, 2, 3].map((index) => {
      const positions = [
        'corner--tl',
        'corner--tr',
        'corner--br',
        'corner--bl',
      ]
      return (
        <div
          key={index}
          className={`corner ${positions[index]}`}
        >
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer Box */}
            <rect
              x="2"
              y="2"
              width="96"
              height="96"
              stroke="var(--border-gold)"
              strokeWidth="4"
            />
            {/* Inner Box */}
            <rect
              x="16"
              y="16"
              width="68"
              height="68"
              stroke="var(--border-gold)"
              strokeWidth="3"
            />
            {/* Corner Details (Triangular/Bevel connections) */}
            <path
              d="M16 16 L40 40 L40 16"
              stroke="var(--border-gold)"
              strokeWidth="2"
            />
            <path
              d="M84 16 L60 40 L60 16"
              stroke="var(--border-gold)"
              strokeWidth="2"
            />
            <path
              d="M84 84 L60 60 L60 84"
              stroke="var(--border-gold)"
              strokeWidth="2"
            />
            <path
              d="M16 84 L40 60 L40 84"
              stroke="var(--border-gold)"
              strokeWidth="2"
            />
            {/* Center Diamond */}
            <rect
              x="45"
              y="45"
              width="10"
              height="10"
              transform="rotate(45 50 50)"
              fill="var(--border-gold)"
            />
          </svg>
        </div>
      )
    })}
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

const Menu888Page = () => {
  const menuRef = useRef<HTMLDivElement>(null)
  usePageScale(menuRef)

  return (
    <div className="menu888" ref={menuRef}>
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

export default Menu888Page
