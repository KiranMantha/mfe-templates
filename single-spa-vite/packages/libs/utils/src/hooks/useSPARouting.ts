import { useEffect } from 'react';
import { fromEvent } from '../helpers';

export const useSPARouting = (isSingleSpa: boolean, basename: string) => {
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
  }, [isSingleSpa, basename]);
};
