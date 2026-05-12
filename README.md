# 🛍️ Fake Store - React Product Filtering App

A modern and responsive Single Page Application (SPA) built with React, TypeScript, and Tailwind CSS.  
The app fetches products from the Fake Store API and provides real-time search, category filtering, and optimized UI rendering.

## ✨ Features

- ⚡ Fetch products from Fake Store API
- 🔎 Real-time search with debounce optimization
- 🗂️ Category filtering (dynamic categories)
- 📦 Reusable components architecture
- 🎨 Responsive UI (Mobile / Tablet / Desktop)
- ⏳ Skeleton loading state
- ❌ Error handling with retry option
- 📭 Empty state handling
- 🚀 Performance optimization using `useMemo`
- 🧠 Clean architecture with custom hooks

---

## 🧰 Tech Stack

- React.js
- TypeScript
- Tailwind CSS
- Axios
- React Select
- Fake Store API

---

## 📁 Project Structure

```
src/
├── components/
│   ├── products/
│   │   ├── CategorySelect.tsx      # Dropdown filter for categories
│   │   ├── ProductCard.tsx         # Individual product display card
│   │   ├── ProductCardSkeleton.tsx # Loading skeleton for products
│   │   └── SearchInput.tsx         # Search input with real-time filtering
│   └── ui/
│       ├── EmptyState.tsx          # Display when no products found
│       └── ErrorState.tsx          # Error handling UI component
├── hooks/
│   └── useProducts.ts              # Custom hook for fetching products
├── layouts/
│   └── Navbar.tsx                  # Navigation header component
├── pages/
│   └── Home.tsx                    # Main home page component
├── services/
│   └── api.ts                      # Axios API instance configuration
├── types/
│   └── product.types.ts            # TypeScript type definitions
├── App.tsx                         # Main App component
├── main.tsx                        # React entry point
└── index.css                       # Global styles
```

---

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd internPro1
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173` (or the URL shown in your terminal)

---

## 🚀 Getting Started

### Running the App

**Development Mode:**

```bash
npm run dev
```

This starts the Vite development server with hot module replacement (HMR).

**Build for Production:**

```bash
npm run build
```

This compiles TypeScript and bundles the app for production.

**Preview Production Build:**

```bash
npm run preview
```

This serves the production build locally for testing.

**Lint Code:**

```bash
npm run lint
```

This checks the code for ESLint violations.

---

## 💡 Usage

### Main Features

1. **Browse Products**: The app automatically fetches and displays products from the Fake Store API on load.

2. **Search Products**: Use the search input to filter products by name in real-time. The search uses debouncing to optimize performance.

3. **Filter by Category**: Select a category from the dropdown menu to filter products by type (Electronics, Jewelery, Men's Clothing, Women's Clothing).

4. **Responsive Design**: The app is fully responsive and works seamlessly on mobile, tablet, and desktop devices.

## ⚡ Performance Optimizations

1. **Debouncing**: Search input uses debouncing to prevent excessive API calls
2. **useMemo**: Used to optimize filtered product calculations
3. **Skeleton Loading**: Shows placeholders while fetching data
4. **Lazy Rendering**: Components render only when necessary
5. **Code Splitting**: Vite automatically chunks code for better loading

## 👨‍💻 Author

**Ahmed Elabrass**  
Meta Internship Task 1
