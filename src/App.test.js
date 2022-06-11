import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders title', () => {
  render(<App />);
  const titleElement = screen.getByTestId("title");
  expect(titleElement).toBeInTheDocument();
});

test('Renders checkbox component', () => {
  render(<App />);
  const checkboxComponent = screen.getByTestId("checkboxes");
  expect(checkboxComponent).toBeInTheDocument();
});
