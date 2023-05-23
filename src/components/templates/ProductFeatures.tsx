import { Wheel } from "components/organisms";
import { InfoPanel } from "components/organisms";
import styles from "./productFeatures.module.scss";

const ProductFeatures = () => {
    return (
        <div className={styles.productFeaturesContainer}>
            <section className={styles.wheelContainer}>
                <Wheel />
            </section>
            <section className={styles.infoPanelContainer}>
                <InfoPanel />
            </section>
        </div>
    )
}

export default ProductFeatures;