import { useCallback, useEffect, type Dispatch } from 'react';
import { CustomEvents } from '../customEvents';
import { emitCustomEvent, fromEvent } from '../helpers';

interface Payload<T = unknown> extends Event {
  detail: T;
}

export const useCustomEvent = <T = unknown>(eventName: CustomEvents, callback?: Dispatch<T> | VoidFunction) => {
  useEffect(() => {
    if (!callback) {
      return;
    }

    const listener = ((event: Payload<T>) => {
      callback(event.detail); // Use `event.detail` for custom payloads
    }) as EventListener;

    const unsubscribe = fromEvent(window, eventName, listener);
    return () => {
      unsubscribe();
    };
  }, []);

  const dispatchEvent = useCallback((detail: T) => {
    emitCustomEvent(window, eventName, detail);
  }, []);

  // Return a function to dispatch the event
  return dispatchEvent;
};
