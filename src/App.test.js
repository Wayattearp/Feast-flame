import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Form from './components/Booking/Form';

describe('Form component JavaScript validation', () => {
  test('Form should be valid with correct number of guests', () => {
    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );

    const guestsInput = screen.getByLabelText('Number of guests:');

    fireEvent.change(guestsInput, { target: { value: '5' } });
    expect(guestsInput.value).toBe('5');

    // The submit button should be enabled when the form is valid
    const submitButton = screen.getByRole('button', { name: 'Make Your reservation' });
    expect(submitButton).toBeEnabled();
  });

  test('Form should be invalid with too few guests', () => {
    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );

    const guestsInput = screen.getByLabelText('Number of guests:');

    fireEvent.change(guestsInput, { target: { value: '0' } });
    expect(guestsInput.value).toBe('0');

    // The submit button should be disabled when the form is invalid
    const submitButton = screen.getByRole('button', { name: 'Make Your reservation' });
    expect(submitButton).toBeDisabled();
  });

  test('Form should be invalid with too many guests', () => {
    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );

    const guestsInput = screen.getByLabelText('Number of guests:');

    fireEvent.change(guestsInput, { target: { value: '11' } });
    expect(guestsInput.value).toBe('11');

    // The submit button should be disabled when the form is invalid
    const submitButton = screen.getByRole('button', { name: 'Make Your reservation' });
    expect(submitButton).toBeDisabled();
  });

  test('Form should be valid with a selected occasion', () => {
    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );

    const occasionSelect = screen.getByLabelText('Occasion:');
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

    // The submit button should be enabled when the form is valid
    const submitButton = screen.getByRole('button', { name: 'Make Your reservation' });
    expect(submitButton).toBeEnabled();
  });

});
