import { useEffect } from 'react';
import { BrowserRouter, Link, MemoryRouter, Route, Routes } from 'react-router-dom';
import './App.css';

const fromEvent = (target: Window, eventName: string, onNext: EventListener, options = false) => {
  target.addEventListener(eventName, onNext, options);
  const unsubscribe = () => {
    target.removeEventListener(eventName, onNext, options);
  };
  return unsubscribe;
};

export default function App({ isSingleSpa = false, basename = '/' }: { isSingleSpa: boolean; basename: string }) {
  const Router = isSingleSpa ? MemoryRouter : BrowserRouter;

  // const navigate = useNavigate();

  // Sync with host router
  useEffect(() => {
    if (isSingleSpa) {
      const hostNavigate = (event: Event) => {
        console.log('single-spa:routing-event', event);
        const customEvent = event as CustomEvent;
        const newUrl: string = customEvent.detail?.newUrl || '/';
        const newPath = new URL(newUrl, window.location.origin).pathname; // Extract pathname

        window.history.pushState(null, '', newPath);
      };
      const unsubscribe = fromEvent(window, 'single-spa:routing-event', hostNavigate);
      return () => unsubscribe();
    }
  }, [basename, isSingleSpa]);

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
            <Route
              index
              element={
                <div className="card">
                  <h1>User Dashboard</h1>
                </div>
              }
            />
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
