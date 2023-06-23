import { useState } from 'react';
import cn from 'classnames';

import goodsFromServer from './goods.json';
import { GoodList } from './components/GoodList/GoodList';

const SORT_FIELD_ID = 'id';

export const App = () => {
  const [visibleGoods, setVisibleGoods] = useState(goodsFromServer);
  const [sortField, setSortField] = useState('');

  const reset = () => {
    setVisibleGoods(goodsFromServer);
    setSortField('');
  };

  const sortById = () => {
    setVisibleGoods(
      [...visibleGoods].sort((good1, good2) => good1.id - good2.id)
    );
    setSortField(SORT_FIELD_ID);
  };

  return (
    <div className="App">
      <header>
        <button onClick={reset}>
          Reset
        </button>

        <div>
          Sort by:
          <button 
            onClick={sortById} 
            className={cn({ active: sortField === SORT_FIELD_ID })}
          >
            id
          </button>

          <button>name</button>
          <button>color</button>
        </div>
      </header>

      <GoodList goods={visibleGoods} />
    </div>
  );
};
