import React, { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import Layout from '@/components/layout/Layout';

import { store } from '@/store/store';

import ReduxToast from './ReduxToast';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

interface Props {
	children: React.ReactNode;
}

const MainProvider: FC<Props> = ({ children }) => {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<ReduxToast />
				<Layout>{children}</Layout>
			</QueryClientProvider>
		</Provider>
	);
};

export default MainProvider;
