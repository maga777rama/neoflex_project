import { FC } from "react";
import heartLogo from "../assets/svg/heartLogo.svg";
import cartLogo from "../assets/svg/cartLogo.svg";
import { useNavigate } from "react-router-dom";
import styles from "../scss/styles.module.scss";
import { useSelector } from "react-redux";
import { Rootstate } from "../redux/store.ts";
import { CartItemProps } from "../redux/cartClice.ts";

export const Header: FC = () => {
    const navigate = useNavigate();
    const items: CartItemProps[] = useSelector(
        (state: Rootstate) => state.cart.items,
    );

    const totalCount: number = items.reduce(
        (sum: number, item: CartItemProps) => sum + item.count,
        0,
    );

    return (
        <div className={styles.header}>
            <div
                className={styles.header__title}
                onClick={() => {
                    navigate("/");
                }}
            >
                QPICK
            </div>
            <div className={styles.header__icons}>
                <div className={styles.header__icons__heartLogo}>
                    <img src={heartLogo} alt="heartLogo" />
                    <div
                        className={styles.header__icons__heartLogo__totalCount}
                    >
                        {2}
                    </div>
                </div>

                <div
                    className={styles.header__icons__cartLogo}
                    onClick={() => navigate("/cart")}
                >
                    <img src={cartLogo} alt="cartLogo" />
                    <div className={styles.header__icons__cartLogo__totalCount}>
                        {totalCount}
                    </div>
                </div>
            </div>
        </div>
    );
};
