import { render, screen } from "@testing-library/react";
import { Paragraph, Span } from "./Text";

it('renders Paragraph element correctly', () => {
    const { container } = render(<Paragraph className='someClassname'>Paragraph Text</Paragraph>)
    const pTag = container.getElementsByTagName('p')
    expect(pTag).toHaveLength(1)
    expect(pTag[0].getAttribute('class')).toEqual('someClassname')

    const pTagText = screen.getByText(/Paragraph Text/i)
    expect(pTagText).toBeInTheDocument()
})

it('renders Span element correctly', () => {
    const { container } = render(<Span className='someClassname'>Span Text</Span>)
    const spanTag = container.getElementsByTagName('span')
    expect(spanTag).toHaveLength(1)
    expect(spanTag[0].getAttribute('class')).toEqual('someClassname')

    const spanTagText = screen.getByText(/Span Text/i)
    expect(spanTagText).toBeInTheDocument()
})