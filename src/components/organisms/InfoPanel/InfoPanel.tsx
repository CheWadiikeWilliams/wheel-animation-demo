import { Article } from "components/molecules";
import styles from "./infoPanel.module.scss";
import type { ProductFeature } from "types";

type InfoPanelOptions = {
    items: ProductFeature[],
    [key:string]: any
}

const InfoPanel = ({
    items,
    ...props
}:InfoPanelOptions ) => {
    return (
        <div className={styles.infoPanelContainer}>
            {items.map((item, index) => {
                return (
                    <Article {...item.article} key={item.id} id={item.id} />
                )
            })}
        </div>
    )
}

export default InfoPanel;