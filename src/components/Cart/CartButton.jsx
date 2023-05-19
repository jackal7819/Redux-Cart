import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import styles from './CartButton.module.css';

const CartButton = (props) => {
    const dispatch = useDispatch();
    const cartQuantity = useSelector((state) => state.cart.totalQuantity);

    const toogleCartHandler = () => {
        dispatch(uiActions.toogle());
    };

    return (
        <button className={styles.button} onClick={toogleCartHandler}>
            <span>My Cart</span>
            <span className={styles.badge}>{cartQuantity}</span>
        </button>
    );
};

export default CartButton;
