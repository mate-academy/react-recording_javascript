import './GoodCard.scss';

export const GoodCard = ({ good }) => (
  <div
    className="GoodCard"
    style={{ color: good.color }}
  >
    {good.name}
  </div>
);
