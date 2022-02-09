/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div>
      <Navbar />
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem'
        }}></nav>
      <Outlet />
    </div>
  );
}
