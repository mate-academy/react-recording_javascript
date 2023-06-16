import cn from 'classnames';
import './Product.scss';

export const Product = ({
  title,
  price = 0,
}) => (
  // <div className={`Product ${price === 0 ? 'Product--free' : ''}`}>
  <div className={cn('Product', {
    'Product--free': price === 0,
  })}>
    <h2 
      className="Product__title" 
      style={{
        color: price === 0 ? 'green' : 'red',
        backgroundColor: 'yellow',
      }}
    >
      {title}
    </h2>

    <div className="Product__price">
      {`Price: ${price} `}

      {price === 0 && (
        <span>*</span>
      )}
    </div>
  </div>
);
