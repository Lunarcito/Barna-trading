import { render, screen } from '@testing-library/react';
import OrderBook from '../OrderBook/OrderBook';

const mockProps = {
  asks: [
    { price: "100", quantity: "1" },
    { price: "101", quantity: "2" },
  ],
  bids: [
    { price: "99", quantity: "3" },
    { price: "98", quantity: "4" },
  ],
  tradingPair: {
    baseCurrencyName: 'Bitcoin',
    baseCurrency: 'BTC',
    exchangeCurrency: 'USDT',
    pairCode: 'btcusdt',
  },
  lastPrice: "100.5",
};

describe('OrderBook Component', () => {
  it('should render OrderBook correctly', () => {
    render(<OrderBook {...mockProps} />);
    const priceDollarHeaders = screen.queryAllByText('Price (USDT)');
    expect(priceDollarHeaders).toHaveLength(2);

    const amountHeaders = screen.queryAllByText('Amount (BTC)');
    expect(amountHeaders).toHaveLength(2);
  });
});
