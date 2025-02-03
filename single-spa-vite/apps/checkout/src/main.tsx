import React, { StrictMode } from 'react';
import ReactDom from 'react-dom';
import { createRoot } from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import App from './App.tsx';
import './index.css';

const lifecycles = singleSpaReact({
  React,
  ReactDOM: ReactDom,
  rootComponent: App,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  errorBoundary: (_err: unknown, _info: unknown, _props: unknown) => <div>Error in checkout</div>
});

export const { bootstrap, mount, unmount } = lifecycles;

// Standalone mode
if (import.meta.env.DEV) {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App isSingleSpa={false} basename="/" />
    </StrictMode>
  );
}
