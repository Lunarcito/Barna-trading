import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import OrderBookItem, { calculateTotal } from '../OrderBook/OrderBookItem';

describe('OrderBookItem', () => {

  it('renders price, quantity, and total correctly', () => {
    const price = '10.00';
    const quantity = '2';
    const expectedTotal = '20.00';

    render(<OrderBookItem price={price} quantity={quantity} />);

    expect(screen.getByTestId('price')).toHaveTextContent(price);
    expect(screen.getByTestId('quantity')).toHaveTextContent(quantity);
    expect(screen.getByTestId('total')).toHaveTextContent(expectedTotal);
  });

  it('renders empty total if price or quantity is null or undefined', () => {
    const price = '';
    const quantity = '';

    render(<OrderBookItem price={price} quantity={quantity} />);

    expect(screen.getByTestId('price')).toHaveTextContent('0');
    expect(screen.getByTestId('quantity')).toHaveTextContent('0');
    expect(screen.getByTestId('total')).toHaveTextContent('0');
  });

  it('calls calculateTotal with correct arguments', () => {
    const price = '5.00';
    const quantity = '3';
    const expectedTotal = '15.00';
  
    const result = calculateTotal(price, quantity);
    expect(result).toEqual(expectedTotal);
  });

});
