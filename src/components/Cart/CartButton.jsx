import { useDispatch, useSelector } from 'react-redux';

import styles from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
    const dispatch = useDispatch();
    const cartQuantity = useSelector((state) => state.cart.totalQuantity);

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    };

    return (
        <button className={styles.button} onClick={toggleCartHandler}>
            <span>My Cart</span>
            <span className={styles.badge}>{cartQuantity}</span>
        </button>
    );
};

export default CartButton;
