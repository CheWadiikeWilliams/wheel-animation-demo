import { Span, Image } from "../../atoms";
import styles from "./wheelItem.module.scss";

type WheelItemOptions = {
    id: string,
    title: string,
    icon: string,
    iconAlt: string,
    style: {
        [key:string]: any
    },
    [key:string]: any
}

const WheelItem = ({
    id,
    title,
    icon,
    iconAlt,
    style,
    isSelected,
    isOnLeftHemisphere,
    ...props
}:WheelItemOptions) => {
    const wheelItemIconStyle = isSelected ? styles.wheelItemIconSelected : styles.wheelItemIcon
    const wheelItemTitleStyle = isOnLeftHemisphere ? styles.wheelItemTitleLeft : styles.wheelItemTitle
    return (
        <div {...props} className={styles.wheelItem} style={style}>
            <div className={wheelItemIconStyle}>
                <Image
                    className={styles.icon}
                    src={icon}
                    alt={iconAlt}
                    width={30}
                    height={30}
                />
            </div>
            <Span className={wheelItemTitleStyle}>{title}</Span>
        </div>
    )
}

export default WheelItem;