import { render, screen } from '@testing-library/react';
import OrderBookHeader from '../OrderBook/OrderBookHeader';

const mockProps = {
  exchangeCurrency: 'USD',
  baseCurrency: 'BTC',
};

describe('OrderBookHeader Component', () => {
  it('should render correctly with provided props', () => {
    render(<OrderBookHeader {...mockProps} />);

    expect(screen.getByText('Price (USD)')).toBeInTheDocument();

    expect(screen.getByText('Amount (BTC)')).toBeInTheDocument();

    expect(screen.getByText('Total')).toBeInTheDocument();
  });

  it('should display the correct currencies in the headers', () => {
    render(<OrderBookHeader {...mockProps} />);

    expect(screen.getByText('Price (USD)')).toBeInTheDocument();

    expect(screen.getByText('Amount (BTC)')).toBeInTheDocument();
  });
});
