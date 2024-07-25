const memoize = fn => {
    const cache = new Map();
    return (...args) => {
      const key = JSON.stringify(args);
      if (!cache.has(key)) {
        const result = fn(...args);
        cache.set(key, result);
      }
      return cache.get(key);
    };
  };
  
  module.exports = memoize;
  