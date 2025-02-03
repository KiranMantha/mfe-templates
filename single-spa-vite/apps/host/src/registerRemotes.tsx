/* eslint-disable @typescript-eslint/no-empty-object-type */
import { createElement } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { LifeCycles, registerApplication } from 'single-spa';

type Remote = {
  name: string;
  module: () => Promise<{
    default: React.ComponentType<{
      isSingleSpa?: boolean;
      basename?: string;
    }>;
  }>;
  placeholderElement: string;
  activeWhen: string | ((location: { pathname: string }) => boolean);
  root: Root | null;
};

const remotes: Remote[] = [
  {
    name: 'user',
    placeholderElement: 'user-root',
    root: null,
    module: async () => await import('user/App'),
    activeWhen: (location: { pathname: string }) => location.pathname === '/'
  },
  {
    name: 'recommendations',
    placeholderElement: 'recommendations-root',
    root: null,
    module: async () => await import('recommendations/App'),
    activeWhen: (location) => location.pathname === '/'
  },
  {
    name: 'checkout',
    placeholderElement: 'checkout-root',
    root: null,
    module: async () => await import('checkout/App'),
    activeWhen: (location) => location.pathname === '/checkout'
  }
];

const registerRemoteApplications = (remotes: Remote[]) => {
  for (const remote of remotes) {
    registerApplication({
      name: remote.name,
      app: async () => {
        const module = await remote.module();
        return {
          bootstrap: () => Promise.resolve(),
          mount: () => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                const rootElement = document.getElementById(remote.placeholderElement);
                if (!rootElement) {
                  return reject(`${remote.placeholderElement} not found`);
                }

                // Create a new root and render the app
                if (!remote.root) {
                  remote.root = createRoot(rootElement);
                }
                remote.root.render(createElement(module.default, { isSingleSpa: true }));
                resolve('');
              });
            });
          },
          unmount: () => {
            return new Promise((resolve) => {
              if (remote.root) {
                remote.root.unmount();
              }
              remote.root = null;
              resolve(`${remote.placeholderElement} unmounted successfully`);
            });
          }
        } as LifeCycles<{}>;
      },
      activeWhen: remote.activeWhen
    });
  }
};

// Register remote applications
const registerRemotes = () => {
  registerRemoteApplications(remotes);
};

export { registerRemotes };
