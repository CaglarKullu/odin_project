import { useState, useEffect } from 'react';
import { memoize } from '../utils/memoize';

export const useStateSelector = (notifier, selector) => {
  const memoizedSelector = memoize(selector);
  const [selectedState, setSelectedState] = useState(memoizedSelector(notifier.getState()));

  useEffect(() => {
    const unsubscribe = notifier.subscribeToSelector(memoizedSelector, setSelectedState);
    return () => unsubscribe();
  }, [notifier, memoizedSelector]);

  return selectedState;
};

export default useStateSelector;
