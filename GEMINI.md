# Finance Tracker

A React-based finance tracker application built with Vite for managing personal income and expenses. This project serves as a practical starter for learning React development and refactoring.

## Project Overview

*   **Framework**: React 19
*   **Build Tool**: Vite
*   **Styling**: Vanilla CSS
*   **Main Features**:
    *   Add income and expense transactions.
    *   Filter transactions by type (Income/Expense) and category.
    *   View a summary of total income, total expenses, and current balance.

## Directory Structure

*   `src/App.jsx`: Main component managing the application state (`transactions`).
*   `src/Summary.jsx`: Displays totals for income, expenses, and balance.
*   `src/TransactionForm.jsx`: Form for adding new transactions.
*   `src/TransactionList.jsx`: Displays the table of transactions with filtering capabilities.
*   `src/categories.js`: Contains the list of allowed transaction categories.
*   `src/App.css` & `src/index.css`: Application styles.

## Data Model

Transactions are stored as objects with the following structure:

```typescript
interface Transaction {
  id: number;
  description: string;
  amount: number; // Stored as a number
  type: "income" | "expense";
  category: string;
  date: string; // YYYY-MM-DD
}
```

## Building and Running

*   **Development**: `npm run dev` (Starts server at `http://localhost:5173`)
*   **Build**: `npm run build`
*   **Lint**: `npm run lint`
*   **Preview Build**: `npm run preview`

## Development Conventions

*   **Component Structure**: Functional components using React Hooks (`useState`).
*   **State Management**: State is lifted to `App.jsx` and passed down via props.
*   **File Extensions**: Use `.jsx` for React components and `.js` for utility/config files.
*   **Styling**: Follow existing CSS class naming conventions (e.g., `.income-amount`, `.expense-amount`) in `App.css`.
*   **Categories**: When adding or filtering, use categories defined in `src/categories.js`.

## Existing Instructions

See `.github/copilot-instructions.md` for additional historical context and legacy notes about the project's initial "messy" state.
