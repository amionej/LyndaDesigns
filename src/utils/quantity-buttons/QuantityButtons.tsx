import React from 'react';
import './quantity-buttons.css';

interface Props {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const QuantityButtons: React.FC<Props> = ({ quantity, setQuantity }: Props) => {
  return (
    <div>
      <button
        className="quantity-button"
        type="button"
        onClick={() => {
          if (quantity > 1) {
            setQuantity(quantity - 1);
          }
        }}
        disabled={quantity === 1}
      >
        -
      </button>
      <span className="quantity">{quantity}</span>
      <button className="quantity-button" type="button" onClick={() => setQuantity(quantity + 1)}>
        +
      </button>
    </div>
  );
};

export default QuantityButtons;
