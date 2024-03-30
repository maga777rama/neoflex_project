import { FC } from "react";
import AppleBYZS852I from "../assets/AppleBYZS852I.png";
import AppleEarPodsBox from "../assets/AppleEarPodsBox.png";
import AppleEarPods from "../assets/AppleEarPods.png";
import AppleAirPods from "../assets/AppleAirPods.png";
import GERLAXGH_04 from "../assets/GERLAXGH-04.png";
import BOROFONEBO4 from "../assets/BOROFONEBO4.png";
import { ProductBlock } from "../components/ProductBlock.tsx";
import styles from "../scss/styles.module.scss";

export interface ProductProps {
    id: number;
    imgSrc: string;
    title: string;
    price: number;
    priceWithoutDiscount?: number;
    rate: number;
    wireless: boolean;
}

const headphones: ProductProps[] = [
    {
        id: 1,
        imgSrc: AppleBYZS852I,
        title: "AppleAirPods",
        price: 2927,
        priceWithoutDiscount: 3527,
        rate: 4.7,
        wireless: false,
    },
    {
        id: 2,
        imgSrc: AppleEarPods,
        title: "Apple EarPods",
        price: 2927,
        rate: 4.7,
        wireless: false,
    },
    {
        id: 3,
        imgSrc: AppleEarPodsBox,
        title: "Apple EarPods",
        price: 2927,
        rate: 4.7,
        wireless: false,
    },
    {
        id: 4,
        imgSrc: AppleBYZS852I,
        title: "AppleAirPods",
        price: 2927,
        rate: 4.7,
        wireless: false,
    },
    {
        id: 5,
        imgSrc: AppleEarPods,
        title: "Apple EarPods",
        price: 2927,
        rate: 4.7,
        wireless: false,
    },
    {
        id: 6,
        imgSrc: AppleEarPodsBox,
        title: "Apple EarPods",
        price: 2927,
        rate: 4.7,
        wireless: false,
    },
    {
        id: 7,
        imgSrc: AppleAirPods,
        title: "Apple AirPods.png",
        price: 2927,
        rate: 4.7,
        wireless: true,
    },
    {
        id: 8,
        imgSrc: GERLAXGH_04,
        title: "GERLAXGH-04",
        price: 2927,
        rate: 4.7,
        wireless: true,
    },
    {
        id: 9,
        imgSrc: BOROFONEBO4,
        title: "BOROFONE BO4",
        price: 2927,
        rate: 4.7,
        wireless: true,
    },
];

export const Home: FC = () => {
    return (
        <div className={styles.home}>
            <h4 className={styles.home__headphones}>Наушники </h4>
            <ul className={styles.home__productList}>
                {headphones
                    .filter((obj: ProductProps) => {
                        return !obj.wireless;
                    })
                    .map((obj) => (
                        <li key={obj.id}>
                            <ProductBlock {...obj} />
                        </li>
                    ))}
            </ul>
            <h4 className={styles.home__headphones}>Беспроводные наушники </h4>
            <ul className={styles.home__productList}>
                {headphones
                    .filter((obj: ProductProps) => {
                        return obj.wireless;
                    })
                    .map((obj) => (
                        <li key={obj.id}>
                            <ProductBlock {...obj} />
                        </li>
                    ))}
            </ul>
        </div>
    );
};
