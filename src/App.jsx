import { Product } from './components/Product/Product';

export const App = () => (
  <div className="App">
    <h1>My Shop</h1>

    <Product
      title="Peperoni Pizza"
      price={100}
    />
    <Product
      title="Chocklate Cake"
      price={30}
    />
    <Product
      title="Water"
    />
  </div>
);
