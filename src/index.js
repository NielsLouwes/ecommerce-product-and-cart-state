/* eslint-disable prettier/prettier */
import { render } from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Expenses from './pages/Expenses';
import Invoices from './pages/Invoices';
import Products from './pages/Products';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="products" element={<Products />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);


