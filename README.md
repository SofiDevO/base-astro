# Base-astro

Base astro is a clean template to start a new landing page project, that includes a gradient background and responsive hamburger/dropdown menu 💜🚀

## Features

- 🎨 **Dynamic Header**: Switch between floating and fullscreen header styles
- 📱 **Responsive Design**: Mobile-first approach with hamburger menu
- 🎯 **Multi-level Dropdowns**: Support for nested menu items
- 🚀 **Astro Framework**: Fast, modern static site generation
- 🎨 **Atomic Design**: Well-structured component architecture

## Use this template by running this command:

```bash
npm create astro@latest -- --template SofiDevO/base-astro
```

## Dynamic Header Component

The Header component can switch between two different styles:

### Usage

```astro
---
import Layout from "../layouts/Layout.astro";
---

<!-- Floating header (default) -->
<Layout>
  <!-- content -->
</Layout>

<!-- Fullscreen header -->
<Layout headerType="fullscreen">
  <!-- content -->
</Layout>

<!-- Direct usage -->
<Header headerType="floating" />
<Header headerType="fullscreen" />
```

### Style Differences

| Property | Floating | Fullscreen |
|----------|----------|------------|
| Container Padding | `16px` | `0` |
| Max Width | `1100px` | Full width |
| Border Radius | `18px` | `0` |
| Header Padding | `0.5rem 1rem` | `1rem 2rem` |

## Menu Configuration

Configure your navigation menu in `/src/components/header/nav-menu/menuItems.data.js`:

### Simple Menu Items

```javascript
export const menuItems = [
  { link: "/about", text: "About" },
  { link: "/contact", text: "Contact" },
];
```

### Single-level Dropdown

```javascript
export const menuItems = [
  {
    link: "#",
    text: "Services",
    submenu: [
      { link: "/web-design", text: "Web Design" },
      { link: "/development", text: "Development" },
      { link: "/consulting", text: "Consulting" },
    ],
  },
];
```

### Multi-level Dropdown (Nested)

```javascript
export const menuItems = [
  {
    link: "#",
    text: "Products",
    submenu: [
      {
        link: "#",
        text: "Software",
        submenu: [
          { link: "/software/web", text: "Web Apps" },
          { link: "/software/mobile", text: "Mobile Apps" },
          { link: "/software/desktop", text: "Desktop Apps" },
        ],
      },
      {
        link: "#",
        text: "Hardware",
        submenu: [
          { link: "/hardware/computers", text: "Computers" },
          { link: "/hardware/accessories", text: "Accessories" },
        ],
      },
      { link: "/support", text: "Support" },
    ],
  },
];
```

### Menu Item Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `link` | string | ✅ | URL or anchor for the menu item |
| `text` | string | ✅ | Display text for the menu item |
| `submenu` | array | ❌ | Array of nested menu items |

## Project Structure

```
📦src
 ┣ 📂components
 ┃ ┣ 📂atoms
 ┃ ┃ ┣ �anchorButton
 ┃ ┃ ┣ 📂Button
 ┃ ┃ ┣ �GradientBg
 ┃ ┃ ┣ 📂Logo
 ┃ ┃ ┗ 📂Title
 ┃ ┗ �header
 ┃ ┃ ┣ 📂HamburgerButton
 ┃ ┃ ┗ 📂nav-menu
 ┃ ┃ ┃ ┣ 📜menuItems.data.js
 ┃ ┃ ┃ ┣ �NavMenu.astro
 ┃ ┃ ┃ ┗ 📜MobileNav.astro
 ┣ 📂data
 ┃ ┗ 📜siteData.js
 ┣ 📂layouts
 ┃ ┣ 📜Layout.astro
 ┃ ┗ 📜LayoutNoHeader.astro
 ┣ 📂pages
 ┃ ┣ 📜index.astro
 ┃ ┗ 📜404.astro
 ┗ 📂styles
 ┃ ┗ 📜global.css
```

## Getting Started

1. **Clone or create from template**
2. **Install dependencies**: `npm install`
3. **Start development server**: `npm run dev`
4. **Configure menu**: Edit `/src/components/header/nav-menu/menuItems.data.js`
5. **Customize header**: Use `headerType="floating"` or `headerType="fullscreen"`

## Examples

- `/` - Floating header demo
- `/fullscreen-demo` - Fullscreen header demo

## TypeScript Support

All components include proper TypeScript interfaces for better development experience and type safety.
