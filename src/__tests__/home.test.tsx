import { describe, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import { act, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from '@/app/page';
import { delistedProducts, products } from './fixtures';

describe('Home page', () => {
  it('displays correctly', () => {
    render(<Home />);
    expect(screen.getByPlaceholderText('Type to search')).toBeInTheDocument();
    expect(screen.getByText('Hide delisted pairs')).toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('displays the trading pairs correctly', async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(products),
    });

    await act(async () => {
      render(<Home />);
    });

    await waitFor(() => {
      expect(screen.getByText('ETH-USDT')).toBeInTheDocument();
      expect(screen.getByText('ETH-USD')).toBeInTheDocument();
      expect(screen.getByText('BTC-USD')).toBeInTheDocument();
      expect(screen.getAllByText('Trading')).toHaveLength(3);
    });
  });

  it('display only BTC-USD when searched for btc', async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(products),
    });

    await act(async () => {
      render(<Home />);
    });

    await userEvent.type(screen.getByTestId('search-input'), 'btc');
    expect(screen.getByText('BTC-USD')).toBeInTheDocument();
    expect(screen.getAllByText('Trading')).toHaveLength(1);
  });

  it('display only trading pairs when hide toggle is on', async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve([...products, ...delistedProducts]),
    });

    await act(async () => {
      render(<Home />);
    });

    expect(screen.getAllByText('Trading')).toHaveLength(3);
    expect(screen.getAllByText('Delisted')).toHaveLength(1);
    expect(screen.getByText('ETH-USDC')).toBeInTheDocument();

    await userEvent.click(screen.getByTestId('hide-delisted-toggle'));
    expect(screen.queryAllByText('Delisted')).toHaveLength(0);
    expect(screen.getAllByText('Trading')).toHaveLength(3);
    expect(screen.queryByText('ETH-USDC')).not.toBeInTheDocument();
  });
});
