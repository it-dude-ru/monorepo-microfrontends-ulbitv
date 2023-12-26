import { App } from '@/components/App/App';
import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { LazyShop } from '@/pages/shop/Shop.lazy';
import { LazyAbout } from '@/pages/about/About.lazy';

const routes = [
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: '/shop',
				element: <Suspense fallback={'Loading...'} > <LazyShop /></Suspense >,
			},
		],
	},
];

export const router = createBrowserRouter(routes);

export default routes;