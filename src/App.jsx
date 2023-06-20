import { GoodList } from './components/GoodList';
import goods from './goods.json';

export const App = () => (
  <div className="App">
    <h1>Goods List</h1>

    <GoodList goods={goods.slice(0, 5)} />
  </div>
);
