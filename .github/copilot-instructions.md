# Copilot Instructions

## Project Overview

This is a React + Vite single-page finance tracker app. It is intentionally a starter/course project with a known bug, poor UI, and messy code — the goal is to improve it incrementally.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:5173
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

There is no test suite configured.

## Architecture

The entire app lives in `src/App.jsx` — a single React component holding all state, filtering logic, computed totals, and JSX. There are no sub-components, custom hooks, or separate utility files yet. Refactoring into components is a natural next step.

State shape for a transaction:
```js
{ id: number, description: string, amount: string, type: "income"|"expense", category: string, date: "YYYY-MM-DD" }
```

## Known Bug

`amount` is stored as a **string** (from the form input) but used directly in `reduce` arithmetic. This causes string concatenation instead of numeric addition for the summary totals. Fix by parsing: `parseFloat(t.amount)`.

## Key Conventions

- **File extensions**: `.jsx` for React components, `.js` for config files.
- **ESLint**: `no-unused-vars` is set to error but ignores variables matching `^[A-Z_]` (uppercase or underscore-prefixed names are safe to declare unused).
- **Categories**: The fixed list is `["food", "housing", "utilities", "transport", "entertainment", "salary", "other"]` — used both for adding and filtering transactions.
- **CSS**: Component styles live in `App.css`; global/reset styles in `index.css`. CSS class names mirror component semantics (e.g., `.income-amount`, `.expense-amount`, `.summary-card`).
