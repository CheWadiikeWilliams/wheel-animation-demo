type ImageOptions = {
    src: string,
    [key:string]: any
}

const Image = ({
    src,
    ...props
}:ImageOptions) => <img src={src} {...props} />;

export default Image;