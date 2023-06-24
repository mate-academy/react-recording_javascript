import cn from 'classnames';

import { SORT_FIELD } from "../../constants";

export const Header = ({ 
  sortField, 
  sortBy,
  query,
  filterBy,
}) => (
  <header>
    <button onClick={() => {
      sortBy('');
      filterBy('');
    }}>
      Reset
    </button>

    <input
      value={query}
      type="text"
      onChange={(event) => {
        filterBy(event.currentTarget.value);
      }}
    />

    <div>
      Sort by:
      <button
        onClick={() => sortBy(SORT_FIELD.ID)}
        className={cn({ active: sortField === SORT_FIELD.ID })}
      >
        id
      </button>

      <button
        onClick={() => sortBy(SORT_FIELD.NAME)}
        className={cn({ active: sortField === SORT_FIELD.NAME })}
      >
        name
      </button>

      <button
        onClick={() => sortBy(SORT_FIELD.COLOR)}
        className={cn({ active: sortField === SORT_FIELD.COLOR })}
      >
        color
      </button>
    </div>
  </header>
);
