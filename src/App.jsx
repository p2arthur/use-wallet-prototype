import React, { useEffect } from 'react';
import {
  reconnectProviders,
  initializeProviders,
  WalletProvider,
  PROVIDER_ID,
} from '@txnlab/use-wallet';

import Connect from './components/Connect';

const walletProviders = initializeProviders([
  PROVIDER_ID.MYALGO,
  PROVIDER_ID.PERA,
]);

export default function ConnectWallet() {
  useEffect(() => {
    reconnectProviders(walletProviders);
  }, []);

  return (
    <WalletProvider value={walletProviders}>
      <Connect />
    </WalletProvider>
  );
}
