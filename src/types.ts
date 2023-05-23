export type Article = {
    icon: string,
    iconAlt: string,
    description: string,
    benefits: string[]
}

export type ProductFeature = {
    id: string,
    title: string,
    icon: string,
    iconAlt: string,
    article: Article,
}