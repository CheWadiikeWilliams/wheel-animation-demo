import { List, IconTextCard } from "components/molecules";
import styles from "./article.module.scss";

type ArticleOptions = {
    icon: string,
    iconAlt: string,
    description: string,
    benefits: string[],
    isSelected: boolean,
    [key:string]: any
}

const Article = ({
    icon,
    iconAlt,
    description,
    benefits,
    isSelected,
    ...props
}:ArticleOptions) => {
    const textCardStyle = isSelected ? styles.articleTextCard : styles.articleTextCardBlurred;
    const benefitsStyle = isSelected ? styles.articleBenefits : styles.articleBenefitsHidden;
    return (
        <article {...props} className={styles.article}>
            <div className={textCardStyle}>
                <IconTextCard
                    icon={icon}
                    iconAlt={iconAlt}
                    text={description}
                />
            </div>
            <List items={benefits} className={benefitsStyle} />
        </article>
    )
}

export default Article;