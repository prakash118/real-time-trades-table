This is a IMMIX code challange project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

------------------------------------------

_*Note: While both themes are functional, the dark theme has received more styling attention during this development phase._

### Home page (/)

This component presents a list of available trading pairs, sourced from a REST API. Because data retrieval is handled on the server (using a Server Component), sensitive API details remain hidden from the client. Clicking a trading pair directs the user to a the details view.

### Details page (/trading-pair-detail/)

The page provides a real-time view of trades. When a trading pair is selected, its corresponding trades are displayed. If the URI lacks a trading pair parameter, ETH-USD (/trading-pair-detail/eth-usd) is the default.

This project utilizes the `react-use-websocket` library for WebSocket functionality. While this offers advantages over a custom implementation, its primary benefit in this context is accelerated development.
