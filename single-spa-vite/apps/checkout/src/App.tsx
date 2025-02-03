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

export default function App({ isSingleSpa, basename = '/' }: { isSingleSpa: boolean; basename: string }) {
  const Router = isSingleSpa ? MemoryRouter : BrowserRouter;
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
