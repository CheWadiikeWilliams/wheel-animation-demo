type TextOptions = {
    children: React.ReactNode,
    [key:string]: any
}

export const Paragraph = ({
  children,
  ...props
}:TextOptions) => <p {...props}>{children}</p>;

export const Span = ({
  children,
  ...props
}:TextOptions) => <span {...props}>{children}</span>;