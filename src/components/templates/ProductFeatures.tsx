import { Wheel } from "components/organisms";
import { InfoPanel } from "components/organisms";
import styles from "./productFeatures.module.scss";
import { ProductFeature } from "types";

type ProductFeaturesOptions = {
    items: ProductFeature[],
    [key:string]: any
}

const ProductFeatures = ({
    items,
    ...props
}:ProductFeaturesOptions) => {
    return (
        <div className={styles.productFeaturesContainer}>
            <section className={styles.wheelContainer}>
                <Wheel items={items} />
            </section>
            <section className={styles.infoPanelContainer}>
                <InfoPanel items={items} />
            </section>
        </div>
    )
}

export default ProductFeatures;