import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders title', () => {
  render(<App />);
  const titleElement = screen.getByTestId("title");
  expect(titleElement).toBeInTheDocument();
});

test('Renders NoteButtons component', () => {
  render(<App />);
  const buttonComponent = screen.getByTestId("notebuttons");
  expect(buttonComponent).toBeInTheDocument();
});
