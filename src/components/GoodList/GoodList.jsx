import { GoodCard } from '../GoodCard';
import './GoodList.scss';

export const GoodList = ({ goods }) => (
  <div className="GoodList">
    {goods.map(good => (
      <GoodCard
        key={good.id}
        good={good}
      />
    ))}
  </div>
);
