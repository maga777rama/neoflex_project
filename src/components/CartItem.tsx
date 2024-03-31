import { FC } from "react";
import plusIcon from "../assets/svg/plusIcon.svg";
import minusIcon from "../assets/svg/minusIcon.svg";
import deleteIcon from "../assets/svg/deleteIcon.svg";
import styles from "../scss/styles.module.scss";
import { addItem, minusItem, removeItem } from "../redux/cartClice.ts";
import { useDispatch } from "react-redux";

export type CartItemProps1 = {
    id: number;
    imgSrc: string;
    title: string;
    price: number;
    count: number;
};

export const CartItem: FC<CartItemProps1> = ({
    id,
    imgSrc,
    title,
    price,
    count,
}) => {
    const dispatch = useDispatch();

    const addProduct: () => void = () => {
        const item: CartItemProps1 = {
            id,
            imgSrc,
            title,
            price,
            count: 0,
        };

        dispatch(addItem(item));
    };

    return (
        <div className={styles.cartItem}>
            <img
                className={styles.cartItem__image}
                src={imgSrc}
                alt="product"
            />
            <div className={styles.cartItem__info}>
                <h2>{title}</h2>
                <div className={styles.cartItem__info__price}>
                    {price + " ₽"}
                </div>
            </div>
            <div className={styles.cartItem__actions}>
                <img
                    className={styles.button_minus}
                    src={minusIcon}
                    alt="minusIcon"
                    onClick={() => {
                        dispatch(minusItem(id));
                    }}
                />
                <div className={styles.quantity}>{count}</div>
                <img
                    className={styles.button_plus}
                    src={plusIcon}
                    alt="plusIcon"
                    onClick={() => {
                        addProduct();
                    }}
                />
            </div>
            <div
                className={styles.cartItem__deleteIcon}
                onClick={() => {
                    dispatch(removeItem(id));
                }}
            >
                <img src={deleteIcon} alt="deleteIcon" />
            </div>
            <div className={styles.cartItem__totalPrice}>{count * price} Р</div>
        </div>
    );
};
