import type { ComponentType } from 'react'
import Menu1988Page from './1988/Menu1988Page'

export type MenuEntry = {
  slug: string
  name: string
  description: string
  component: ComponentType
}

export const menuRegistry: MenuEntry[] = [
  {
    slug: '1988',
    name: '除夕家宴 1988 元套餐',
    description: '南湖 • 和筵 年夜饭菜单，14-16 人。',
    component: Menu1988Page,
  },
]

export const getMenuBySlug = (slug: string) =>
  menuRegistry.find((menu) => menu.slug === slug) ?? null
