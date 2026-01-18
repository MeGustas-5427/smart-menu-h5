## Context
项目需要承载多个独立电子菜单页面，每个菜单都有自己的布局与资源。当前
结构以单一 App 为中心，不利于扩展与维护。

## Goals / Non-Goals
- Goals:
  - 支持每个菜单独立路由（如 `/menu/1988`）
  - 菜单按目录自包含（组件/样式/资源/数据）
  - 新增菜单时只需新增目录 + 注册即可
- Non-Goals:
  - 不引入服务端渲染或后端 API
  - 不引入登录/权限或点餐交互

## Decisions
- Decision: 引入 React Router 作为路由层，配置 `/menu/:slug` 路由。
  - Why: 现有 Vite SPA 结构下，React Router 是最简可维护方案。
- Decision: 菜单目录规范为 `src/menus/<slug>/`，由注册表统一输出菜单元信息
  与组件引用。
  - Why: 便于菜单资源隔离与后续扩展。
- Decision: 菜单样式在菜单根容器内做作用域前缀，避免不同菜单样式相互影响。
  - Why: 不引入 CSS Modules 的情况下保持简单隔离。

## Risks / Trade-offs
- 增加路由依赖（react-router-dom）
  - Mitigation: 仅做基础路由，避免复杂嵌套路由。
- 需要静态部署支持 SPA 路由回退
  - Mitigation: 在部署配置中添加 history fallback。

## Migration Plan
1. 新增路由与菜单注册表
2. 迁移现有 1988 菜单到 `src/menus/1988`
3. 替换 App 为路由入口
4. 验证构建与移动端展示

## Open Questions
- 无
