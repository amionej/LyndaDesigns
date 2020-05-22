import React from 'react';
import { useDispatch } from 'react-redux';
import { getType } from 'typesafe-actions';
import { setQuantity as setQuantityInReducer } from '../../components/cart/cart.actions';
import './quantity-buttons.css';

interface Props {
  quantity: number;
  setQuantity?: React.Dispatch<React.SetStateAction<number>>;
  index?: number;
  className?: string;
}

const QuantityButtons: React.FC<Props> = ({
  quantity,
  setQuantity,
  index,
  className = '',
}: Props) => {
  const dispatch = useDispatch();

  return (
    <div className={className}>
      <button
        className="quantity-button"
        type="button"
        onClick={() => {
          if (quantity > 1) {
            if (setQuantity) {
              setQuantity(quantity - 1);
            } else {
              dispatch({
                type: getType(setQuantityInReducer),
                payload: {
                  index,
                  number: quantity - 1,
                },
              });
            }
          }
        }}
        disabled={quantity === 1}
      >
        -
      </button>
      <span className="quantity">{quantity}</span>
      <button
        className="quantity-button"
        type="button"
        onClick={() => {
          if (setQuantity) {
            setQuantity(quantity + 1);
          } else {
            dispatch({
              type: getType(setQuantityInReducer),
              payload: {
                index,
                number: quantity + 1,
              },
            });
          }
        }}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButtons;
