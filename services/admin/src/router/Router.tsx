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
				path: '/about',
				element: <Suspense fallback={'Loading...'} ><LazyAbout /></Suspense >,
			},
		],
	},
];

export const router = createBrowserRouter(routes);

export default routes;