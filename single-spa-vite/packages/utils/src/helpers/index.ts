export const fromEvent = (
  target: HTMLElement | Document | Window,
  eventName: string,
  onNext: EventListener | ((e: CustomEvent) => void),
  options = false
) => {
  target.addEventListener(eventName, onNext as EventListener, options);
  const unsubscribe = () => {
    target.removeEventListener(eventName, onNext as EventListener, options);
  };
  return unsubscribe;
};

export const emitCustomEvent = (element: HTMLElement | Document | Window, eventName: string, payload: unknown) => {
  const event = new CustomEvent(eventName, {
    detail: payload
  });
  element.dispatchEvent(event);
};
