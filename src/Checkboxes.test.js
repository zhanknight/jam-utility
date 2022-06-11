import { render, screen } from '@testing-library/react';
import Checkboxes from './Checkboxes';

test('Renders button div', () => {
  render(<Checkboxes />);
  const buttonElement = screen.getByTestId("buttons");
  expect(buttonElement).toBeInTheDocument();
});