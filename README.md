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

### Happy path!!

Testing and error handling have not yet been implemented. While the home page utilizes Suspense for some basic error management, comprehensive error handling, particularly for WebSocket connections, is required. The details page intentionally uses a table layout, for responsive design, a condensed table or an alternative display format is required on smaller screens.

### Extra feature

I had a few ideas for additional features, including adding a logger (technical) and enhancing the details view table by making it configurable (functional). However, the primary focus will now be implementing a search feature on the home page, as finding trading pairs there is currently difficult.

### Feat: Search treading pair

Since i implemented the List component as a server component, it was bit painful to communicate between server and client component. I have added the search bar to filter the trading pair by key words and added an additional toggle to hide the delisted trading pairs. 



