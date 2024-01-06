import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Article } from "../../molecules";
import type { GenericObject } from "@/types";
import { AppContext } from "@/App";
import styles from "./infoPanel.module.scss";
import { IFeature } from "../../../../store/product/featureStore";

const InfoPanel = ({
    ...props
}:GenericObject ) => {
    const appStore = useContext(AppContext);
    const { product:{features}, selectedFeature } = appStore;
    return (
        <div className={styles.infoPanelContainer}>
            {features.map((feature:IFeature) => {
                return (
                    <Article
                        {...props}
                        {...feature.article}
                        key={feature.id}
                        id={feature.id}
                        isSelected = {selectedFeature === feature.id}
                    />
                )
            })}
        </div>
    )
}

export default observer(InfoPanel);