import { List, IconTextCard } from "components/molecules";
import styles from "./article.module.scss";

type ArticleOptions = {
    icon: string,
    iconAlt: string,
    description: string,
    benefits: string[],
    [key:string]: any
}

const Article = ({
    icon,
    iconAlt,
    description,
    benefits,
    ...props
}:ArticleOptions) => {
    return (
        <article {...props} className={styles.articleContainer}>
            <IconTextCard
                className={styles.articleTextCard}
                icon={icon}
                iconAlt={iconAlt}
                text={description}
            />
            <List items={benefits} className={styles.articleBenefits} />
        </article>
    )
}

export default Article;