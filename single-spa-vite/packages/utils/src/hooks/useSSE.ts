import { fetchEventSource } from '@microsoft/fetch-event-source';
import { useEffect } from 'react';
import { emitCustomEvent } from '../helpers';
import { useSignal } from './useSignal';

export type SSEMessage = { notificationType: string } & Record<string, unknown>;

const REACT_APP_SSE_URL = '';

export const useSSE = () => {
  const controller = useSignal<AbortController>();

  useEffect(() => {
    const newController = new AbortController();
    controller.set(newController);
    fetchEventSource(REACT_APP_SSE_URL, {
      headers: {},
      signal: newController.signal,
      onerror: (e) => {
        newController.abort();
        console.log('event received error', e);
      },
      onmessage: (e) => {
        console.log('sseMessage', e.data);
        if (e.data) {
          const sseMessage = JSON.parse(e.data) as SSEMessage;
          emitCustomEvent(document, 'sse', sseMessage);
        }
      }
    });

    return () => {
      controller()!.abort();
    };
  }, []);
};
