import { BrowserRouter, Link, MemoryRouter, Route, Routes } from 'react-router-dom';
import { useSPARouting } from 'utils';
import './App.css';

function App({ isSingleSpa, basename = '/' }: { isSingleSpa: boolean; basename: string }) {
  const Router = isSingleSpa ? MemoryRouter : BrowserRouter;

  useSPARouting(isSingleSpa, basename);

  return (
    <Router basename={basename}>
      <div className="remote-app">
        <fieldset>
          <legend>Recommendations App</legend>
          <nav>
            <Link to="/">Recommendations</Link>
          </nav>
          <Routes>
            <Route
              index
              element={
                <div className="card">
                  <h1>Recommendations</h1>
                </div>
              }
            />
          </Routes>
        </fieldset>
      </div>
    </Router>
  );
}

export default App;
