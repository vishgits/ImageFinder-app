import FallbackPage from './FallbackPage';
import { render, screen } from '@testing-library/react';

describe('FallbackPage', () => {
  it('renders with default props', () => {
    render(<FallbackPage />);
    expect(screen.getByText('OOPS! Something went wrong')).toBeInTheDocument();
    expect(screen.getByText('Sorry, we are facing some techincal issue, please try after sometime')).toBeInTheDocument();
  });

  it('renders with passed props', () => {
    const heading = 'Test heading';
    const description = 'Test description';
    
    render(<FallbackPage heading={heading} description={description} />);
    
    expect(screen.getByText(heading)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});