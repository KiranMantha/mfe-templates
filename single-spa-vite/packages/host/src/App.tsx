import { useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { fromEvent, useSSE } from 'utils';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

function Layout() {
  useSSE();

  useEffect(() => {
    const unsubscribe = fromEvent(document, 'sse', (e: CustomEvent) => {
      console.log('from host app', e.detail);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="host-app">
      <nav id="nav">
        <Link to="/">Home</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
      <main id="content">
        <Routes>
          <Route path="/checkout/*" element={<div id="checkout-root"></div>} />
          <Route
            path="/"
            element={
              <div className="dashboard">
                <div id="user-root" className="column"></div>
                <div id="recommendations-root" className="column"></div>
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  );
}
