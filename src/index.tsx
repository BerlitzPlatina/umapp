import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ArticleList from './features/articles/components/ArticleList';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './lib/react-query';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/hello',
    element: <div>Hello word</div>
  },
  {
    path: '/articles',
    element: <ArticleList />
  }
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
