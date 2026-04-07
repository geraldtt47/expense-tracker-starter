# Agent Instructions for Expense Tracker

## Project Overview

React + Vite single-page finance tracker app using React 19, Vite 7, and ESLint 9. This is a starter project where improvements are intentionally welcome.

**Alternate Reference:** See `.github/copilot-instructions.md` for additional context.

## Commands

```bash
npm run dev        # Start dev server at http://localhost:5173
npm run build     # Production build (outputs to dist/)
npm run preview   # Preview production build
npm run lint      # Run ESLint on all files
npm run lint -- src/App.jsx src/TransactionForm.jsx  # Lint specific files
```

**No test suite is configured.**

## Architecture

- **Entry point:** `src/main.jsx`
- **Main app:** `src/App.jsx` - holds state and orchestrates components
- **Components:** `src/Summary.jsx`, `src/TransactionForm.jsx`, `src/TransactionList.jsx`
- **Utilities:** `src/categories.js` - fixed category list
- **Styles:** `src/App.css` (component styles), `src/index.css` (global styles)

### Transaction Data Shape

```js
{
  id: number,
  description: string,
  amount: number,       // Must be numeric, never string
  type: "income" | "expense",
  category: string,     // From categories list
  date: "YYYY-MM-DD"
}
```

### Fixed Categories

```js
["food", "housing", "utilities", "transport", "entertainment", "salary", "other"]
```

---

## Code Style Guidelines

### File Naming & Extensions

- `.jsx` for React components
- `.js` for utilities, config, and data files
- **kebab-case** for filenames: `transaction-list.jsx`, NOT `TransactionList.jsx`

### Component Structure

```jsx
import { useState } from 'react'
import categories from './categories.js'
import './ComponentName.css'

function ComponentName({ prop1, prop2 }) {
  const [state, setState] = useState(initialValue)

  const handleAction = (e) => {
    // handler code
  }

  return (
    <div className="component-name">
      {/* JSX */}
    </div>
  )
}

export default ComponentName
```

### Import Order

1. React hooks (`useState`, `useEffect`, etc.)
2. Third-party imports
3. Relative imports (grouped by path depth)
4. CSS/style imports last

### Naming Conventions

| Element      | Convention        | Example                    |
|--------------|-------------------|----------------------------|
| Components   | PascalCase        | `TransactionForm`          |
| Functions    | camelCase         | `handleSubmit`              |
| Variables    | camelCase         | `filteredTransactions`     |
| Constants    | PascalCase/SNAKE  | `TOTAL_INCOME` / `Categories` |
| CSS classes  | kebab-case        | `.income-amount`, `.summary-card` |
| File names   | kebab-case        | `transaction-list.jsx`      |
| Props        | camelCase         | `onAdd`, `filterType`       |

### State Management

- Use `useState` for component-local state
- **Always immutable:** `[...prev, newItem]` — never `.push()`
- Don't store derived values; compute from existing state

### Type Safety (No TypeScript)

- **amount must be `number`**, NOT string
- Parse input with `parseFloat()` before storing
- Prevents string concatenation in `reduce()` operations

### CSS Guidelines

- Semantic class names: `.summary-card`, `.income-amount`, `.expense-amount`
- Component styles in `App.css`, global resets in `index.css`
- CSS classes: **kebab-case** only

### JSX Conventions

- Use `htmlFor`, NOT `for` on label elements
- Conditional classNames: `className={isActive ? "active" : ""}`
- Arrow functions in handlers: `onChange={(e) => setValue(e.target.value)}`
- Map keys: `key={item.id}`, NOT `key={index}`

### ESLint Rules

From `eslint.config.js`:

- `no-unused-vars`: Errors on unused variables
- **Allows** names matching `^[A-Z_]` (uppercase or underscore-prefixed)
- React Hooks rules via `eslint-plugin-react-hooks`
- Vite rules via `eslint-plugin-react-refresh`

**To silence intentional unused variables:**
```js
const _unused = something    // OK - underscore prefix
const UNUSED_CONST = value   // OK - uppercase
```

### Error Handling

- Validate form inputs before submission
- Early returns for invalid states
- User-friendly error messages

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  if (!description || !amount) return;
  // proceed
}
```

---

## Known Issues

- **Critical:** `amount` stored as string causes string concatenation in `reduce()` — always parse with `parseFloat()` when creating transactions
- No persistence — transactions reset on refresh

## Development Notes

- No test framework
- No TypeScript — plain JavaScript only
- No backend — fully client-side