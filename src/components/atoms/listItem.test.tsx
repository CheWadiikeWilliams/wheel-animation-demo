import { render, screen } from "@testing-library/react";
import ListItem from "./ListItem";

it('renders li tag with correct attributes', () => {
    const { container } = render(<ListItem value={3}>Item Text</ListItem>)
    const listTag = container.getElementsByTagName('li')
    expect(listTag).toHaveLength(1)
    expect(listTag[0].getAttribute('value')).toEqual('3')
})

it('renders li child text correctly', () => {
    render(<ListItem>Item Text</ListItem>)
    const listTag = screen.getByText(/Item Text/i)
    expect(listTag).toBeInTheDocument()
})