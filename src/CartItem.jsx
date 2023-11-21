import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { useGlobalContext } from './context';
const CartItem = ({ id, img, title, price, amount }) => {


const { remove, increase, decrease } = useGlobalContext();
  return (
    <article className='cart-item'>
      <img src={img} alt={title} className='obj-fit' />
      <div>
        <h5>{title}</h5>
        <span className='item-price'>₹ {price}</span>
        {/* remove button */}
        <button className='remove-btn' onClick={() => remove(id)}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn' onClick={() => increase(id)}>
          <FaPlusCircle className='amount-icon' />
        </button>
        {/* amount */}
        <span className='amount'>{amount}</span>
        {/* decrease amount */}
        <button className='amount-btn' onClick={() => decrease(id)}>
          <FaMinusCircle className='amount-icon' />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
