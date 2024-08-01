import { useState, useEffect } from 'react';

export const useStateNotifier = notifier => {
  const [state, setState] = useState(notifier.getState());

  useEffect(() => {
    const unsubscribe = notifier.subscribe((newState) => {
      setState(newState);
    });
    return () => unsubscribe();
  }, [notifier]);

  return state;
};

export default useStateNotifier;
