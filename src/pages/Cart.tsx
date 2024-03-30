import { FC } from "react";
import { CartItem } from "../components/CartItem.tsx";
import styles from "../scss/styles.module.scss";
import { useSelector } from "react-redux";
import { CartSliceState } from "../redux/cartClice.ts";
import { Rootstate } from "../redux/store.ts";

export const Cart: FC = () => {
    const { items, totalPrice }: CartSliceState = useSelector(
        (state: Rootstate) => state.cart,
    );
    return (
        <div className={styles.cart}>
            <ul className={styles.cart__items}>
                {items.map((obj) => (
                    <li key={obj.id}>
                        <CartItem {...obj} />
                    </li>
                ))}
            </ul>
            <div className={styles.cart__purchaseBlock}>
                <div className={styles.cart__purchaseBlock__cost}>
                    <div>ИТОГО</div>
                    <div>₽{" " + totalPrice}</div>
                </div>
                <button>Перейти к оформлению</button>
            </div>
        </div>
    );
};
