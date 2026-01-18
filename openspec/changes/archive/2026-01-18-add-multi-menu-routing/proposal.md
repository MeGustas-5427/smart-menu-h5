## Why
项目将包含多个独立电子菜单页面，需要可扩展的路由与目录结构来支持按菜单
组织代码、资源和自定义布局。

## What Changes
- 新增菜单路由能力：每个菜单对应独立 URL（如 `/menu/1988`）。
- 引入菜单注册表与目录规范，支持每个菜单自定义组件与资源。
- 迁移现有 1988 菜单到新的多菜单结构中。

## Impact
- Affected specs: menu-routing (new), menu-registry (new)
- Affected code: src/App.tsx, 新增 router 与 menus 目录结构
