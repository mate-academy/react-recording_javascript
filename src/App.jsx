import { useState } from 'react';

import goodsFromServer from './goods.json';
import { GoodList } from './components/GoodList/GoodList';
import { SORT_FIELD } from './constants';
import { Header } from './components/Header/Header';

function getPreparedGoods(goods, { sortField, query }) {
  let prepearedGoods = [...goods];

  if (query) {
    prepearedGoods = prepearedGoods.filter(good => good.name.includes(query));
  }

  if (sortField) {
    prepearedGoods.sort((good1, good2) => {
      switch (sortField) {
        case SORT_FIELD.ID:
          return good1[sortField] - good2[sortField];

        case SORT_FIELD.NAME:
        case SORT_FIELD.COLOR:
          return good1[sortField].localeCompare(good2[sortField]);

        default:
          return 0;
      }
    });
  }

  return prepearedGoods;
}

export const App = () => {
  const [sortField, setSortField] = useState('');
  const [query, setQuery] = useState('');

  const visibleGoods = getPreparedGoods(
    goodsFromServer,
    { sortField, query },
  );

  return (
    <div className="App">
      <Header
        sortField={sortField}
        sortBy={(field) => {
          setSortField(field);
        }}
        query={query}
        filterBy={(newQuery) => {
          setQuery(newQuery);
        }}
      />
      <GoodList goods={visibleGoods} />
    </div>
  );
};
