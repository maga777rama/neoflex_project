import { FC } from "react";
import heartLogo from "../assets/svg/heartLogo.svg";
import cartLogo from "../assets/svg/cartLogo.svg";
import { useNavigate } from "react-router-dom";
import styles from "../scss/styles.module.scss";

export const Header: FC = () => {
    const navigate = useNavigate();

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
                <img src={heartLogo} alt="heartLogo" />
                <img
                    src={cartLogo}
                    alt="cartLogo"
                    onClick={() => navigate("/cart")}
                />
            </div>
        </div>
    );
};
