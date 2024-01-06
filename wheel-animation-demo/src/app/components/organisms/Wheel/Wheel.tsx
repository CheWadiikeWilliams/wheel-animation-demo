import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { AppContext } from '@/App';
import { WheelItem } from "../../molecules";
import styles from "./wheel.module.scss";
import { useFeatureStyles } from "./wheel.hooks";
import type { GenericObject } from "@/types";
import { IFeature } from "../../../../store/product/featureStore";

const Wheel = (props:GenericObject) => {
    const appStore = useContext(AppContext);
    const { product:{features}, selectedIndex } = appStore;
    const { featureStyles, featuresOnLeftHemisphere } = useFeatureStyles({features, selectedIndex});

    return (
        <div {...props} className={styles.wheel}>
            {features.map((feature:IFeature, index:number) => {
                const isSelected = selectedIndex === undefined || selectedIndex === index
                const isOnLeftHemisphere = featuresOnLeftHemisphere.includes(feature.id)
                return (
                    <WheelItem
                        key={feature.id}
                        {...feature}
                        style={featureStyles[feature.id]}
                        isSelected={isSelected}
                        isOnLeftHemisphere={isOnLeftHemisphere}
                        onClick={() => appStore.setSelectedFeature(feature.id)}
                    />
                )
            })}
        </div>
    )
}

export default observer(Wheel);