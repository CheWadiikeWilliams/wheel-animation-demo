"use client";
import React, { useState, useEffect } from "react";
import { WheelItem } from "components/molecules";
import styles from "./wheel.module.scss";
import type { ProductFeature } from "types";
import { useStyles } from "./wheel.hooks";

type WheelOptions = {
    items: ProductFeature[],
    [key:string]: any
}

const Wheel = ({
    items,
    ...props
}:WheelOptions ) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { itemStyles } = useStyles({items, currentIndex});

    // const handleItemClick = () => {
    //     setCurrentIndex(2);
    // }

    // ##### add bg colour change to styles hook ######
    const getClassName = (index:number) => {
        return currentIndex === index ? `selected` : `selected`
    }

    return (
        <div {...props} className={styles.wheel}>
            {items.map((item, index) => {
                return (
                    <WheelItem
                        key={item.id}
                        {...item}
                        style={itemStyles[item.id]}
                        className={getClassName(index)}
                        onClick={() => setCurrentIndex(index)}
                    />
                )
            })}
        </div>
    )
}

export default Wheel;