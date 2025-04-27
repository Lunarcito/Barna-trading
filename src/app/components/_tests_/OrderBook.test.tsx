import { render, screen } from '@testing-library/react';
import OrderBook from '../OrderBook/OrderBook';

const mockProps = {
  asks: [
    { price: '100', quantity: '1' },
    { price: '101', quantity: '2' },
  ],
  bids: [
    { price: '99', quantity: '3' },
    { price: '98', quantity: '4' },
  ],
  tradingPair: {
    baseCurrencyName: 'Bitcoin',
    baseCurrency: 'BTC',
    exchangeCurrency: 'USDT',
    pairCode: 'btcusdt',
  },
  lastPrice: '100.5',
};

describe('OrderBook Component', () => {
  it('should render OrderBook correctly', () => {
    render(<OrderBook {...mockProps} />);

    const priceDollarHeaders = screen.queryAllByText('Price (USDT)');
    expect(priceDollarHeaders).toHaveLength(2);

    const amountHeaders = screen.queryAllByText('Amount (BTC)');
    expect(amountHeaders).toHaveLength(2);

    const totalHeaders = screen.queryAllByText('Total');
    expect(totalHeaders).toHaveLength(2);

    expect(screen.getByTestId('last-value-a').textContent).toEqual('100.50');
    expect(screen.getByTestId('last-value-b').textContent).toEqual('100.50');

    const allPriceElements = screen.queryAllByTestId('price');
    const allPriceValues = allPriceElements.map(
      (element) => element.textContent
    );
    const expectedPrices = ['100.00', '101.00', '99.00', '98.00'];
    expect(allPriceValues).toHaveLength(4);
    expect(allPriceValues).toEqual(expect.arrayContaining(expectedPrices));

    const allQuantityElements = screen.queryAllByTestId('quantity');
    const allQuantityValues = allQuantityElements.map(
      (element) => element.textContent
    );
    const expectedQuantities = ['1.00000', '2.00000', '3.00000', '4.00000'];
    expect(allQuantityValues).toHaveLength(4);
    expect(allQuantityValues).toEqual(
      expect.arrayContaining(expectedQuantities)
    );
  });
});
