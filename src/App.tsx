import { useState, useEffect } from 'react';
import Header from './components/Header';
import FilterSortBar from './components/FilterSortBar';
import ProductGrid from './components/ProductGrid';
import Sidebar from './components/Sidebar';
import { Provider } from 'react-redux';
import { store } from './store/store';

function AppContent() {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'normal' | 'high-to-low' | 'low-to-high'>('normal');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [headerSearchTerm, setHeaderSearchTerm] = useState<string>('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then((data: string[]) => {
        setCategories(data);
      })
      .catch(err => {
        console.error('Failed to load categories:', err);
      });
  }, []);

  const handleHeaderSearchChange = (term: string) => {
    setHeaderSearchTerm(term);
    setSearchTerm(term);
  };

  const handleFilterSearchChange = (term: string) => {
    setSearchTerm(term);
    setHeaderSearchTerm(term);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        headerSearchTerm={headerSearchTerm}
        onHeaderSearchChange={handleHeaderSearchChange}
      />
      <Sidebar />
      <div className="md:ml-24">
        <FilterSortBar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
          searchTerm={searchTerm}
          onSearchChange={handleFilterSearchChange}
        />
        <ProductGrid
          selectedCategory={selectedCategory}
          sortOrder={sortOrder}
          searchTerm={searchTerm}
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;