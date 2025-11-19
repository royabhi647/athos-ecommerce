# Product Store

E-commerce product listing with cart, filtering, and search.

### [live preview](https://athos-ecommerce.vercel.app/)

### Installation
1. Clone the repository: `git clone https://github.com/royabhi647/athos-ecommerce.git`
2. Navigate to the project directory: `cd athos-ecommerce`
3. Install dependencies: `npm install`

### Usage
1. Start the development server: `npm run dev`
2. Open your browser and navigate to `http://localhost:5173`


## Features

- Product grid with real-time filtering
- Sort by price (high/low)
- Category filter
- Search products
- Add/remove from cart
- Responsive design

## Tech Stack

- React + TypeScript
- Redux Toolkit
- Tailwind CSS
- Fake Store API

## Project Structure

```
src/
├── components/
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   ├── FilterSortBar.tsx
│   ├── ProductCard.tsx
│   └── ProductGrid.tsx
├── store/
│   ├── cartSlice.ts
│   └── store.ts
└── types/
    └── product.ts
```

## Usage

**Filter**: Select category from dropdown  
**Sort**: Click Normal/High to Low/Low to High  
**Search**: Type in search bar  
**Cart**: Add/remove items, total updates automatically

## API

Using https://fakestoreapi.com for product data

## Notes

- Search syncs between header and filter bar
- Cart state managed with Redux
- Product titles truncated at 60 chars
- Grid responsive: 1-4 columns based on screen size