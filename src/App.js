/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { Outlet, Link } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div>
      <Navbar />
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem'
        }}>
        <Link to="/invoices">Invoices</Link> | <Link to="/expenses">Expenses</Link> |{' '}
        <Link to="/products">Products</Link>
      </nav>
      <Outlet />
    </div>
  );
}
