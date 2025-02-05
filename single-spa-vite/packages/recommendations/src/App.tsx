import { BrowserRouter, Link, MemoryRouter, Route, Routes } from 'react-router-dom';
import { CustomEvents, useCustomEvent, useSignal, useSPARouting } from 'utils';
import './App.css';

const Recommendations = () => {
  const greeting = useSignal('');
  useCustomEvent(CustomEvents.ON_ADD_RECOMMENDATION, (data: { greeting: string }) => {
    greeting.set(data.greeting);
  });
  return (
    <div className="card">
      <h1>Recommendations</h1>
      <p>{greeting()}</p>
    </div>
  );
};

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
            <Route index element={<Recommendations />} />
          </Routes>
        </fieldset>
      </div>
    </Router>
  );
}

export default App;
