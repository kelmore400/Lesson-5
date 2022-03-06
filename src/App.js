import './App.css';
import ControledComponent from './components/ControledComponent';
import FilteredProductTable from './components/FilteredProductTable';
import PropTypesExample from './components/PropTypesExample';

const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPodTouch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone X' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ControledComponent /> */}
        {/* <PropTypesExample name="Alex" age={25} /> */}
        <FilteredProductTable products={PRODUCTS} />
      </header>
    </div>
  );
}

export default App;
