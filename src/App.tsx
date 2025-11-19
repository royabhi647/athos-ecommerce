import Header from './components/Header';
import FilterSortBar from './components/FilterSortBar';
import ProductGrid from './components/ProductGrid';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <FilterSortBar />
        <ProductGrid />
      </div>
    </Provider>
  );
}

export default App;