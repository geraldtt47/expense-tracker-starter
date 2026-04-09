---
name: new-component
description: Creates a new React component file following project conventions. Use this when asked to create a new component, page, or UI element.
---

## Creating a New React Component

When asked to create a new component, follow these steps:

### Step 1 — Ask where to create the file

Before writing any code, ask the user which directory to place the component in. For example:

> "Where should I create this component? (e.g. `src/components/`, `src/pages/`, `src/`)"

Wait for the user's response before proceeding.

### Step 2 — Derive names from the component name

Given a component name (e.g. "NavbarHeader"):

- **File name**: lowercase with hyphens — `navbar-header.tsx` (or `.jsx` if the project uses JavaScript)
- **Function name**: PascalCase — `NavbarHeader`

### Step 3 — Write the component file

Use this structure:

```tsx
export default function ComponentName() {
  return (
    <div>
      {/* content */}
    </div>
  )
}
```

#### Props and types

- **Never** use a separate `interface` or `type` alias for props.
- **Always** use inline types directly in the function signature.
- Destructure props in the parameter list.

```tsx
// ✅ Correct — inline types
export default function NavbarHeader({ name, age }: { name: string; age: number }) {
  return <div>{name}</div>
}

// ❌ Wrong — separate interface
interface Props { name: string; age: number }
export default function NavbarHeader({ name, age }: Props) { ... }
```

#### Optional props

```tsx
export default function UserCard({ name, bio }: { name: string; bio?: string }) {
  return <div>{name}</div>
}
```

#### No props

```tsx
export default function Logo() {
  return <img src="/logo.svg" alt="Logo" />
}
```

### Step 4 — File naming rules

| Component name  | File name            |
| --------------- | -------------------- |
| `NavbarHeader`  | `navbar-header.tsx`  |
| `UserCard`      | `user-card.tsx`      |
| `LoginForm`     | `login-form.tsx`     |
| `HomePage`      | `home-page.tsx`      |

- Always lowercase
- Words separated by hyphens
- Use `.tsx` for TypeScript projects, `.jsx` for JavaScript projects

### Step 5 — Complete example

For a `ProductCard` component with `title` (string) and `price` (number) props, saved to `src/components/`:

**File**: `src/components/product-card.tsx`

```tsx
export default function ProductCard({ title, price }: { title: string; price: number }) {
  return (
    <div className="product-card">
      <h2>{title}</h2>
      <p>${price.toFixed(2)}</p>
    </div>
  )
}
```
