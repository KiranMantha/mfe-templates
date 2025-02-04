import { SetStateAction, useState } from 'react';

type Signal<T> = {
  (): T;
  set: (v: SetStateAction<T>) => void;
};

// Overload signatures
export function useSignal<T>(initialValue?: T): Signal<T | undefined> {
  const [state, setState] = useState<T | undefined>(initialValue);
  const signal = () => state;
  signal.set = setState;
  return signal;
}
