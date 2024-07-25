import { useState, useEffect } from 'react';

const useStateNotifier = notifier => {
  const [state, setState] = useState(notifier.getState());

  useEffect(() => {
    const unsubscribe = notifier.subscribe(setState);
    return () => unsubscribe();
  }, [notifier]);

  return state;
};

export default useStateNotifier;
