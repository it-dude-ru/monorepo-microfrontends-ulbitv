import {createRoot} from 'react-dom/client';
import { App } from './components/App/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { LazyShop } from '@/pages/shop/Shop.lazy';
import { LazyAbout } from '@/pages/about/About.lazy';
import { router } from './router/Router';

const root = document.getElementById('root');
console.log('root = ', root);

if (!root) {
	throw new Error('root div not found');
}

const container = createRoot(root);



container.render(<RouterProvider router={router} />); 