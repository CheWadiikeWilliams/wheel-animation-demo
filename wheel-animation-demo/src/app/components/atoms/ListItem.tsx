type ListItemOptions = {
    children: React.ReactNode,
    [key:string]: any
}
  
const ListItem = ({
  children,
  ...props
}:ListItemOptions) => <li {...props}>{children}</li>;

export default ListItem;