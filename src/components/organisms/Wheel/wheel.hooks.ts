import { TransformToXY, TransformAlongCircle } from "utils";
import type { ProductFeature } from "types";

type UseStylesParams = {
    items: ProductFeature[],
    currentIndex: number
}

export const useStyles = ({items, currentIndex}:UseStylesParams) => {
    const itemCount = items.length;
    const radius = 105;
    
    const itemStyles:{
        [key:string]: any
    } = {};
    items.forEach((item, index) => {
        const rotation = Math.round(360 / itemCount * (index + currentIndex));
        itemStyles[item.id] = TransformToXY(rotation, radius);
    })

    return {
        itemStyles
    }
}

// export const useStyles = ({items, currentIndex}:UseStylesParams) => {
//     const itemCount = items.length;
//     const itemStyles:{
//         [key:string]: any
//     } = {};
//     items.forEach((item, index) => {
//         const rotation = Math.round(360 / itemCount * (index + currentIndex));
//         itemStyles[item.id] = TransformAlongCircle({rotation, radius: 105});
//     })

//     return {
//         itemStyles
//     }
// }