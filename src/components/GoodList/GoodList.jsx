import { Fragment } from 'react';
import { GoodCard } from '../GoodCard';
import './GoodList.scss';

export const GoodList = ({ goods, moveUp, moveDown }) => (
  <div className="GoodList">
    {goods.map(good => (
      <Fragment key={good.id}>
        <button onClick={() => moveUp(good)}>up</button>
        <button onClick={() => moveDown(good)}>down</button>
        <button onClick={() => {
          moveDown(good);
          moveDown(good);
          moveDown(good);
        }}>
          down 3
        </button>
        <GoodCard good={good} />
      </Fragment>
    ))}
  </div>
);
