import { useSPARouting } from 'libs/utils';
import { BrowserRouter, Link, MemoryRouter, Route, Routes } from 'react-router-dom';
import './App.css';

export default function App({ isSingleSpa, basename = '/' }: { isSingleSpa: boolean; basename: string }) {
  const Router = isSingleSpa ? MemoryRouter : BrowserRouter;

  useSPARouting(isSingleSpa, basename);

  return (
    <Router basename={basename}>
      <div className="remote-app">
        <fieldset>
          <legend>Checkout App</legend>
          <nav>
            <Link to="/">Checkout</Link>
          </nav>
          <Routes>
            <Route
              index
              element={
                <div className="card">
                  <h1>Checkout</h1>
                </div>
              }
            />
          </Routes>
        </fieldset>
      </div>
    </Router>
  );
}
