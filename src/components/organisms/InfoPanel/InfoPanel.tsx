import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Article } from "components/molecules";
import { AppContext } from 'App';
import styles from "./infoPanel.module.scss";
import type { GenericObject } from "types";

const InfoPanel = ({
    ...props
}:GenericObject ) => {
    const appStore = useContext(AppContext);
    const { product:{features}, selectedFeature } = appStore;
    return (
        <div className={styles.infoPanelContainer}>
            {features.map((feature) => {
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