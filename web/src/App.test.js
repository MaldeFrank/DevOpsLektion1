import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn DevOps/i);
  expect(linkElement).toBeInTheDocument();
});

test("test button exists", ()=>{
    render(<App />);
    let button = screen.getByRole("button")
    expect(button).toHaveTextContent("Login");
});