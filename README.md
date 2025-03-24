Barna Trading

Barna Trading is a real-time cryptocurrency trading dashboard that allows users to view live market data, including OHLCV (Open, High, Low, Close, Volume) data, order book information, and interactive candlestick charts for selected trading pairs. This app pulls data from the Binance API to provide real-time updates on market conditions.

Features

Real-time market data: Displays up-to-date OHLCV data, price changes, and 24h trading volumes for supported trading pairs.

Order Book: Shows the live order book (asks and bids) for selected trading pairs.

Candlestick Chart: Visualizes price movements using candlestick charts.

Error handling: Displays error messages when data fails to load.

WebSocket integration: Maintains a WebSocket connection to receive real-time updates for price changes and order book changes.

Technologies Used:

React: Frontend framework for building the user interface.

TypeScript: Static typing for better code reliability and tooling.

Binance API: Fetches real-time market data and order book updates.

WebSockets: Real-time data streaming from Binance for live price and order updates.

Tailwind CSS: Utility-first CSS framework for styling the UI.

Setup

Clone the repository:

git clone https://github.com/your-username/barna-trading.git
cd barna-trading

Install dependencies:

npm install

Start the development server:

npm run dev

Open your browser and go to http://localhost:3000 to view the application.

Supported Trading Pairs

Bitcoin/USDT (BTC/USDT)

Ethereum/USDT (ETH/USDT)

Solana/USDT (SOL/USDT)

Cardano/USDT (ADA/USDT)

You can select any of these pairs from the dropdown menu to view the corresponding market data.

Error Handling

If there is an issue with fetching the data or connecting to WebSocket streams, an error message will be displayed at the top of the page, providing feedback to the user.

WebSocket Reconnection

The app automatically handles WebSocket disconnections and attempts to reconnect to maintain continuous real-time updates.
