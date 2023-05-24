import { render, screen } from "@testing-library/react";
import List from "./List";

it('renders correct elements', () => {
    const listItems = ['item1','item2','item3']
    const { container } = render(<List items={listItems} />)
    
    const ulTag = container.getElementsByTagName('ul');
    expect(ulTag).toHaveLength(1);

    const liTags = container.getElementsByTagName('li');
    expect(liTags).toHaveLength(3);
})

it('renders correct text', () => {
    const listItems = ['item1','item2','item3']
    const { container } = render(<List items={listItems} />)
    const item1 = screen.getByText(/item1/i);
    const item2 = screen.getByText(/item2/i);
    const item3 = screen.getByText(/item3/i);
    
    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
    expect(item3).toBeInTheDocument();
})