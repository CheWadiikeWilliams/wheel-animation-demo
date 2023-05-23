import {
    Paragraph,
    Image
} from "components/atoms";
import styles from "./iconTextCard.module.scss";

type IconTextCardOptions = {
    icon: string,
    iconAlt: string,
    text: string,
    [key:string]: any
}

const IconTextCard = ({
    icon,
    iconAlt,
    text,
    ...props
}:IconTextCardOptions) => {
    return (
        <div className={styles.iconTextCard} {...props}>
            <Image
                src={icon}
                alt={iconAlt}
                width={30}
                height={30}
            />
            <Paragraph>{text}</Paragraph>
        </div>
    )
}

export default IconTextCard;