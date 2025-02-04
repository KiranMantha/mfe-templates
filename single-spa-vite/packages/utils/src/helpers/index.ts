export const fromEvent = (target: Window, eventName: string, onNext: EventListener, options = false) => {
  target.addEventListener(eventName, onNext, options);
  const unsubscribe = () => {
    target.removeEventListener(eventName, onNext, options);
  };
  return unsubscribe;
};

export const emitCustomEvent = (element: HTMLElement | Document, eventName: string, payload: unknown) => {
  const event = new CustomEvent(eventName, {
    detail: payload
  });
  element.dispatchEvent(event);
};
