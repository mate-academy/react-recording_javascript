import goodsFromServer from './goods.json';
import { GoodList } from './components/GoodList/GoodList';

export const App = () => {
  return (
    <div className="App">
      <header>
        <button>Reverse</button>

        <div>
          Sort by:
          <button>name</button>
          <button>color</button>
        </div>
      </header>

      <GoodList goods={goodsFromServer} />
    </div>
  );
};
