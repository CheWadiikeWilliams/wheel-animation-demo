import { render, screen } from "@testing-library/react";
import Image from "./Image";

it('renders img tag with correct attributes', () => {
    const imageProps = {
        src: 'https://image.url',
        className: 'imgClassname',
        alt: 'Image alt text'
    }
    const { container } = render(<Image {...imageProps} />)
    const imgTag = container.getElementsByTagName('img')
    expect(imgTag).toHaveLength(1)
    expect(imgTag[0].getAttribute('class')).toBe('imgClassname')
    expect(imgTag[0].getAttribute('src')).toBe('https://image.url')
    expect(imgTag[0].getAttribute('alt')).toBe('Image alt text')
})