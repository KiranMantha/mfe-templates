import { CustomEvents, useCustomEvent, useSPARouting } from 'libs/utils';
import { BrowserRouter, Link, MemoryRouter, Route, Routes } from 'react-router-dom';
import './App.css';

const UserDashboard = () => {
  const dispatchEvent = useCustomEvent(CustomEvents.ON_ADD_RECOMMENDATION);
  return (
    <div className="card">
      <h1>User Dashboard</h1>
      <button
        onClick={() => {
          dispatchEvent({
            greeting: 'hello recommendations app!! from user app'
          });
        }}
      >
        Send Data To Recommendations
      </button>
    </div>
  );
};

export default function App({ isSingleSpa = false, basename = '/' }: { isSingleSpa: boolean; basename: string }) {
  const Router = isSingleSpa ? MemoryRouter : BrowserRouter;

  useSPARouting(isSingleSpa, basename);

  return (
    <Router basename={basename}>
      <div className="remote-app">
        <fieldset>
          <legend>User App</legend>
          <nav>
            <Link to="/" className="mr-10">
              User Home
            </Link>
            <Link to="/profile">Profile</Link>
          </nav>
          <Routes>
            <Route index element={<UserDashboard />} />
            <Route
              path="/profile"
              element={
                <div className="card">
                  <h1>User Profile</h1>
                </div>
              }
            />
            <Route path="*" element={<h1>User 404</h1>} />
          </Routes>
        </fieldset>
      </div>
    </Router>
  );
}
