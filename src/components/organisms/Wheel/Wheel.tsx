import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { AppContext } from 'App';
import { WheelItem } from "components/molecules";
import styles from "./wheel.module.scss";
import { useStyles } from "./wheel.hooks";
import type { GenericObject } from "types";

const Wheel = (props:GenericObject) => {
    const appStore = useContext(AppContext);
    const { product:{features}, selectedIndex } = appStore;
    const { featureStyles } = useStyles({features, selectedIndex});

    // ##### add bg colour change to styles hook ######
    const getClassName = (index:number) => {
        return selectedIndex === index ? `selected` : `selected`
    }

    return (
        <div {...props} className={styles.wheel}>
            {features.map((feature, index) => {
                return (
                    <WheelItem
                        key={feature.id}
                        {...feature}
                        style={featureStyles[feature.id]}
                        className={getClassName(index)}
                        onClick={() => appStore.setSelectedFeature(feature.id)}
                    />
                )
            })}
        </div>
    )
}

export default observer(Wheel);