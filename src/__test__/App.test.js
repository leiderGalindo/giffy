import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

test('Home work as expected', async () => {
  render(<App />)
  const text = await screen.findByText('Buscar')
  expect(text).toBeVisible()
});

test('search form could be used', async () => {
  render(<App />)
  const input = await screen.findByRole('textbox')
  const button = await screen.findByRole('button')

  fireEvent.change(input, { target: {value: 'Matrix'} })
  fireEvent.click(button)

  const title = await screen.findByText('Matrix')
  expect(title).toBeVisible()
})