import {
    Span,
    Image
} from "components/atoms";
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
    ...props
}:WheelItemOptions) => {
    return (
        <div {...props} className={styles.wheelItem} style={style}>
            <div className={styles.wheelItemIcon}>
                <Image
                    className={styles.icon}
                    src={icon}
                    alt={iconAlt}
                    width={30}
                    height={30}
                />
            </div>
            <Span className={styles.wheelItemTitle}>{title}</Span>
        </div>
    )
}

export default WheelItem;