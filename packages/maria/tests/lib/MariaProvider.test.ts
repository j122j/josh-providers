import { runProviderTest } from '@joshdb/provider';
import { MariaProvider } from '../../src';

runProviderTest<typeof MariaProvider, MariaProvider.Options, MariaProvider>({
  providerConstructor: MariaProvider,
  providerOptions: {},
  cleanup: (provider) => provider.close()
});
