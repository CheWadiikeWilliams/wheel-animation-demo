import { ListItem } from "../../atoms";

type ListOptions = {
    items: string[],
    [key:string]: any
}

const List = ({
    items,
    ...props
}:ListOptions) => {
    return (
        <ul {...props}>
            { items.map((item, index) => (
                <ListItem key={`list-item-${index}`}>{item}</ListItem>)
            )}
        </ul>
    )
}

export default List;