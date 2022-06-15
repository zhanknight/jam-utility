import { render, screen } from '@testing-library/react';
import NoteButtons from './NoteButtons';

test('Renders button div', () => {
  render(<NoteButtons />);
  const buttonElement = screen.getByTestId("buttons");
  expect(buttonElement).toBeInTheDocument();
});