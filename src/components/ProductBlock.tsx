import { FC } from "react";
// import styles from "../scss/ProductBlock.module.scss";
import { ProductProps } from "../pages/Home.tsx";
import styles from "../scss/styles.module.scss";
import { useDispatch } from "react-redux";
import { addItem, CartItemProps } from "../redux/cartClice.ts";

export const ProductBlock: FC<ProductProps> = ({
    id,
    imgSrc,
    title,
    price,
    priceWithoutDiscount,
    rate,
    wireless,
}) => {
    const dispatch = useDispatch();

    const addProduct: () => void = () => {
        const item: CartItemProps = {
            id,
            imgSrc,
            title,
            price,
            priceWithoutDiscount,
            rate,
            wireless,
            count: 0,
        };
        dispatch(addItem(item));
    };

    return (
        <>
            <div className={styles.product}>
                <img
                    className={styles.product__pic}
                    src={imgSrc}
                    alt="Product"
                />
                <div className={styles.product__info}>
                    <div>{title}</div>
                    <div>
                        <div className={styles.product__info__price}>
                            {price} ₽
                        </div>
                        <div className={styles.product__info__priceWthDiscount}>
                            {priceWithoutDiscount} {priceWithoutDiscount && "₽"}
                        </div>
                    </div>
                    <div className={styles.product__info__rate}>
                        <svg
                            width="25"
                            height="23"
                            viewBox="0 0 25 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.6268 18.0143L5.41618 22.3656L7.37647 14.2449L0.960754 8.81491L9.38215 8.14829L12.6268 0.439671L15.8715 8.14829L24.2941 8.81491L17.8771 14.2449L19.8374 22.3656L12.6268 18.0143Z"
                                fill="#FFCE7F"
                            />
                        </svg>
                        {rate}
                    </div>

                    <div
                        className={styles.product__info__buy}
                        onClick={addProduct}
                    >
                        Купить
                    </div>
                </div>
            </div>
        </>
    );
};
