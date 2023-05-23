import { TransformToXY, TransformAlongCircle } from "utils";
import type { IFeature } from "store/product/featureStore";
import type { GenericObject } from "types";

type UseStylesParams = {
    features: IFeature[],
    selectedIndex: number | undefined
}

export const useStyles = ({features, selectedIndex}:UseStylesParams) => {
    const totalFeatures = features.length;
    const radius = 105;
    
    const featureStyles:GenericObject = {};
    console.log('selectedIndex: ',selectedIndex)
    features.forEach((feature, index) => {
        const rotation = Math.round(360 / totalFeatures * (index + (selectedIndex ?? 0)));
        featureStyles[feature.id] = TransformToXY(rotation, radius);
        console.log(`   ${feature.id}: ${rotation}`)
    })

    return {
        featureStyles
    }
}

// export const useStyles = ({features, selectedIndex}:UseStylesParams) => {
//     const itemCount = features.length;
//     const itemStyles:{
//         [key:string]: any
//     } = {};
//     features.forEach((item, index) => {
//         const rotation = Math.round(360 / itemCount * (index + selectedIndex));
//         itemStyles[item.id] = TransformAlongCircle({rotation, radius: 105});
//     })

//     return {
//         itemStyles
//     }
// }