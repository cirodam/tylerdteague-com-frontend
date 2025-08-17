
import { render, screen } from '@testing-library/react';
import Landing from './Landing';
import { BrowserRouter } from 'react-router-dom';

describe('Landing Page', () => {
  it('renders welcome message', () => {
    render(
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    );
    expect(screen.getByText(/Welcome to tylerdteague_frontend/i)).toBeInTheDocument();
  });
});
