import { TransformToXY } from "@/utils";
import type { IFeature } from "@/store/product/featureStore";
import type { GenericObject } from "@/types";

type UseStylesParams = {
    features: IFeature[],
    selectedIndex: number | undefined
}

export const useFeatureStyles = ({features, selectedIndex}:UseStylesParams) => {
    const totalFeatures = features.length
    const angleOffset = Math.round(360 / totalFeatures)
    const radius = 105
    const featuresOnLeftHemisphere:string[] = [] 
    const featureStyles:GenericObject = {};

    features.forEach((feature, index) => {
        const rotation = (angleOffset * (index - (selectedIndex ?? 0))) % 360;
        featureStyles[feature.id] = TransformToXY(rotation - 90, radius);
        if (rotation > 180 || (rotation < 0 && rotation > -180)) {
            featuresOnLeftHemisphere.push(feature.id);
        }
    })

    return {
        featureStyles,
        featuresOnLeftHemisphere
    }
}