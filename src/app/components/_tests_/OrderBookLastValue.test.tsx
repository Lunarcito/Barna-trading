import { render, screen } from "@testing-library/react";
import OrderBookLastValue from "../OrderBook/OrderBookLastValue";
import { formatMoney } from "../../utils/Formatter";

jest.mock("../../utils/Formatter", () => ({
    formatMoney: jest.fn(),
}));

describe("OrderBookLastValue", () => {
    
    it("debería renderizar el valor formateado correctamente", () => {
    const mockValue = "1000";
    const formattedValue = "$1,000.00";

    formatMoney.mockReturnValue(formattedValue);

    render(<OrderBookLastValue value={mockValue} />);

    expect(formatMoney).toHaveBeenCalledWith(mockValue);

    expect(screen.getAllByText(formattedValue).length).toBe(2);

    const divs = screen.getAllByText(formattedValue);
    expect(divs[0]).toHaveTextContent(formattedValue);
    expect(divs[1]).toHaveTextContent(formattedValue);
  });
});
