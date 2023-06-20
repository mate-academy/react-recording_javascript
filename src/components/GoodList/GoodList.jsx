import { GoodCard } from '../GoodCard';
import './GoodList.scss';

export const GoodList = ({ goods }) => (
  <div className="GoodList">
    {goods.map(good => (
      <GoodCard good={good} key={good.id} />
    ))}
  </div>
);
